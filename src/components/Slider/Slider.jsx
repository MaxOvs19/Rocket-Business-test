import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import BaseButton from "../../ui/BaseButton/BaseButton";
import SliderBtn from "./SliderBtn/SliderBtn";
import Modal from "../Modal/Modal";
import slider from "../api/slider.json";

import image from "../../assets/doctor-working.png";

import classes from "./slider.module.scss";
import "swiper/css";

const Slider = () => {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(false);

  return (
    <div className={classes.slider}>
      <Swiper allowTouchMove={false}>
        {slider.map((item) => {
          return (
            <SwiperSlide>
              <div className={classes.slide}>
                <div className={classes.textBox}>
                  <h1>{item.title}</h1>
                  <h3>{item.subTitle}</h3>
                  <ul>
                    {item.list.map((li) => {
                      return (
                        <li>
                          <p>{li}</p>
                        </li>
                      );
                    })}
                  </ul>

                  <div className={classes.cost}>
                    <p>Всего {item.price}₽</p>
                    <span>{item.oldPrice}₽</span>
                  </div>
                  <div className={classes.buttons}>
                    <BaseButton onClick={() => setActive(true)}>
                      Записаться
                    </BaseButton>
                    <BaseButton>Подробнее</BaseButton>
                  </div>
                </div>

                <img src={image} alt="@" />
              </div>
            </SwiperSlide>
          );
        })}
        <div className={classes.sliderBtn}>
          <SliderBtn type={1} page={page} setPage={setPage} />
          <p>
            <span>{page}</span>
            /4
          </p>
          <SliderBtn type={0} page={page} setPage={setPage} />
        </div>
      </Swiper>

      <Modal active={active} setActive={setActive} />
    </div>
  );
};

export default Slider;
