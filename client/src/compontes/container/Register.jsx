import React, { Fragment, useState } from 'react';
import { Link, } from 'react-router-dom';
import { registerUser } from '../api/index';
// import { connect } from 'react-redux';
// import { setAlert } from '../../actions/alert';
// import { register } from '../../actions/auth';
// import PropTypes from 'prop-types';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
    status: true,
    skills: '',
  });
  const { fullName, email, password, password2, skills } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const makenewuser = async () => {
    try {
      const response = await registerUser(formData);
      console.log('new user created!: ', response);
      debugger;
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // prevent page reload/refresh

    if (password !== password2) {
      setError("password are not match!"); //  setError
      // setAlert('Passwords do not match', 'danger');
      alert('password not matching');
    } else {
      makenewuser();
      // register({ name, email, password });
    }
  };

  // if (isAuthenticated) {
  // return <Redirect to="/dashboard" />;
  // }

  const makenewuser = async () => {
    try {
      const response = await insertStudent(formData);
      setsucceed("new user created!");
      setError("");
    } catch (err) {
      setError(err.response.data.errors[0].msg);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='fullName'
            name='fullName'
            value={fullName}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='skills'
            name='skills'
            value={skills}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
