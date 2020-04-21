import React, { Component } from "react";
import "./Components.css";
import store from "../images/store.jpg";
import busy from "../images/busy.jpg";

export default class Homepage extends Component {
  render() {
    return (
      <div id="all">
        <div className="first">
          <div className="titleinfo">
            <h1 className="text-left">
              {" "}
              Lineups suck. Know how busy supermarkets near you are with live
              help from other customers.{" "}
            </h1>
            <img src={store} className="pic-right" alt="store" />
          </div>
        </div>

        <div className="second">
          <div className="viewinfo">
            <img src={busy} className="pic-left" alt="busy" />
            <h1 className="text-right">
              {" "}
              Don't get caught in this! See <b> LIVE </b> updates from people
              just like you: customers.{" "}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
