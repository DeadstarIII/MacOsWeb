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
          ></div>{" "}
          <div className={styles.item2} />
          {isVisible ? <Calculator /> : !isVisible}
        </div>
      </div>
    </>
  );
};
export default Dock;
