import styles from "../styles/Window.module.css";
const Window = () => {
  return (
    <>
      <div>
        <div className={`${styles.titlebar}`}>
          <svg className={styles.Close}
            width="7"
            height="7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#000"
              stroke-width="1.2"
              stroke-linecap="round"
              d="M1.182 5.99L5.99 1.182m0 4.95L1.182 1.323"
            ></path>
          </svg>
          Window
        </div>
      </div>
    </>
  );
};

export default Window;
