import React from "react";
import axios from "axios";

import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import "./Components.css";

class Viewpage extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeRadius = this.onChangeRadius.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      address: "",
      radius: ""
    };
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeRadius(e) {
    this.setState({
      radius: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault(); //idk what this does; maybe prevents empty fields from being sent

    const busyness = {
      address: this.state.address,
      radius: this.state.radius
    };

    /*
    console.log(address);
    console.log(storeAddress);
    console.log(busyness);
    console.log(storeName);
    */

  /*  axios
      .post("http://localhost:5000/busyness/add", busyness)
      .then((res) => console.log(res.data));*/

    this.setState({
      address: "",
      radius: ""
    });
  }

  render() {
    return (
      <div className="all">
        

        <form onSubmit={this.onSubmit} className="form">
          <div className="busyness">
            <div className="enterAddressView">
              <input
                placeholder="Enter your Address"
                value={this.state.address}
                onChange={this.onChangeAddress}
              />
            </div>
            <div className="Input Radius">
              <input
                placeholder="Enter the Radius"
                value={this.state.radius}
                onChange={this.onChangeRadius}
              />
            </div>

            <div className="form-group">
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
