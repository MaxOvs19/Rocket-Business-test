import React from "react";
import { useSwiper } from "swiper/react";

import classes from "./sliderBtn.module.scss";

const SliderBtn = ({ type, page, setPage }) => {
  const swiper = useSwiper();

  function next() {
    swiper.slideNext();
    if (page < 4) {
      setPage(page + 1);
    }
  }

  function back() {
    swiper.slidePrev();
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <>
      {type == 0 && (
        <button onClick={next} className={classes.arrowBtn}>
          <svg
            width="34"
            height="18"
            viewBox="0 0 34 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.right}
          >
            <path
              d="M1.32817 7.67186H29.4551L24.7957 3.03512C24.2758 2.51768 24.2739 1.67678 24.7913 1.15689C25.3087 0.636925 26.1497 0.635 26.6696 1.15237L33.6093 8.05861C33.6098 8.05901 33.6101 8.05947 33.6105 8.05987C34.1291 8.57731 34.1307 9.42093 33.6106 9.94009C33.6102 9.94049 33.6098 9.94095 33.6094 9.94135L26.6697 16.8476C26.1499 17.3649 25.3089 17.3631 24.7914 16.8431C24.274 16.3232 24.276 15.4823 24.7959 14.9648L29.4551 10.3281H1.32817C0.594646 10.3281 4.57764e-05 9.7335 4.57764e-05 8.99998C4.57764e-05 8.26646 0.594646 7.67186 1.32817 7.67186Z"
              fill="#E1E1E1"
            />
          </svg>
        </button>
      )}
      {type == 1 && (
        <button onClick={back} className={classes.arrowBtn}>
          <svg
            width="34"
            height="18"
            viewBox="0 0 34 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.left}
          >
            <path
              d="M1.32817 7.67186H29.4551L24.7957 3.03512C24.2758 2.51768 24.2739 1.67678 24.7913 1.15689C25.3087 0.636925 26.1497 0.635 26.6696 1.15237L33.6093 8.05861C33.6098 8.05901 33.6101 8.05947 33.6105 8.05987C34.1291 8.57731 34.1307 9.42093 33.6106 9.94009C33.6102 9.94049 33.6098 9.94095 33.6094 9.94135L26.6697 16.8476C26.1499 17.3649 25.3089 17.3631 24.7914 16.8431C24.274 16.3232 24.276 15.4823 24.7959 14.9648L29.4551 10.3281H1.32817C0.594646 10.3281 4.57764e-05 9.7335 4.57764e-05 8.99998C4.57764e-05 8.26646 0.594646 7.67186 1.32817 7.67186Z"
              fill="#E1E1E1"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default SliderBtn;
