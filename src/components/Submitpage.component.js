import React from "react";
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

class SubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value: "Select Busyness",
    };
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
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>{this.state.value}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.select}>Not Busy</DropdownItem>
          <DropdownItem onClick={this.select}>Busy</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default SubmitPage;
