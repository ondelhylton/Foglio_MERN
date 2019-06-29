import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      

      <div className="row">
      <div class="column">
      <br></br>
      <img src={require('../../img/sign_in.jpg')} 
      alt="clothes"
      style={{width: 500}}
      />
        </div>
      <div class="column2">
      <br></br>
      <h1 className='large text-primary'> Sign In </h1>
      <p className='lead'>
      <i className='fas fa-user' /> Sign Into Your Account  
      </p>


    <div className="row2">
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
      <div className = 'signin'>
        <input type='submit' className='btn btn-primary' value='  Login  ' />
       
      
      <p className='my-1'>
        <Link to='/register'>Don't have an account? - Sign Up</Link>
        
      </p>
      </div>
      </form>
      </div>
      </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
