import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import BaseButton from "../../ui/BaseButton/BaseButton";

import image from "../../assets/doctor-working.png";

import "swiper/css";
import classes from "./slider.module.scss";
import SliderBtn from "./SliderBtn/SliderBtn";

const Slider = () => {
  const [page, setPage] = useState(1);
  return (
    <div className={classes.slider}>
      <Swiper>
        <SwiperSlide>
          <div className={classes.slide}>
            <div className={classes.textBox}>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>
                  <p>Гормональный скрининг</p>
                </li>
                <li>
                  <p>Тестостерон</p>
                </li>
                <li>
                  <p>Свободный тестостерон</p>
                </li>
                <li>
                  <p>Глобулин, связывающий половые гормоны</p>
                </li>
              </ul>
              <div className={classes.cost}>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div className={classes.buttons}>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.slide}>
            <div className={classes.textBox}>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>
                  <p>Гормональный скрининг</p>
                </li>
                <li>
                  <p>Тестостерон</p>
                </li>
                <li>
                  <p>Свободный тестостерон</p>
                </li>
                <li>
                  <p>Глобулин, связывающий половые гормоны</p>
                </li>
              </ul>
              <div className={classes.cost}>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div className={classes.buttons}>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.slide}>
            <div className={classes.textBox}>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>
                  <p>Гормональный скрининг</p>
                </li>
                <li>
                  <p>Тестостерон</p>
                </li>
                <li>
                  <p>Свободный тестостерон</p>
                </li>
                <li>
                  <p>Глобулин, связывающий половые гормоны</p>
                </li>
              </ul>
              <div className={classes.cost}>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div className={classes.buttons}>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.slide}>
            <div className={classes.textBox}>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>
                  <p>Гормональный скрининг</p>
                </li>
                <li>
                  <p>Тестостерон</p>
                </li>
                <li>
                  <p>Свободный тестостерон</p>
                </li>
                <li>
                  <p>Глобулин, связывающий половые гормоны</p>
                </li>
              </ul>
              <div className={classes.cost}>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div className={classes.buttons}>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>

        <div className={classes.sliderBtn}>
          <SliderBtn type={1} page={page} setPage={setPage} />
          <p>
            <span>{page}</span>
            /4
          </p>
          <SliderBtn type={0} page={page} setPage={setPage} />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
