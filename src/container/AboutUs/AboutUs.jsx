import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Everfresh is a fast-paced, high-energy, and fun-filled ready chopped
          veggies based in Mt Fletcher But We Service Matatiele & Maclear Too.
          With our products, there’s NO EXCUSE anymore why you shouldn’t be
          eating balanced meals.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our business is aimed at those people that like their veggies but are
          lazy or too tired to chop when they get home. Or the elderly that stay
          alone on with kids who can't do the chopping for them. It's for
          everyone who wants to make things easy for themselves.
        </p>
        <button type="button" className="custom__button"  href="#contact">
        
          
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
