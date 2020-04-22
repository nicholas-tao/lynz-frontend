import React from "react";
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
//import Form from "./Form";
import "./Components.css"

class SubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);

    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeStore = this.onChangeStore.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      dropdownOpen: false,
      busyValue: "Select Busyness",
      address: "",
      storeAddress: "",
    };
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onChangeStore(e) {
    this.setState({
      storeAddress: e.target.value
    })
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
      busyValue: event.target.innerText
    });
  }

  onSubmit(e) {
  //  e.preventDefault();  idk what this does; maybe prevents empty fields from being sent
    console.log(this.state);
    console.log('hi');//doesnt output for some reason? look in console in inspect element

    const address = {
      address: this.state.address
    }
    const storeAddress = {
      storeAddress: this.state.storeAddress
    }
    const busyValue = {
      busyValue: this.state.busyValue
    }

    console.log(address);
    console.log(storeAddress);
    console.log(busyValue);



    // axios.post('http://localhost:5000/users/add', user)
    //   .then(res => console.log(res.data));

    // this.setState({
    //   username: ''
    // })
  }

  render() {
    return (
      
    <form onSubmit = {this.onSubmit} id = "form">
      <div className = "busyness">
        <div className = "enterAddress">
          <input 
            placeholder = "Enter your Address" 
            value={this.state.address}
            onChange = {this.onChangeAddress}
            />
        </div>
        <br></br>
        <div className = "enterStore">
          <input 
              placeholder = "Enter the store address" 
              value={this.state.storeAddress}
              onChange = {this.onChangeStore}
              />
        </div>
        <br></br>

        <div className = "submitToggle">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle>{this.state.busyValue}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.select}>Not Busy At All</DropdownItem>
              <DropdownItem onClick={this.select}>Normal</DropdownItem>
              <DropdownItem onClick={this.select}>Busy</DropdownItem>
              <DropdownItem onClick={this.select}>Very Busy</DropdownItem>
              <DropdownItem onClick={this.select}>Lineup to Get In</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
       </div>
       <br></br>

       <div className="form-group">
          <button onClick = {() => this.onSubmit()}> Submit! </button>
        </div>
      </div>
    </form>
    );
  }
}
export default SubmitPage;