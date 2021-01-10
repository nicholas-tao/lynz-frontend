import React from "react";
import { HashRouter, Route } from "react-router-dom";
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
        <HashRouter>
          <NavbarComp />
          <Route path={process.env.PUBLIC_URL} component={Homepage} />
          <Route path={"/busyness"} component={Viewpage} />
          <Route path={"/submit"} component={Submitpage} />
        </HashRouter>
      </Container>
    );
  }
}
