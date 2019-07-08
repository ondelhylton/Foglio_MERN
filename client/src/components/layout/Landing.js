import React, { Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LightboxPage from '../profiles/Lightbox';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <h1 className='lead3'>
          New York City Viewfinder 
          </h1>
          <h3>Find NYC's Most <span class="name">Scenic Locations</span> + Visualize the Affects of <span class="name">Sea Level Rise</span></h3>
          
          <div className='buttons'>
            <Link to='/register' className='btn btn-home'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-home'>
              Login
            </Link>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </section>
    <LightboxPage></LightboxPage>



</Fragment>

    
  );

  
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
