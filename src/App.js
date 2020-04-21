import React from "react";
/*import "bootstrap/dist/css/bootstrap.min.css"; */
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar.component";
import Homepage from "./components/Homepage.component";
import Viewpage from "./components/Viewpage.component";
import Submitpage from "./components/Submitpage.component";
import Scheduler from "./components/Scheduler.component";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Homepage} />
        <Route path="/busyness" component={Viewpage} />
        <Route path="/live" component={Submitpage} />
        <Route path="/scheduler" component={Scheduler} />
      </div>
    </Router>
  );
}
/*hi*/
export default App;