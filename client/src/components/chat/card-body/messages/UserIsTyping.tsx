
function UserIsTyping() {
  return (
    <div className="message" style={{ marginTop: "1rem" }}>
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#modal-user-profile"
        className="avatar avatar-responsive"
      >
        <img
          className="avatar-img"
          src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
          alt=""
        />
      </a>

      <div className="message-inner">
        <div className="message-body">
          <div className="message-content">
            <div className="message-text">
              <p>
                Chandler is typing
                <span className="typing-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserIsTyping;
