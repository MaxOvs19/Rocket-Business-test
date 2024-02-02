import React from "react";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";

import classes from "./home.module.scss";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className={classes.home}>
      <Banner />
      <h2>Часто задаваемые вопросы</h2>
      <Faq />
      {/* <Slider /> */}
    </div>
  );
};

export default Home;
