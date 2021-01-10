import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavbarComp from "./components/NavbarComp.component";
import Homepage from "./components/Homepage.component";
import Viewpage from "./components/Viewpage.component";
import Submitpage from "./components/Submitpage.component";
import "./App.css";
import { Container } from "reactstrap";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <div>
            <NavbarComp />
            <Switch>
              <Route exact component={Homepage} path="/" />
              <Route exact component={Viewpage} path="/busyness" />
              <Route exact component={Submitpage} path="/submit" />
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}
