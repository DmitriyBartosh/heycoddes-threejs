import React, { useRef, useState, useEffect } from "react";
import cx from "classnames";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { steps } from "./stepsVariants";

// Import Swiper styles
import "swiper/css";

import * as styles from "./house.module.scss";

// import required modules
import { Mousewheel } from "swiper/modules";

function Presentation({ setPresentation, presentation }) {
  const [currentHeight, setCurrentHeight] = useState(null);
  const sliderRef = useRef(null);
  const lastIndex = steps.length - 1;

  const { height } = useWindowSize();

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

  useEffect(() => {
    setCurrentHeight(height);
  }, [height]);

  return (
    <Swiper
      ref={sliderRef}
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={0}
      speed={1000}
      setWrapperSize={true}
      mousewheel={true}
      onInit={() => setCurrentHeight(height)}
      height={currentHeight}
      onSlideChange={(e) => changeSlide(e.activeIndex)}
      modules={[Mousewheel]}
      className={cx(styles.about, !presentation.status && styles.hidden)}
    >
      {steps.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={styles.wrap} style={{ minHeight: currentHeight }}>
              <motion.div
                animate={{
                  opacity:
                    presentation.step === index && index !== lastIndex ? 1 : 0,
                  scale:
                    presentation.step === index && index !== lastIndex
                      ? 1
                      : 0.85,
                }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={styles.block}
              >
                <h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </motion.div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Presentation;
