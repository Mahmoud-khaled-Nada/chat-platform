import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const CardConversation = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <div className="my-5">
        <small className="text-uppercase text-muted">D</small>
      </div>
      <div className="card border-0">
        <div className="card-body">
          <div className="row align-items-center gx-5">
            <div className="col-auto">
              <a href="#" className="avatar avatar-online">
                {/* <span className="avatar-text">D</span> */}

                <img
                  className="avatar-img"
                  src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/6.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="col">
              <h5>
                <a href="#">Damian Binder</a>
              </h5>
              <p>last seen within a week</p>
            </div>

            <div className="col-auto">
              {/* Dropdown */}
              <div className="dropdown">
                <a
                  onClick={() => setOpenMenu(!openMenu)}
                  className={`icon text-muted ${openMenu ? "show" : ""}`}
                  role="button"
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
                <DropdownMenu openMenu={openMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardConversation;
