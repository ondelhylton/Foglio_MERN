import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Technology = ({ getProfiles, profile: { profiles, loading } }) => {
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
        <br></br>
        
          <h1 className='large text-primary'>Technology</h1>
          
          <h3 className='headingtext'>
          POWERING THE BUSINESS OF FASHION
          </h3>
          <br></br>
          <p>Foglio is a luxury wholesale ecosystem that offers tools to innovate both the online and physical showroom. Using 360° technology in a variety of mediums, ORDRE captures the collections of the best designers in the industry and showcases them to the globe's most respected retailer network.</p>
          
        <br></br>
          <img src={require('../../img/showroom4.jpg')} 
      alt="clothes"
      style={{width: 900}}
      />
      </div>


      <br></br>
      <br></br>
      <hr></hr>
      


<div className="row">
<div className="column">
      <br></br>
      <img src={require('../../img/img06.jpg')} 
      alt="clothes"
      style={{width: 380}}
      />
</div>

<div className="column2">
  

<br></br>
<br></br>
<br></br>
  <div className="m-span-12 t-span-6  m-va-middle">
		<h3 class="small-heading">360° Online Showroom</h3>
		<p>Buyers can immerse themselves in 360° images of designer collections understanding fabrications, intricate details and silhouettes.</p>
		<p>Using the ORB, ORDRE’s patented image-capturing mobile technology, a designer’s runway and commercial collections can be digitised in a matter of hours.</p>
		<br></br>
    <h4 class="subheading">Interactive</h4>
		<p>Drag to spin &amp; review every aspect of a product</p>
    <br></br>
		<h4 class="subheading">Super Zoom</h4>
		<p>Overcome the need to touch &amp; feel; texture &amp; embellishment perfectly captured</p>
		<br></br>
    <h4 class="subheading">Multi-Angle</h4>
		<p>Front, back, side so every detail is visible</p>
    <br></br>
		<h4 class="subheading">Superior Product Details</h4>
		<p>Style details, descriptions, fabrications, sizing &amp; pricing in one consolidated place</p>
	</div>

  </div>

      </div>

      <br></br>
      <hr></hr>
    </Fragment>








      )}
    </Fragment>
  );
};

Technology.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Technology);
