import React from "react";
/*import "bootstrap/dist/css/bootstrap.min.css"; */
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import NavbarComp from "./components/NavbarComp.component";
import Homepage from "./components/Homepage.component";
import Viewpage from "./components/Viewpage.component";
import Submitpage from "./components/Submitpage.component";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavbarComp />
          <Route
            path={process.env.PUBLIC_URL}
            exact
            component={withRouter(Homepage)}
          />
          <Route path={"/busyness"} exact component={withRouter(Viewpage)} />
          <Route path={"/submit"} exact component={withRouter(Submitpage)} />
        </div>
      </Router>
    );
  }
}
