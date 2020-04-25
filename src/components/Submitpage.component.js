import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';
import PlacesAutocomplete from 'react-places-autocomplete';
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


    this.handleMouseHover1 = this.handleMouseHover1.bind(this);
    this.handleMouseHover2 = this.handleMouseHover2.bind(this);
    this.handleMouseHover3 = this.handleMouseHover3.bind(this);
    this.handleMouseHover4 = this.handleMouseHover4.bind(this);   //LOLLL
    this.handleMouseHover5 = this.handleMouseHover5.bind(this);
    this.handleMouseHover6 = this.handleMouseHover6.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      dropdownOpen: false,
      busyness: "Select Busyness",
      latitude:"",
      longitude:"",
      address:"",
      isHovering1:false,
      isHovering2:false,
      isHovering3:false,    //for each of the buttons LOL
      isHovering4:false,
      isHovering5:false,
      isHovering6:false
    };
  }
//autocomplete stuff
  handleChange = address => {
    this.setState({ address });
  };

//hovering for each div
handleMouseHover1() {
  this.setState(this.toggleHoverState1);
}

handleMouseHover2() {
  this.setState(this.toggleHoverState2);
}

handleMouseHover3() {
  this.setState(this.toggleHoverState3);
}

handleMouseHover4() {
  this.setState(this.toggleHoverState4);
}

handleMouseHover5() {
  this.setState(this.toggleHoverState5);
}

handleMouseHover6() {
  this.setState(this.toggleHoverState6);
}



toggleHoverState1(state) {
  return {
    isHovering1: !state.isHovering1,
  };
}

toggleHoverState2(state) {
  return {
    isHovering2: !state.isHovering2,
  };
}

toggleHoverState3(state) {
  return {
    isHovering3: !state.isHovering3,
  };
}

toggleHoverState4(state) {
  return {
    isHovering4: !state.isHovering4,
  };
}
toggleHoverState5(state) {
  return {
    isHovering5: !state.isHovering5,
  };
}

toggleHoverState6(state) {
  return {
    isHovering6: !state.isHovering6,
  };
}

//get location
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       // console.log("Latitude is :", position.coords.latitude);
  //       // console.log("Longitude is :", position.coords.longitude);
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       });
  //     }.bind(this)
  //   );
  // }

 
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
     // latitude: this.state.latitude,
    //  longitude: this.state.longitude
    };

    console.log(busyness)
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
                
                <DropdownItem >
                  <div
                  onClick={(e) => { this.select(e); this.handleMouseHover1();}}
                  onMouseEnter={this.handleMouseHover1}
                  onMouseLeave={this.handleMouseHover1}
                  > Not busy </div>
                </DropdownItem>  {this.state.isHovering1 &&
                      <div className = "hover1">
                        <u><i>(No lineup to get in, short checkout lines)</i></u>     
                      </div>}
                  
                <DropdownItem>
                  <div
                  onClick={(e) => { this.select(e); this.handleMouseHover2();}}
                  onMouseEnter={this.handleMouseHover2}
                  onMouseLeave={this.handleMouseHover2}
                  > Somewhat busy </div>
                </DropdownItem>  {this.state.isHovering2 &&
                      <div className = "hover1">
                        <u><i>(No lineup to get in, moderate checkout lines)</i></u>     
                      </div>}

                <DropdownItem>
                  <div
                  onClick={(e) => { this.select(e); this.handleMouseHover3();}}
                  onMouseEnter={this.handleMouseHover3}
                  onMouseLeave={this.handleMouseHover3}
                  > Moderately busy </div>
                </DropdownItem>  {this.state.isHovering3 &&
                      <div className = "hover1">
                        <u><i>(No lineup to get in, long checkout lines)</i></u>     
                      </div>}
                
                <DropdownItem>
                  <div
                  onClick={(e) => { this.select(e); this.handleMouseHover4();}}
                  onMouseEnter={this.handleMouseHover4}
                  onMouseLeave={this.handleMouseHover4}
                  > Busy </div>
                </DropdownItem>  {this.state.isHovering4 &&
                      <div className = "hover1">
                        <u><i>(Short lineup to get in, less than 10 min)</i></u>     
                      </div>}
                
                <DropdownItem>
                  <div
                  onClick={(e) => { this.select(e); this.handleMouseHover5();}}
                  onMouseEnter={this.handleMouseHover5}
                  onMouseLeave={this.handleMouseHover5}
                  > Very busy </div>
                </DropdownItem>  {this.state.isHovering5 &&
                      <div className = "hover1">
                        <u><i>(Long lineup to get in, less than 30 min)</i></u>     
                      </div>}

                <DropdownItem>
                  <div
                  onClick={(e) => { this.select(e); this.handleMouseHover6();}}
                  onMouseEnter={this.handleMouseHover6}
                  onMouseLeave={this.handleMouseHover6}
                  > Extremely busy </div>
                </DropdownItem>  {this.state.isHovering6 &&
                      <div className = "hover1">
                        <u><i>(Very long lineup to get in, more than 30 min)</i></u>     
                      </div>}

              </DropdownMenu>
            </ButtonDropdown>
          </div>
 
        
          <div className="button2">
            <button className = "actualButton2" onClick={(e) => this.onSubmit(e)}> Submit! </button>
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
