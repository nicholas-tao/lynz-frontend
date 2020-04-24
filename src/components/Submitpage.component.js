import React from "react";
import axios from "axios";

import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import "./Components.css";
import helping from "..//images/helpingedit.jpg"

class Submitpage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);

    this.onChangeStoreAddress = this.onChangeStoreAddress.bind(this);
    this.onChangeStoreName = this.onChangeStoreName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      dropdownOpen: false,
      busyness: "Select Busyness",
      storeAddress: "",
      storeName: "",
      latitude:"",
      longitude:""
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }.bind(this)
    );
  }

  onChangeStoreAddress(e) {
    this.setState({
      storeAddress: e.target.value,
    });
  }
  onChangeStoreName(e) {
    this.setState({
      storeName: e.target.value,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText,
      busyness: event.target.innerText,
    });
  }

  onSubmit(e) {
    e.preventDefault(); //idk what this does; maybe prevents empty fields from being sent

    const busyness = {
      storeAddress: this.state.storeAddress,
      storeName: this.state.storeName,
      busyness: this.state.busyness,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    };

    /*
    console.log(storeAddress);
    console.log(busyness);
    console.log(storeName);
    */
    console.log(this.state);
    /*  axios
      .post("http://localhost:5000/busyness/add", busyness)
      .then((res) => console.log(res.data));*/

    this.setState({
      busyness: "Select Busyness",
      storeAddress: "",
      storeName: "",
    });
  }

  render() {
    return (

      <div className="busyness">
        <div className="enterStoreName">
          <input
            placeholder="Enter the store name"
            value={this.state.storeName}
            onChange={this.onChangeStoreName}
          />
        </div>
        <div className="enterStoreAddress">
          <input
            placeholder="Enter the store address"
            value={this.state.storeAddress}
            onChange={this.onChangeStoreAddress}
          />
        </div>

        <div className="submitToggle">
          <ButtonDropdown
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
          <DropdownToggle>{this.state.busyness}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.select}>
              Not Busy At All
            </DropdownItem>
            <DropdownItem onClick={this.select}>Normal</DropdownItem>
            <DropdownItem onClick={this.select}>Busy</DropdownItem>
            <DropdownItem onClick={this.select}>Very Busy</DropdownItem>
            <DropdownItem onClick={this.select}>
              Lineup to Get In
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        </div>

        <div className="button2">
          <button onClick={(e) => this.onSubmit(e)}> Submit! </button>
        </div>
        <div className="helpingpic">
         <img id = "helping"
            alt=""
            src= {helping}
            width="1100px"
            height="500px"
          />
        </div>

        <div className = "footer">
            <div className = "bodyleft">
              <p className = "footertext1"> Created by Adam Lam, Matthew Jiao, Nicholas Tao</p>
            </div>

            <div className = "bodyright" >
              <p className = "footertext2"> &copy; Grocery Store Tracker 2020 </p>
            </div>
        </div>

      </div>
        
       /*} <div className = "footerbottom">
            <div className = "bodyleft">
              <p className = "footertext1"> Created by Adam Lam, Matthew Jiao, Nicholas Tao</p>
            </div>

            <div className = "bodyright" >
              <p className = "footertext2"> &copy; Grocery Store Tracker 2020 </p>
            </div>
    </div>*/
    );
  }
}
export default Submitpage;
