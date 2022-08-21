const ComingSoon = () => {
  return (
    <div>
      <button class="p-btn" data-p-open-actions="#actions_basic">
        Basic Actions
      </button>

      <div class="p-action-background">
        <div
          class="p-action-big-container"
          id="actions_basic"
          data-p-close-on-outside="true"
        >
          <div class="p-action-container">
            <div class="p-action-title">
              <h3 class="p-action-title--intern">Welcome to actions</h3>
              <p class="p-action-text">Select an option below...</p>
            </div>
            <a href="#" class="p-action--intern p-action-neutral">
              New private tab
            </a>
            <a href="#" class="p-action--intern">
              New tab
            </a>
          </div>
          <div class="p-action-container">
            <a
              href="#"
              class="p-action--intern p-action-cancel"
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
