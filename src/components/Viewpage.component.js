import React from "react";
import axios from "axios";
import "./Components.css";
//import test from "./test.json"; //@NICK CHANGE HERE
//import test from "./test2.json";
//var test = [];
var classNames = require("classnames");

class Viewpage extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRadius = this.onChangeRadius.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeStoredata = this.changeStoredata.bind(this);
    this.makeGrid = this.makeGrid.bind(this);

    this.state = {
      latitude: "",
      longitude: "",
      radius: "",
      storedata: "",
      received: false,
      textClass: this.computeClass(0),
    };
  }
  makeGrid(data) {
    this.changeStoredata(data);
    console.log("makegrid");
  }

  changeStoredata(res) {
    this.setState({
      storedata: res.data,
      received: true,
    });
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
    // test = [];
    e.preventDefault();

    const coordsAndRadius = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      radius: this.state.radius,
    };

    /*   axios
      .post("http://localhost:5000/busyness/view", coordsAndRadius)
      .then((res) => console.log(res.data));
*/
    axios
      .post("http://localhost:5000/busyness/getstores", {
        data: {
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          radius: this.state.radius,
        },
      })
      .then((response) => {
        var res = response.data;
        this.changeStoredata(res);
        console.log("res:" + res);
        //pass the file into here as test
        this.makeGrid(res); // im not sure if this method really does anything // I think replace this with the response
        this.setState({ storedata: res }); //for nick the line assignment thats needed is at 153
        //see if you can store the object (not object.data) into somewhere then go to line 154
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.state);
    this.setState({
      radius: "",
    });
  }

  renderMatches(data) {
    if (this.state.received === true) {
      console.log("true");
      return data.map((data) => {
        return (
          <div className="col-lg-4">
            <div className="one">
              <div className="Store">
                <h3> {data.name}</h3>
              </div>

              {this.computeClass(data.busyness)}

              <div className="Address">
                <p>
                  <i>{data.address}</i>
                </p>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="greeting"> Enter a radius to see stores near you!</div>
      );
    }
  }

  computeClass(e) {
    var btnClass = classNames({
      green: e === "Not Busy",
      "green-yellow": e === "Somewhat Busy",
      yellow: e === "Moderately Busy",
      orange: e === "Busy",
      red: e === "Very Busy",
      brown: e === "Extremely Busy",
      blue: e === "Insufficient Data",
    });
    return (
      <div className={btnClass}>
        <b>{e}</b>
      </div>
    );
  }

  render() {
    let data = "";
    if (this.state.received === true) {
      data = this.state.storedata; //setting a variable (data) to the json.data //to change the test thing
      // }
    }
    return (
      <div className="all">
        <div className="content-wrap">
          <div className="viewing">
            <input
              id="radius"
              placeholder="Enter the Radius (meters)"
              value={this.state.radius}
              onChange={this.onChangeRadius}
            />
            <button
              className="actualButton1"
              onClick={(e) => {
                this.onSubmit(e);
              }}
            >
              Get Stores!
            </button>
          </div>

          <div className="row">{this.renderMatches(data)}</div>
        </div>

        <div className="footerbottom">
          <div className="bodyleft">
            <p className="footertext1">
              {" "}
              Created by Adam Lam, Matthew Jiao, Nicholas Tao
            </p>
          </div>

          <div className="bodyright">
            <p className="footertext2"> &copy; Lynz 2020 </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Viewpage;
