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
        <img src={logo} alt="@" />
        <div className={classes.nav}>
          <nav>
            <p>О клинике</p>
            <p>Услуги</p>
            <p>Специалисты</p>
            <p>Цены</p>
            <p>Контакты</p>
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
