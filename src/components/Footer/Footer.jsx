import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import googlePlay from '../../images/googleplay 1.png';
import apple from '../../images/Apple 1.png';
import facebook from '../../images/facebook.png';
import whatsapp4 from '../../images/whatsapp (4).png';
import youtube from '../../images/youtube (2).png';
import linkedin from '../../images/linkedin (2).png';

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>MrAds.lk</h1>
      <div className="footer-div">
        <div className="footer-content">
          <h3>About MrAds.lk</h3>
          <Link>Terms and Conditions</Link>
          <Link>Private Policy</Link>
          <Link>Sitemap</Link>
        </div>
        <div className="footer-content">
          <h3>Make money on MrAds.lk</h3>
          <Link to="/about-us">About Us</Link>
          <Link>Membership</Link>
          <Link>Ad Promotion</Link>
        </div>
        <div className="footer-content">
          <h3>Help and Support</h3>
          <Link to="/contact-us">Contact Us</Link>
          <Link>FAQ</Link>
          <Link>Anti Scam</Link>
        </div>
        <div className="footer-content">
          <h3>Blog and Social Media</h3>
          <p>
            Visit our <Link>Blog</Link> for learn more about{' '}
            <Link>MrAds.lk</Link>
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <img
              src={facebook}
              style={{ width: '30px', height: 'auto', cursor: 'pointer' }}
              alt="social"
            />{' '}
            <img
              src={youtube}
              style={{ width: '30px', height: 'auto', cursor: 'pointer' }}
              alt="social"
            />
            <img
              src={linkedin}
              style={{ width: '30px', height: 'auto', cursor: 'pointer' }}
              alt="social"
            />
            <img
              src={whatsapp4}
              style={{ width: '30px', height: 'auto', cursor: 'pointer' }}
              alt="social"
            />
          </div>
        </div>
      </div>
      <div className="download-app">
        <h2>Download MrAds.lk on</h2>
        <img src={googlePlay} alt="img" />
        <img src={apple} alt="img" />
      </div>

      <br />

      <hr />
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: '#ffffffec',
        }}
      >
        copyright 2024 RTP Lanka Solutions (Pvt) Ltd
      </p>
    </div>
  );
};

export default Footer;
