import React from "react";
import axios from "axios";

import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import "./Components.css";

class SubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);

    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeStoreAddress = this.onChangeStoreAddress.bind(this);
    this.onChangeStoreName = this.onChangeStoreName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      dropdownOpen: false,
      busyness: "Select Busyness",
      address: "",
      storeAddress: "",
      storeName: "",
    };
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
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
      //address: this.state.address,
      storeAddress: this.state.storeAddress,
      storeName: this.state.storeName,
      busyness: this.state.busyness,
    };

    /*
    console.log(address);
    console.log(storeAddress);
    console.log(busyness);
    console.log(storeName);
    */

    axios
      .post("http://localhost:5000/busyness/add", busyness)
      .then((res) => console.log(res.data));

    this.setState({
      busyness: "Select Busyness",
      address: "",
      storeAddress: "",
      storeName: "",
      time: "",
    });
  }

  render() {
    return (
      <div className="all">
        <div className="pic">
          <p>picture here and some text maybe LOL</p>
        </div>

        <form onSubmit={this.onSubmit} className="form">
          <div className="busyness">
            <div className="enterAddress">
              <input
                placeholder="Enter your Address"
                value={this.state.address}
                onChange={this.onChangeAddress}
              />
            </div>
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
            <br></br>

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
            <br></br>

            <div className="form-group">
              <button onClick={(e) => this.onSubmit(e)}> Submit! </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SubmitPage;
