import React from "react";
import BaseButton from "../../ui/BaseButton/BaseButton";

import logo from "../../assets/logoHeader.png";
import point from "../../assets/point.svg";
import wats from "../../assets/whatsappHeader.png";

import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes.boxTop} ${classes.box}`}>
        <div className={classes.logo}>
          <img src={logo} alt="@" />
          <div className={classes.address}>
            <img src={point} alt="@" />
            <p>
              Ростов-на-Дону <span>ул. Ленина, 2Б</span>
            </p>
          </div>
        </div>

        <div className={classes.contacts}>
          <div>
            <img src={wats} alt="@" />
            <p>+7(863) 000 00 00</p>
          </div>
          <BaseButton>Записаться на прием</BaseButton>
        </div>
      </div>
      <div className={`${classes.boxBottom} ${classes.box}`}>
        <nav>
          <p>О клинике</p>
          <p>Услуги</p>
          <p>Специалисты</p>
          <p>Цены</p>
          <p>Контакты</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
