import React from "react";
import BaseButton from "../../ui/BaseButton/BaseButton";

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
        <form className={classes.form} method="POST">
          <div className={classes.inputBox}>
            <input type="text" placeholder="ФИО" name="fio" />
          </div>
          <div className={classes.inputBox}>
            <input type="tel" placeholder="Номер телефона" name="tel" />
          </div>
          <div className={classes.inputBox}>
            <input type="email" placeholder="Электронная почта" name="email" />
          </div>
          <BaseButton>Записаться</BaseButton>
        </form>

        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setActive(false)}
        >
          <path
            d="M1 1L21.0001 21.0001"
            stroke="#F8FBFA"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M1 21.0001L21.0001 0.999921"
            stroke="#F8FBFA"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Modal;
