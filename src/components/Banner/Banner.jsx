import React from "react";
import classes from "./banner.module.scss";

import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerBox}>
        <div>
          <h1>Многопрофильная клиника для детей и взрослых</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <img src={banner} alt="@" />
      </div>
    </div>
  );
};

export default Banner;
