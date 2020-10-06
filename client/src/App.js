import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./compontes/container/NavBar";
import Home from "./compontes/container/Home";
import Login from "./compontes/container/LogIn";
import Register from "./compontes/container/Register";
import "./app.css";

// old way
// import "./styles.css";
// import NavBar from "./container/NavBar.jsx";
// import Button from "./compontes/Button";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/home" component={Home} />
        {/* <Home /> */}
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
