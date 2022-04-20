import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="EverFresh" />
      <h1 className="headtext__cormorant"> Why choose us? </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
         {/*  <img src={images.quote} alt="quote_image" /> */}
          <p className="p__opensans">
            We pride ourselves in giving our customers the best quality products
            and most affordable pricing with super fast and friendly service.
          </p>
        </div>
        {/* <p className="p__opensans">
          {" "}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </p> */}
      </div>

 {/*      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div> */}
    </div>
  </div>
);

export default Chef;
