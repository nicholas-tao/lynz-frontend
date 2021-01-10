import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import NavbarComp from "./components/NavbarComp.component";
import Homepage from "./components/Homepage.component";
import Viewpage from "./components/Viewpage.component";
import Submitpage from "./components/Submitpage.component";
import "./App.css";
import { Container } from "reactstrap";

export default class App extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <BrowserRouter>
          <div>
            <NavbarComp />
            <Switch>
              <Route exactly component={Homepage} pattern="/" />
              <Route exactly component={Viewpage} pattern="/busyness" />
              <Route exactly component={Submitpage} pattern="/submit" />
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}
