import React, { useRef, useEffect } from "react";
import cx from "classnames";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { steps } from "./stepsVariants";

// Import Swiper styles
import "swiper/css";

import * as styles from "./house.module.scss";

// import required modules
import { Mousewheel } from "swiper/modules";

function Presentation({ setPresentation, presentation }) {
  const sliderRef = useRef(null);
  const lastIndex = steps.length - 1;

  function changeSlide(activeIndex) {
    if (activeIndex === lastIndex) {
      setPresentation({ status: false, step: activeIndex });
    } else {
      setPresentation({ status: true, step: activeIndex });
    }
  }

  useEffect(() => {
    if (presentation.status) {
      sliderRef.current.swiper.slideTo(0, 1000);
    }
  }, [presentation.status]);

  return (
    <Swiper
      ref={sliderRef}
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={0}
      speed={1000}
      mousewheel={true}
      onSlideChange={(e) => changeSlide(e.activeIndex)}
      modules={[Mousewheel]}
      className={cx(styles.about, !presentation.status && styles.hidden)}
    >
      {steps.map((item, index) => {
        return (
          <SwiperSlide className={styles.wrap} key={index}>
            <motion.div
              animate={{
                opacity:
                  presentation.step === index && index !== lastIndex ? 1 : 0,
                scale:
                  presentation.step === index && index !== lastIndex ? 1 : 0.9,
              }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={styles.block}
            >
              <h2>{item.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Presentation;
