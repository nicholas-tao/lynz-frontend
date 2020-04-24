import React from "react";
import axios from "axios";
import Script from 'react-load-script'

import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

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
      latitude:"",
      longitude:"",
      address:""
    };
  }
//autocomplete stuff
  handleChange = address => {
    this.setState({ address });
  };


//other stuff
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
      address: this.state.address,
      busyness: this.state.busyness,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    };

    console.log(this.state);
    /*  axios
      .post("http://localhost:5000/busyness/add", busyness)
      .then((res) => console.log(res.data));*/

    this.setState({
      busyness: "Select Busyness",
      address: "",
    });
  }
  

  render() {
    return (
      <div className = "allsubmit">
        <div className="busyness">
          <div className = "location">
            <PlacesAutocomplete 
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              debounce = {500}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className = "location4">
                <input className = "location5"
                  {...getInputProps({
                    placeholder: 'Enter City and Store',
                  })}
                />
                <div className="location2">
                  {loading && <div></div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'  
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#b8b2a3', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div className = "location3"
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{    suggestion.description    }</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            </PlacesAutocomplete>
          </div>

          <div className="submitToggle">
            <ButtonDropdown className = "submitter"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle>{this.state.busyness}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.select}>Not busy</DropdownItem>
                <DropdownItem onClick={this.select}>Somewhat busy</DropdownItem>
                <DropdownItem onClick={this.select}>Moderately busy</DropdownItem>
                <DropdownItem onClick={this.select}>Busy</DropdownItem>
                <DropdownItem onClick={this.select}>Very busy</DropdownItem>
                <DropdownItem onClick={this.select}>Extremely busy</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
 
        
          <div className="button2">
            <button className = "actualButton" onClick={(e) => this.onSubmit(e)}> Submit! </button>
          </div>
        

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
    );
  }
}
export default Submitpage;
