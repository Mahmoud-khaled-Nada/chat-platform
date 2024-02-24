import { FC } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import { GoChevronRight } from "react-icons/go";

interface Props {
  findFriendOpen: boolean;
  setFindFriendOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInvite: FC<Props> = ({ findFriendOpen, setFindFriendOpen }) => {

  return (
    <div
      className={`modal fade ${findFriendOpen ? "show is-display" : ""}`}
      
    >
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
        <div className="modal-content">
          {/* Modal: Body */}
          <div className="modal-body py-0">
            {/* Header */}
            <div className="profile modal-gx-n">
              <div className="profile-img text-primary rounded-top-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 400 140.74"
                >
                  <defs>
                    <style>{/* .cls-2{fill:#fff;opacity:0.1;} */}</style>
                  </defs>
                  <g>
                    <g>
                      <path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z" />
                      <path
                        className="cls-2"
                        d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"
                      />
                      <path
                        className="cls-2"
                        d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z"
                      />
                      <circle className="cls-2" cx="94.5" cy="57.5" r="22.5" />
                      <path
                        className="cls-2"
                        d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"
                      />
                    </g>
                  </g>
                </svg>

                <div className="position-absolute top-0 start-0 p-5">
                  <button
                    className="btn-close btn-close-white btn-close-arrow opacity-100"
                    onClick={() => setFindFriendOpen(false)}
                  ></button>
                </div>
              </div>

              <div className="profile-body">
                <div className="avatar avatar-lg">
                  <span className="avatar-text bg-primary">
                    <HiOutlineUserAdd  className="feather feather-user-plus"/>
                  </span>
                </div>

                <h4 className="fw-bold mb-1">Invite your friends</h4>
                <p style={{ fontSize: "16px" }}>
                  Send invitation links to your friends
                </p>
              </div>
            </div>
            {/* Header */}

            <hr className="hr-bold modal-gx-n my-0" />

            {/* Form */}
            <div className="modal-py">
              <form className="row gy-6">
                <div className="col-12">
                  <label
                    htmlFor="invite-email"
                    className="form-label text-muted"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="invite-email"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="invite-message"
                    className="form-label text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="invite-message"
                    placeholder="Custom message"
                  ></textarea>
                </div>
              </form>
            </div>
            {/* Form */}
            <hr className="hr-bold modal-gx-n my-0" />

            {/* Button */}
            <div className="modal-py">
              <a
                href="#"
                className="btn btn-lg btn-primary w-100 d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#invite-modal"
              >
                Send
                <span className="icon ms-auto">
                  <GoChevronRight className="feather feather-chevron-right"/>
                </span>
              </a>
            </div>
            {/* Button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInvite;
