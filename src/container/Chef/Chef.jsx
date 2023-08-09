import React, { useState } from "react";
import spinner from "../../assets/spinner.gif";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Crafting Culinary Delights: Where Passion and Flavors Unite.
          </p>
        </div>
        <p className="p__opensans">
          A chef's mastery in the world of gastronomy is a harmonious blend of
          innovation and tradition, where ingredients are transformed into
          exquisite culinary experiences. Through their creations, chefs not
          only satisfy appetites but also weave stories of culture, history, and
          creativity that linger long after the last bite.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
