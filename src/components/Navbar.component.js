import React, { useState } from "react";
import "./Components.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className = "nav" color="light" light expand="md" >
        <NavbarBrand href="/" id = "navbar-brand">Grocery Store Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/busyness">View Busyness</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/live">Submit Live Busyness</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/scheduler">Submit Scheduled Trip</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
