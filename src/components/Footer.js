import React from "react";
import FooterImage from '../assets/FooterImage.png'

const Footer = () => {
    return (
      <footer>
        <img src={FooterImage} alt="Footer"
        className="logo" />
      </footer>
    );
  }
export default Footer;