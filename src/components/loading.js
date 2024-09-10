import React, { useEffect } from "react";
import { useProgress } from "@react-three/drei";

import * as styles from "./house.module.scss";

function Loading({ setLoading }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress > 50) {
      setLoading(false);
    }
  }, [progress, setLoading]);

  return (
    <div className={styles.loading}>
      <div className={styles.text}>
        <p>Загружаем планировку</p>
        <p className={styles.number}>{Math.round(progress)}%</p>
      </div>
    </div>
  );
}

export default Loading;
