import { useState } from "react";
import ModalUserProfile from "../../models/ModalUserProfile";
import Dropdown from "./Dropdown";

const MessageInner = () => {
  const [showModalUserProfile, setShowModalUserProfil] =
    useState<boolean>(false);
  return (
    <div className="message">
      <a
        className="avatar avatar-responsive"
        onClick={() => setShowModalUserProfil(!showModalUserProfile)}
      >
        <img
          className="avatar-img"
          src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
          alt=""
        />
      </a>
      <ModalUserProfile
        showModalUserProfile={showModalUserProfile}
        setShowModalUserProfile={setShowModalUserProfil}
      />

      <div className="message-inner">
        <div className="message-body">
          <div className="message-content">
            <div className="message-text">
              <p>
                Hey, Marshall! How are you? Can you please change the color
                theme of the website to pink and purple?
              </p>
            </div>

            {/* Dropdown */}
            <Dropdown />
          </div>

        </div>

        <div className="message-footer">
          <span className="extra-small text-muted">08:45 PM</span>
        </div>
      </div>
    </div>
  );
};

export default MessageInner;
