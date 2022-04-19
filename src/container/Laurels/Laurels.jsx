import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="More Menu" />
      <h1 className="headtext__cormorant">EverFresh Pre-Cut Veggies</h1>
      <p className="p__opensans">
        {" "}
        More list of veggies we sell (Please note that Because veggies are
        seasonal therefore prices change from time to time please contact us to receive the updated PRICELIST
        <br />
        •Pumpkin •Butternut •Baby Potatoes with parsley •Broccoli •Baby Marrow
        •Cabbage •Coleslaw Mix (cabbage and grated carrots ) •Ruby Coleslaw (Red
        cabbage, White cabbage and grated carrots) •Carrots •Cauliflower
        •Country Fresh Mix (Broccoli, Cauliflower, carrots and Green beans)
        •Chakalaka Mix (Bell peppers, Onions and Grated Carrots) •Green Beans
        •Green beans and Carrot Mix •Sweet potatoes •Potatoes •Mixed Peppers
        •Stirfry (Cabbage, Bell peppers, onion, carrot and baby marrow) •White
        Onion •Red Onion
      </p>
      {/*  <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
