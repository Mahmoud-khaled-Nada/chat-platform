import { useState } from "react";
import ModalProfile from "../../models/ModalProfile";
import Dropdown from "./Dropdown";

const MessageOut = () => {
  const [showModalProfile, setShowModalProfile] = useState<boolean>(false);
  return (
    <div className="message message-out">
      <a
        className="avatar avatar-responsive"
        onClick={() => setShowModalProfile(!showModalProfile)}
      >
        <img
          className="avatar-img"
          src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
          alt=""
        />
      </a>
      <ModalProfile
        showModalProfile={showModalProfile}
        setShowModalProfile={setShowModalProfile}
      />
      <div className="message-inner">
        <div className="message-body">
          <div className="message-content">
            <div className="message-text">
              <blockquote className="blockquote overflow-hidden">
                <h6 className="text-reset text-truncate">William Wright</h6>
                <p className="small text-truncate">
                  Hey, Marshall! How are you? Can you please change the color
                  theme of the website to pink and purple?
                </p>
              </blockquote>
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

export default MessageOut;
