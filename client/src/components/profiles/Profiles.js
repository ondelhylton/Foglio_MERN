import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
        <div className ="fullspan">
        
          <h1 className='large text-primary'>Designers</h1>
          <h3 className='headingtext'>
             Browse and Connect with Designers and Stylists
          </h3>
          <p></p>
          <p>Online showrooms recently featured on Foglio</p>
          <br></br>
          <hr></hr>
          

          <img src={require('../../img/Showroom_clients.png')} 
      alt="clothes"
      style={{width: 1000}}
      />
      
      </div>


          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
