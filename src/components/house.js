import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, ScrollControls, useScroll } from "@react-three/drei";
import { IoArrowDown } from "react-icons/io5";

import { Model } from "./model";

import * as styles from "./house.module.scss";

export default function House() {
  const [presentation, setPresentation] = useState(true);
  const cameraControlsRef = useRef();
  const scroll = useScroll();

  const [position, setPosition] = useState(null);

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  return (
    <div className={styles.container}>
      <Canvas frameloop="demand" camera={{ position: [15, 10, 2], fov: 35 }}>
        <ScrollControls pages={3}>
          <Model presentation={presentation} />
        </ScrollControls>
        <CameraControls
          ref={cameraControlsRef}
          minDistance={8}
          maxDistance={20}
          enabled={!presentation}
          boundaryFriction={0.1}
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
      </div>

      <div className={styles.navigation}>
        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => setPresentation(true)}
          >
            Презентация
          </button>
          <button
            className={styles.button}
            onClick={() => setPresentation(false)}
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
