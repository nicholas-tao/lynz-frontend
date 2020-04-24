import React from "react";
import axios from "axios";
import "./Components.css";
import styled from 'styled-components';

class Viewpage extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRadius = this.onChangeRadius.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      latitude: "",
      longitude: "",
      radius: "",
      // storesdata:""
    };
  }

  onChangeRadius(e) {
    this.setState({
      radius: e.target.value,
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }.bind(this)
    );
  }

  onSubmit(e) {
    e.preventDefault();

    const coordsAndRadius = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      radius: this.state.radius,
    };
    console.log(this.state);
    /*  axios
      .post("http://localhost:5000/busyness/view", coordsAndRadius)
      .then((res) => console.log(res.data));
*/

    axios
      .get("http://localhost:5000/busyness/getstores")
      .then((response) => {
        //this.setState({ storedata: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      radius: "",
    });
  }

  render() {
    return (
      <div className="all">
        <div className="viewing">
          <div className="InputRadius">
            <input
              placeholder="Enter the Radius"
              value={this.state.radius}
              onChange={this.onChangeRadius}
            />
          </div>

          <div className="button1">
            <button className = "actualButton" onClick={(e) => this.onSubmit(e)}> Submit! </button>
          </div>
        </div>

        <div className="grid">
          <p>heres where the stuff actually goes LOL</p>
        </div>

        <div className="footerbottom">
          <div className="bodyleft">
            <p className="footertext1">
              {" "}
              Created by Adam Lam, Matthew Jiao, Nicholas Tao
            </p>
          </div>

          <div className="bodyright">
            <p className="footertext2"> &copy; Grocery Store Tracker 2020 </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Viewpage;
