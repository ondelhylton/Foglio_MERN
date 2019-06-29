import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default Footer;


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/technology'>Foglio Technology</Link>
      </li>

      <li>
        <Link to='/profiles'>Designers</Link>
      </li>
      <li>
        <Link to='/posts'>News</Link>
      </li>
      <li>
        <Link to='/dashboard'>
        <i class="fas fa-shopping-bag"></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
         {' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/technology'>Foglio Technology</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );


  
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
        <img src={require('./foglio.png')} alt="fireSpot"/>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);









<footer>
<div class="grid--wrapper footer-content-wrapper m-gutter-none">
    <div className="footer-div m-span-12 t-span-3">
        <ul>
            <li><a href="https://www.ordre.com/en/page/technology-360">Technology</a></li>
            <li><a href="https://www.ordre.com/en/page/network-395">ORDRE Network</a></li>
            <li><a href="https://www.ordre.com/en/news">ORDRE News</a></li>
            <li class="copyright">© Copyright ORDRE.COM</li>
        </ul>
    </div>
    <div className="footer-div m-span-12 t-span-3">
        <ul>
            <li><a href="https://www.ordre.com/en/page/about-us-204">About</a></li>
            <li><a href="https://www.ordre.com/en/page/contact-us-205">Contact Us</a></li>
            <li><a href="https://www.ordre.com/en/page/privacy-policy-202">Privacy Policy</a></li>
            <li><a href="https://www.ordre.com/en/page/terms-and-conditions-203">Terms &amp; Conditions</a></li>
        </ul>
    </div>
    <div className="footer-div m-span-12 t-span-3">
        <ul>
            <li>Connect with ORDRE</li>
            <li class="social-footer"><a target="_blank" rel="noopener" href="https://www.facebook.com/pg/ORDREofficial/"><i class="social-icon icon-xsmall facebook"></i></a>
            </li><li class="social-footer"><a target="_blank" rel="noopener" href="https://www.linkedin.com/company/ordre/"><i class="social-icon icon-xsmall linkedin"></i></a></li>
            <li class="social-footer"><a target="_blank" rel="noopener" href="https://www.instagram.com/ordreofficial/"><i class="social-icon icon-xsmall instagram"></i></a></li>
        </ul>
    </div>
    <div className="footer-div m-span-12 t-span-3">
        <ul>
            <li>OUR APPS</li>
            <li><a target="_blank" rel="noopener" href="https://itunes.apple.com/us/app/ordre/id1266311981">GET ORDRE on the App Store</a></li>
            <li><a target="_blank" rel="noopener" href="https://itunes.apple.com/us/app/ordre-vr/id1277061073">GET ORDRE VR on the App Store</a></li>
            <li><a target="_blank" rel="noopener" href="https://play.google.com/store/apps/details?id=com.ordre.pug">GET ORDRE VR on Google Play</a></li>
        </ul>
    </div>
</div>
</footer>