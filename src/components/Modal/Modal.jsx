import React from "react";
import BaseButton from "../../ui/BaseButton/BaseButton";

import closeModal from "../../assets/closeModal.svg";

import classes from "./modal.module.scss";

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
        <div className={classes.text}>
          <h1>Запишитесь</h1>
          <h1>на приём онлайн</h1>
          <p>
            Администратор свяжется с вами через WhatsApp в течение дня и уточнит
            детали
          </p>
        </div>
        <form className={classes.form}>
          <div className={classes.inputBox}>
            <input type="text" placeholder="ФИО" />
          </div>
          <div className={classes.inputBox}>
            <input type="tel" placeholder="Номер телефона" />
          </div>
          <div className={classes.inputBox}>
            <input type="email" placeholder="Электронная почта" />
          </div>
          <BaseButton>Записаться</BaseButton>
        </form>

        <img src={closeModal} alt="@" onClick={() => setActive(false)} />
      </div>
    </div>
  );
};

export default Modal;
