import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "./app.css";

// old way
// import "./styles.css";
// import NavBar from "./container/NavBar.jsx";
// import Button from "./compontes/Button";

export default function App() {
  return (
    <Router>
      <Fragment>
        {/* <NavBar /> */}
        <Navbar />
        <Route exact path="/landing" component={Landing} />
        {/* <Landing /> */}
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}
