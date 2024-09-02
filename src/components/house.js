import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, ScrollControls, useScroll } from "@react-three/drei";
import { IoArrowDown } from "react-icons/io5";
import { MotionCanvas } from "framer-motion-3d";
import cx from "classnames";

import { Model } from "./model";

import * as styles from "./house.module.scss";

export default function House() {
  const [presentation, setPresentation] = useState({
    status: true,
    step: 1,
  });
  const cameraControlsRef = useRef();

  console.log(cameraControlsRef);

  function switchToPresentation() {
    setPresentation({ status: true, step: 1 });
    cameraControlsRef.current?.reset(true);
  }

  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 20, 0], fov: 35 }}>
        <ScrollControls pages={3}>
          <Model presentation={presentation} />
        </ScrollControls>
        <CameraControls
          ref={cameraControlsRef}
          minDistance={8}
          maxDistance={30}
          enabled={true}
          boundaryFriction={0.1}
          onStart={(e) =>
            console.log("Стартовая позиция: ", e.target.getPosition())
          }
          onEnd={(e) =>
            console.log("Конечная позиция: ", e.target.getPosition())
          }
        />
      </Canvas>

      <div className={styles.about}>
        <h2>Проект Барн</h2>
        <p>
          Внешняя отделка включает кликфальц стен и крыши, открытую террасу с
          вынесенной крышей, увеличенные окна для лучшего освещения, светлую
          зону на втором этаже, ленточный фундамент с монолитными плитами и
          вентиляционную систему.
          <br />
          <br />
          На первом этаже внутренняя отделка включает мини-сауну, все
          необходимые коммуникации (газ, свет, вода, канализация), систему
          отопления (газовый котел, теплый пол), керамогранит и натяжные
          потолки.
          <br />
          <br />
          На втором этаже внутренняя отделка предусматривает отдельный санузел,
          ламинат и натяжные потолки.
        </p>
        <button onClick={() => setPresentation({ status: true, step: 1 })}>
          Общее описание
        </button>
        <button onClick={() => setPresentation({ status: true, step: 2 })}>
          Рабочая зона
        </button>
        <button onClick={() => setPresentation({ status: true, step: 3 })}>
          Спальная комната
        </button>
        <button onClick={() => setPresentation({ status: true, step: 4 })}>
          Домашний кинотеатр
        </button>
        <button onClick={() => setPresentation({ status: true, step: 5 })}>
          Гостинная комната
        </button>
        <button onClick={() => setPresentation({ status: true, step: 6 })}>
          Ванная комната
        </button>
      </div>

      <div className={styles.navigation}>
        <div className={styles.actions}>
          <button
            className={cx(styles.button, presentation.status && styles.active)}
            onClick={switchToPresentation}
          >
            Презентация
          </button>
          <button
            className={cx(styles.button, !presentation.status && styles.active)}
            onClick={() => setPresentation({ status: false, step: 0 })}
          >
            Свободный просмотр
          </button>
        </div>

        <div className={styles.hint}>
          <IoArrowDown />
          <p>Scroll</p>
        </div>
      </div>
    </div>
  );
}
