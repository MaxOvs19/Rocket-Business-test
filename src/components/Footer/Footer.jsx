import React from "react";

import logo from "../../assets/logoFooter.png";
import inst from "../../assets/instagram.png";
import telega from "../../assets/telegram.png";
import wats from "../../assets/whatsappFooter.png";

import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={classes.box}>
        <div className={classes.nav}>
          <img src={logo} alt="@" />
          <nav>
            <a href="#">О клинике</a>
            <a href="#">Услуги</a>
            <a href="#">Специалисты</a>
            <a href="#">Цены</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
        <div className={classes.contacts}>
          <img src={inst} alt="@" />
          <img src={wats} alt="@" />
          <img src={telega} alt="@" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
