import React from "react";

import classes from "./baseButton.module.scss";

const BaseButton = ({ style, children, ...props }) => {
  return (
    <button
      className={style ? `${style} ${classes.baseButton}` : classes.baseButton}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
