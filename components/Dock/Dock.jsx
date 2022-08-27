import styles from "../../styles/Dock.module.css";
import Calculator from "../Calculator/Calculator";
const Dock = () => {
  function Calculator() {
    console.log("calculator");
  }
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.item1} onClick={Calculator} />
          <div className={styles.item2} />
        </div>
      </div>
    </>
  );
};
export default Dock;
