import React, { useState } from "react";
import BaseButton from "../../ui/BaseButton/BaseButton";

import logo from "../../assets/logoHeader.png";
import point from "../../assets/point.svg";
import wats from "../../assets/whatsappHeader.png";

import classes from "./header.module.scss";
import Modal from "../Modal/Modal";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);

  function toggle() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  return (
    <header className={classes.header}>
      <div className={`${classes.boxTop} ${classes.box}`}>
        <div className={classes.logo}>
          <button
            className={
              menu ? classes.burger + " " + classes.burgerOpen : classes.burger
            }
            onClick={toggle}
          ></button>
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
            <div>
              <img src={wats} alt="@" />
              <p>+7(863) 000 00 00</p>
            </div>
            <span>Ростов-на-Дону</span>
          </div>
          <BaseButton onClick={() => setActive(true)}>
            Записаться на прием
          </BaseButton>
        </div>
      </div>
      <div
        className={
          menu
            ? classes.boxBottom + " " + classes.box + " " + classes.openMenu
            : classes.boxBottom + " " + classes.box
        }
      >
        <nav>
          <p>О клинике</p>
          <p>Услуги</p>
          <p>Специалисты</p>
          <p>Цены</p>
          <p>Контакты</p>
        </nav>

        <BaseButton onClick={() => setActive(true)}>
          Записаться на прием
        </BaseButton>
      </div>

      <Modal active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
