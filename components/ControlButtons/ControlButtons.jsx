import styles from "../../styles/ControlButtons.module.css";

const ControlButtons = () => {
  return (
    <div>
      <div className={styles.buttons}>
        <div className={styles.redbutton}></div>
        <div className={styles.yellowbutton}></div>
        <div className={styles.greenbutton}></div>
      </div>
    </div>
  );
};


export default ControlButtons;
