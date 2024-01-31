import React from "react";

import classes from "./baseButton.module.css";

const BaseButton = ({ style, children, ...props }) => {
  return (
    <button
      className={style ? `${style} ${classes.baseButton}` : classes.baseButton}
    >
      {children}
    </button>
  );
};

export default BaseButton;
