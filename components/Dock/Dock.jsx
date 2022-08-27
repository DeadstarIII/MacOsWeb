import React, { useState } from "react";
import styles from "../../styles/Dock.module.css";
import Calculator from "../Calculator/Calculator";
const Dock = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div>
        <div className={styles.container}>
          <div
            className={styles.item1}
            onClick={() => setIsVisible(!isVisible)}
          />
          {isVisible && <Calculator />}

          <div className={styles.item2} />
        </div>
      </div>
    </>
  );
};
export default Dock;
