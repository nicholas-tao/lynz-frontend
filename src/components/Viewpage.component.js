import React from "react";
import axios from "axios";
import "./Components.css";
import styled from 'styled-components';
import test from "./test.json"

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
      received: false
    };
  }
  makeGrid(test){
    this.changeStoredata(test);
    console.log("hi");
  }

  changeStoredata(test){
    this.setState({
      storedata: test.data,
      received: true
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
    e.preventDefault();

    const coordsAndRadius = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      radius: this.state.radius,
    };
    /*  axios
      .post("http://localhost:5000/busyness/view", coordsAndRadius)
      .then((res) => console.log(res.data));
*/

   /* axios
      .get("http://localhost:5000/busyness/getstores")
      .then((response) => {
        this.setState({ storedata: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });*/
    //pass the file into here as test
      this.makeGrid(test);

    console.log(this.state);
    this.setState({
      radius: "",
    });
  }

  renderMatches(data) {
    if(this.state.received == true){
    return data.map(data => {
      return (
          <div class="col-lg-4">
              <div id="one">
                  <p className="Store"><h3> {data.name}</h3></p>
                  <p><h4>{data.busyness}</h4></p>
                  <p>{data.address}</p>
      
              </div>
          </div>
      );
  })
}
}


  render() {
    //think i need code here 
    let greet= "?"
   
    let listNames = "";
    let listAddr = "";
    let listBusy = "";
    let number = "";
    let table = "";
    let gooddata = [];
    let data = ""
    if(this.state.received == true){
    greet = "hihi";
    // listNames = data.map((d) => <li key={d.name}>{d.name}</li>);
    // listAddr = data.map((d) => <li key={d.address}>{d.address}</li>);
    // listBusy = data.map((d) => <li key={d.busyness}>{d.busyness}</li>); useless for now
    // number = listNames.length;

    data = test.data;    //setting a variable (data) to the json.data 
    //table = this.Table(listNames, listAddr, listBusy, number);
    // for(let i = 0; i < number; i++){
    //   gooddata[i] = listNames[i]+" "+ listAddr[i]+" "+ listBusy[i];
    // }

  }
    return (
      <div className="all">
        <div className="viewing">
            <input id = "radius"
              placeholder="Enter the Radius"
              value={this.state.radius}
              onChange={this.onChangeRadius}
            />
            <button 
              className = "actualButton1" 
              onClick={(e) => { this.onSubmit(e) }}> 
              Get Stores! 
            </button>
        </div>


        <div className = "row">
          {this.renderMatches(data)}
            
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
