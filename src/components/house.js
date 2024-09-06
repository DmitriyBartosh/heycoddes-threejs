import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, AdaptiveDpr } from "@react-three/drei";
import { IoArrowDown } from "react-icons/io5";
import cx from "classnames";
import { Model } from "./model";
import { steps } from "./stepsVariants";

import Presentation from "./presentation";
import Loading from "./loading";

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
      <Suspense fallback={<Loading />}>
        <div className={styles.canvas}>
          <Canvas
            camera={{ position: [0, 20, 0], fov: 35 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true }}
          >
            <Model presentation={presentation} />

            <CameraControls
              ref={cameraControlsRef}
              minDistance={10}
              maxDistance={30}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2.5}
              boundaryFriction={0.1}
            />
            <AdaptiveDpr pixelated />
          </Canvas>
        </div>
        <div
          className={cx(
            styles.navigation,
            presentation.status && styles.hidden
          )}
        >
          <div className={styles.actions}>
            {presentation.status ? (
              <button className={styles.button} onClick={switchToFree}>
                Свободный просмотр
              </button>
            ) : (
              <button className={styles.button} onClick={switchToPresentation}>
                Вернуться к презентации
              </button>
            )}
          </div>

          <div
            className={cx(styles.hint, !presentation.status && styles.hidden)}
          >
            <IoArrowDown />
            <p>Scroll</p>
          </div>
        </div>
        <a
          className={styles.heycoddes}
          target="_blank"
          rel="noreferrer"
          href="https://heycoddes.ru"
        >
          www.heycoddes.ru
        </a>
        <Presentation
          setPresentation={setPresentation}
          presentation={presentation}
          switchToPresentation={switchToPresentation}
        />
      </Suspense>
    </div>
  );
}
