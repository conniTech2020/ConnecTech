import React, { Fragment, useState } from 'react';
import { Link /* Redirect*/ } from 'react-router-dom';
import { registerUser } from '../../api/index';

const Register = () => {
  const [error, seterror] = useState('');
  const [succeed, setsucceed] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
    // status: "", // check box
    // skills: "", // string Array
  });

  const { fullName, email, password, password2 } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // prevent refresh/reload page

    if (password !== password2) {
      seterror('password are not match!'); //  setError
      // setAlert("Passwords do not match", "danger");
    } else {
      // register({ name, email, password });
      makenewuser();
    }
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  const makenewuser = async () => {
    try {
      const response = await registerUser(formData);
      setsucceed('new user created!');
      seterror('');
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      seterror(err.response.data.errors[0].msg);
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
            placeholder='full name'
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
        {/* <div className="form-group">
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div> */}
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p style={{ color: 'red' }}>{error}</p>
      <p style={{ color: 'green' }}>{succeed}</p>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

// Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { setAlert, register })(Register);
export default Register;
