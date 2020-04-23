import React, { Component } from "react";
import "./Components.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../images/shopping-cart.png";



class NavbarComp extends Component{
  render(){
   return (
      <div>
        <Navbar className = "nav" bg = "primary" expand = "lg"   >
          <NavbarBrand href="/" id = "navbar-brand">
          <img id = "logo"
            alt=""
            src= {logo}
            width="39px"
            height="39px"
            className="d-inline-block align-top"
           />{' '}
           Grocery Store Tracker
      </NavbarBrand>
            <Nav className="mr-auto">
              <NavItem>
                <NavLink href="/busyness">View Busyness</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/live">Submit Live Busyness</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/scheduler">Submit Scheduled Trip</NavLink>
              </NavItem> */}
            </Nav>
        </Navbar>
      </div>
    );
  };
}
export default NavbarComp;
