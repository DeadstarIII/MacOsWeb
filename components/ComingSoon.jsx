import styles from "../styles/Actions.module.css";
import Script from "next/script";
const ComingSoon = () => {
  return (
    <div>
      <Script src="https://raw.githubusercontent.com/codedgar/Puppertino/master/src/js/actions.js"></Script>

      <button className={styles.pbtn} data-p-open-actions="#actions_basic">
        Basic Actions
      </button>

      <div className={styles.pactionbackground}>
        <div
          className={styles.pactionbigcontainer}
          id="actions_basic"
          data-p-close-on-outside="true"
        >
          <div className="p-action-container">
            <div className="p-action-title">
              <h3 className="p-action-title--intern">Welcome to actions</h3>
              <p className="p-action-text">Select an option below...</p>
            </div>
            <a href="#" className="p-action--intern p-action-neutral">
              New private tab
            </a>
            <a href="#" className="p-action--intern">
              New tab
            </a>
          </div>
          <div className="p-action-container">
            <a
              href="#"
              className="p-action--intern p-action-cancel"
              data-p-cancel-action="true"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
