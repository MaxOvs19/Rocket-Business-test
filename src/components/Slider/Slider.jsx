import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BaseButton from "../../ui/BaseButton/BaseButton";

import image from "../../assets/doctor-working.png";

import "swiper/css";
import classes from "./slider.module.scss";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <Swiper>
        <SwiperSlide>
          <div>
            <div>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>Гормональный скрининг</li>
                <li>Тестостерон</li>
                <li>Свободный тестостерон</li>
                <li>Глобулин, связывающий половые гормоны</li>
              </ul>
              <div>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>Гормональный скрининг</li>
                <li>Тестостерон</li>
                <li>Свободный тестостерон</li>
                <li>Глобулин, связывающий половые гормоны</li>
              </ul>
              <div>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>Гормональный скрининг</li>
                <li>Тестостерон</li>
                <li>Свободный тестостерон</li>
                <li>Глобулин, связывающий половые гормоны</li>
              </ul>
              <div>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div>
              <h1>Check-UP</h1>
              <h3>для мужчин</h3>
              <ul>
                <li>Гормональный скрининг</li>
                <li>Тестостерон</li>
                <li>Свободный тестостерон</li>
                <li>Глобулин, связывающий половые гормоны</li>
              </ul>
              <div>
                <p>Всего 2800₽</p>
                <span>3500₽</span>
              </div>
              <div>
                <BaseButton>Записаться</BaseButton>
                <BaseButton>Подробнее</BaseButton>
              </div>
            </div>

            <img src={image} alt="@" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
