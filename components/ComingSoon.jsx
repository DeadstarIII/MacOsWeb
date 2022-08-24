import styles from "../styles/Actions.module.css";
const ComingSoon = () => {
  return (
    <div>
      <button
        className={styles.pBtn}
        onClick={ClickSoon()}
      >
        Coming Soon
      </button>
      <div className={styles.pActionBackground}></div>
    </div>
  );
};

function ClickSoon() {
  
}

export default ComingSoon;
