import styles from "../../styles/ControlButtons.module.css";

const ControlButtons = () => {
  return (
    <div>
      <div className={styles.buttons}>
        <div className={styles.redbutton} onClick={ItemOne()}></div>
        <div className={styles.yellowbutton}></div>
        <div className={styles.greenbutton}></div>
      </div>
    </div>
  );
};

function ItemOne() {
  document.getElementsByClassName("").style.visibility = "visible";
}

export default ControlButtons;
