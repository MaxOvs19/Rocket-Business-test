import React from "react";
import FaqItem from "../FaqItem/FaqItem";

import classes from "./faq.module.scss";

import arr from "../api/faqArr.json";

const Faq = () => {
  return (
    <div className={classes.faq}>
      {arr.map((item) => {
        return <FaqItem item={item} />;
      })}
    </div>
  );
};

export default Faq;
