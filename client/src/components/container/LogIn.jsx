import React, { useState } from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';
//import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // if(email and password in DB) then do row 21
    //else - something else
    console.log(email, password);
    const res = await axios.post('/api/users/login', { email, password });
    localStorage.setItem('authToken',res.data.token)
    setRedirect(true);
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='email' bsSize='large'>
          <div>Email</div>
          <FormControl
            autoFocus
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <div>Password</div>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </FormGroup>
        <Button block bsSize='large' disabled={!validateForm()} type='submit'>
          Login
        </Button>
        {redirect ? <Redirect to='/landing' /> : <div>bad</div>}
      </form>
    </div>
  );
}
