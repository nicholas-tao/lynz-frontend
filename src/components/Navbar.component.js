import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Components.css";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Grocery Store Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/busyness" className="nav-link">View Busyness</Link>
          </li>
          <li className="navbar-item">
          <Link to="/live" className="nav-link">Submit Live Busyness</Link>
          </li>
          <li className="navbar-item">
          <Link to="/scheduler" className="nav-link">Submit Scheduled Trip</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
