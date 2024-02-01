import React from "react";
import { useState } from "react";

import open from "../../assets/open.svg";
import close from "../../assets/close.svg";

import classes from "./faqItem.module.scss";

const FaqItem = ({ item }) => {
  const [active, setActive] = useState(false);

  function toggle() {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  return (
    <div className={classes.faqItem} onClick={() => toggle()}>
      <h3>{item.title}</h3>
      <div
        className={
          active ? `${classes.content} ${classes.active}` : classes.content
        }
      >
        <p>{item.text}</p>
        {item.dopText && <p>{item.dopText}</p>}
      </div>
      {active ? <img src={close} alt="-" /> : <img src={open} alt="+" />}
    </div>
  );
};

export default FaqItem;
