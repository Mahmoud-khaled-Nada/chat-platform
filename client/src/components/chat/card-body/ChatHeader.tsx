import { FC, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import ModalProfile from "../models/ModalProfile";
import ModalUserProfile from "../models/ModalUserProfile";

interface Prpos {
  showFriendsFn: () => void;
}
const ChatHeader: FC<Prpos> = ({ showFriendsFn }) => {
  const [showModalProfile, setShowModalProfile] = useState<boolean>(false);
  const [showModalUserProfile, setShowModalUserProfile] =
    useState<boolean>(false);

  return (
    <div className="chat-header border-bottom py-4 py-lg-7">
      <div className="row align-items-center">
        {/* Mobile: close */}
        <div className="col-2 d-xl-none">
          <a className="icon icon-lg text-muted" onClick={showFriendsFn}>
            <HiChevronLeft />
          </a>
        </div>
        {/* Mobile: close */}
        {/* Content */}
        <div className="col-8 col-xl-12">
          <div className="row align-items-center text-center text-xl-start">
            {/* Title */}
            <div className="col-12 col-xl-6">
              <div className="row align-items-center gx-5">
                <div className="col-auto">
                  <div className="avatar avatar-online d-none d-xl-inline-block">
                    <img
                      className="avatar-img"
                      src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col overflow-hidden">
                  <h5 className="text-truncate">Ollie Chandler</h5>
                  <p className="text-truncate">
                    is typing
                    <span className="typing-dots">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Title */}

            {/* Toolbar */}
            <div className="col-xl-6 d-none d-xl-block">
              <div className="row align-items-center justify-content-end gx-6">
                <div className="col-auto">
                  <a
                    href="#"
                    className="icon icon-lg text-muted"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-more"
                    aria-controls="offcanvas-more"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-more-horizontal"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </a>
                </div>

                <div className="col-auto">
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      onClick={() =>
                        setShowModalUserProfile(!showModalUserProfile)
                      }
                    >
                      <img
                        className="avatar-img"
                        src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
                        alt="#"
                      />
                    </a>
                    <ModalUserProfile
                      showModalUserProfile={showModalUserProfile}
                      setShowModalUserProfile={setShowModalUserProfile}
                    />

                    <a
                      onClick={() => setShowModalProfile(!showModalProfile)}
                      className="avatar avatar-sm"
                    >
                      <img
                        className="avatar-img"
                        src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
                        alt="#"
                      />
                    </a>
                    <ModalProfile
                      showModalProfile={showModalProfile}
                      setShowModalProfile={setShowModalProfile}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Toolbar */}
          </div>
        </div>
        {/* Content */}

        {/* Mobile: more */}
        <div className="col-2 d-xl-none text-end">
          <a
            href="#"
            className="icon icon-lg text-muted"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-more"
            aria-controls="offcanvas-more"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </a>
        </div>
        {/* Mobile: more */}
      </div>
    </div>
  );
};

export default ChatHeader;
