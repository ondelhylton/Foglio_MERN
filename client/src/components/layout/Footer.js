import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Fragment>
      div class="grid--wrapper footer-content-wrapper m-gutter-none">
    <div className="footer-div m-span-12 t-span-3">
        <ul>
            <li><a href="https://www.ordre.com/en/page/technology-360">Technology</a></li>
            <li><a href="https://www.ordre.com/en/page/network-395">ORDRE Network</a></li>
            <li><a href="https://www.ordre.com/en/news">ORDRE News</a></li>
            <li class="copyright">© Copyright ORDRE.COM</li>
        </ul>
    </div>
      
    </Fragment>
  );
};

export default Footer;



