import React, { Fragment, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import ReactPlayer from 'react-player'
import Footer from '../layout/Footer';

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


      
<div className="row">


<div className="column1">
  

<br></br>
<br></br>
<br></br>
<div className="m-span-12 t-span-5  m-va-middle">
		<h3 class="small-heading">Front Row Virtual Reality</h3>
		<p>FOGLIO provides VR headsets to buyers within the retail network to allow them a front row seat at fashion shows and presentations globally from the comfort of their office when travel is not always possible.</p>
		<br></br>
    <h4 class="subheading">Immersive</h4>
		<p>Insights into the movement, drape, fit of a collection as well as the theatre of the live event</p>
		<br></br>
    <h4 class="subheading">Simple Fit</h4>
		<p>FOGLIO headsets are hand-held &amp; don't require complicated headbands or earphones</p>
		<br></br>
    <h4 class="subheading">Compatible</h4>
		<p>The FOGLIO VR experience is compatible with all modern smartphones</p>
	
	</div>

  </div>

  <div className="column2">
      <br></br>
      {/* <ReactPlayer url='https://s3-eu-west-1.amazonaws.com/ordre-asset-prod/homepage/VR/virtual_reality.mp4' playing />
      
       */}
      <video className='video' autoPlay loop muted>
    <source src='https://s3-eu-west-1.amazonaws.com/ordre-asset-prod/homepage/VR/virtual_reality.mp4'  type='video/mp4' size='50px'/>
</video>

</div>
</div>

      <br></br>
      <hr></hr>
      <br></br>
      <br></br>

      <div className ="fullspan">
      <h3 class="small-heading">360° Online Showroom</h3>
      <p>Foglio’s technology and digital assets are used in a designer’s physical showroom to create efficiencies in the traditional order taking process. Buyers who miss the fashion show can sit front row in the showroom</p>
      <br></br>

      <img src={require('../../img/360.png')} 
      alt="360tour"
      style={{width: 900}}
      />
      </div>
      <br></br>
 
      

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
