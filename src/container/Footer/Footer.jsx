import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Nkululekweni location</p>
        <p className="p__opensans">+27 67 700 7617</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.everfresh} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        <div className="app__footer-links_icons">
          <FiFacebook href="https://www.facebook.com/EverFreshveggies/" />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Saturday:</p>
        <p className="p__opensans">06:00 am - 5:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 EverFresh. All Rights reserved.</p>
      <br />

      <p className="p__opensans">
        Developed by
        <a
          href="https://www.creativelizard.co.za/"
          target="_blank"
          rel="noreferrer"
        >
          <h1>CreativeLizard </h1>
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
