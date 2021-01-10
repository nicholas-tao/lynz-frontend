import React, { Component } from "react";
import "./Components.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import logo from "../images/shopping-cart.png";
import { Link } from "react-router-dom";

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar className="nav" bg="primary" expand="lg">
          <NavbarBrand href="/" id="navbar-brand">
            <img
              id="logo"
              alt=""
              src={logo}
              width="39px"
              height="39px"
              className="d-inline-block align-top"
            />{" "}
            Lynz &nbsp;
          </NavbarBrand>
          <Nav className="mr-auto">
            <NavItem>
              <Link className="navbartext" to="/busyness">
                View Busyness &nbsp;
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navbartext" to="/submit">
                Submit Live Busyness
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavbarComp;
