import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/container/NavBar';
import Home from './components/container/Home';
import Login from './components/container/LogIn';
import Register from './components/container/Register';
import './app.css';
import axios from 'axios';
// old way
// import "./styles.css";
// import NavBar from "./container/NavBar.jsx";
// import Button from "./compontes/Button";

export default function App() {
  const [user, setUser] = useState({
    token: null,
    user: null,
  });
  const checkLogin = async () => {
    let token = localStorage.getItem('authToken');
    const tokenRes = await axios.post('/api/users/tokenIsValid', null, {
      headers: { 'x-auth-token': token },
    });
    if (tokenRes.data) {
      setUser({
        token: tokenRes.data.token,
        user: tokenRes.data.user,
      });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/home' component={Home} />
        {/* <Home /> */}
        <section className='container'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}
