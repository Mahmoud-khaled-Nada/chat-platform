import { FC, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { FiMoreVertical } from "react-icons/fi";

interface Props {
  id?: string;
  name: string;
}
const CardConversation: FC<Props> = ({name}) => {
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
                <a>{name}</a>
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
                  <FiMoreVertical className="feather feather-more-vertical" />
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
