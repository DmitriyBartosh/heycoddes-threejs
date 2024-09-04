import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { IoArrowDown } from "react-icons/io5";
import cx from "classnames";
import { Model } from "./model";
import { steps } from "./stepsVariants";

import Presentation from "./presentation";

import * as styles from "./house.module.scss";

export default function House() {
  const [presentation, setPresentation] = useState({
    status: true,
    step: 0,
  });
  const cameraControlsRef = useRef();

  function switchToPresentation() {
    setPresentation({ status: true, step: 0 });
    cameraControlsRef.current?.reset(true);
  }

  function switchToFree() {
    setPresentation({ status: false, step: steps.length - 1 });
    cameraControlsRef.current?.reset(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 20, 0], fov: 35 }}>
          <Model presentation={presentation} />
          <CameraControls
            ref={cameraControlsRef}
            minDistance={8}
            maxDistance={30}
            onEnd={(e) => console.log("Законечно")}
            boundaryFriction={0.1}
          />
        </Canvas>
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
            onClick={switchToFree}
          >
            Свободный просмотр
          </button>
        </div>

        <div className={styles.hint}>
          <IoArrowDown />
          <p>Scroll</p>
        </div>
      </div>
      <Presentation
        setPresentation={setPresentation}
        presentation={presentation}
        switchToPresentation={switchToPresentation}
      />
    </div>
  );
}
