import React, { useState } from "react";
import "./Components.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Submitpage = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Select Busyness</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Not Busy</DropdownItem>
        <DropdownItem>A Little Busy</DropdownItem>
        <DropdownItem>Busy</DropdownItem>
        <DropdownItem>Very Busy</DropdownItem>
        <DropdownItem>Short Lineup to Get In</DropdownItem>
        <DropdownItem>Long Lineup to Get In</DropdownItem>
        <DropdownItem>Crazy (Do not come)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Submitpage;
