import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Fragment>
      
    <div className="footer">
    <div className="footerDivs">

        <div className="footerContainers">
        <ul>
        <li>
            <Link to='/technology'>Foglio Technology</Link>
            </li>

            <li>
            <Link to='/profiles'>Foglio Network</Link>
            </li>
            <li>
            <Link to='/posts'>Foglio News</Link>
            </li>
            <li class="copyright">© Copyright Foglio.com Team</li>
            </ul>
        </div>


        <div className="footerContainers">
        <ul>
          
            <li>Ondel Hylton</li>
            <li>J. Lobos Vega</li>
            <li>Raquel</li>
            <li>Stella Kim</li>

            </ul>
        </div>

        <div className="footerContainers">
        <ul>
          
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS & CONDITIONS</li>

            </ul>
        </div>

        <div className="footerContainers">
        <h1>
        <Link to='/'>
        <img src={require('./foglio.png')} alt="fireSpot"/>
        </Link>
      </h1>
        </div>



        </div>
    </div>
      
    </Fragment>
  );
};

export default Footer;
