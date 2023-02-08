// Allows a notification to be appear briefly in order to let the user know if they have
// already entered a letter by using a bool.
function Notification({ showNotification }) {

    // Uses a slice state to determine if a class componant is added to make it visible.
    return (
      <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        <p>You have already entered this letter.</p>
      </div>
    );
  }

// This is passed onto the app file.
export default Notification;