import React from "react";

import classes from "./modal.module.scss";
import BaseButton from "../../ui/BaseButton/BaseButton";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? classes.modal + " " + classes.active : classes.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h1>Запишитесь на приём онлайн</h1>
          <p>
            Администратор свяжется с вами через WhatsApp в течение дня и уточнит
            детали
          </p>
        </div>
        <div>
          <div>
            <input type="text" placeholder="ФИО" />
            <input type="tel" placeholder="Номер телефона" />
            <input type="email" placeholder="Электронная почта" />
          </div>
          <BaseButton>Записаться</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
