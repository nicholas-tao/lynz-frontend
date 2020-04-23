import React from "react";
import axios from "axios";
// import {
//   ButtonDropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
// } from "reactstrap";
import "./Components.css";

class Viewpage extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRadius = this.onChangeRadius.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      latitude:"",
      longitude:"",
      radius: ""
    };
  }

  onChangeRadius(e) {
    this.setState({
      radius: e.target.value,
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }) 
    }.bind(this))
  }
  

  onSubmit(e) {
    e.preventDefault(); //idk what this does; maybe prevents empty fields from being sent 

    const coordsradius = {
      latitude: this.state.latiude,
      longitude: this.state.longitude,
      radius: this.state.radius
    };

    /*
    console.log(address);
    console.log(storeAddress);
    console.log(busyness);
    console.log(storeName);
    */
   console.log(this.state);

  /*  axios
      .post("http://localhost:5000/busyness/add", coordsradius)
      .then((res) => console.log(res.data));*/

    this.setState({
      radius: ""
    });
  }

  render() {
    return (
      <div className="all">

        <form onSubmit={this.onSubmit} className="form1">
          <div className="viewing">
            <div className="InputRadius">
              <input
                placeholder="Enter the Radius"
                value={this.state.radius}
                onChange={this.onChangeRadius}
              />
            </div>

            <div className="form-group1">
              <button onClick={(e) => this.onSubmit(e)}> Submit! </button>
            </div>
          </div>
        </form>

        <div className="grid">
          <p>heres where the stuff actually goes LOL</p>
        </div>

      </div>
    );
  }
}
export default Viewpage;