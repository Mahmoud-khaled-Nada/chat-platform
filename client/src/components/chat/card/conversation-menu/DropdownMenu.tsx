import { FC } from "react";

interface Props {
  openMenu: boolean;
}

const DropdownMenu: FC<Props> = ({ openMenu }) => {
  return (
    <ul className={`dropdown-menu ${openMenu ? "show" : ""}`}
    style={openMenu ? { position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(-144px, 22px)' } : {}}
    >
      <li>
        <a className="dropdown-item" href="#">
          New message
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Edit contact
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item text-danger" href="#">
          Block user
        </a>
      </li>
    </ul>
  );
};

export default DropdownMenu;
