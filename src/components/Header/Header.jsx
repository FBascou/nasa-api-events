import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Table of Cosmic Events</h1>
      <div className="desc-wrapper">
        <p>
          This table shows current and future events that will happen in the Solar System. The data
          is obtained from different NASA APIs: DONKI and SSD/CNEOS. The Eclipses' data was
          collected by using information from the NASA Eclipse Website.
        </p>
        <a href="https://api.nasa.gov/" target="_blank">
          NASA APIs
        </a>
        <br />
        <a href="https://eclipse.gsfc.nasa.gov/" target="_blank">
          NASA ECLIPSE Website
        </a>
      </div>
    </header>
  );
};

export default Header;
