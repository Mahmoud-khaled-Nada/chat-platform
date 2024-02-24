import React, { useState, useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { LuReply } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div
      className={`message-action ${dropdown ? "show" : ""}`}
      ref={dropdownRef}
    >
      <div className="dropdown">
        <a className="icon text-muted" onClick={toggleDropdown}>
          <HiDotsVertical className="feather feather-more-vertical" />
        </a>

        {dropdown && (
          <ul
            className="dropdown-menu show"
            style={{
              position: "absolute",
              inset: "0px auto auto 0px",
              margin: "0px",
              transform: "translate(-144px, 22px)",
            }}
          >
            <li>
              <a className="dropdown-item d-flex align-items-center">
                <span className="me-auto">Edit</span>
                <div className="icon">
                  <CiEdit className="feather feather-edit-3" />
                </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center">
                <span className="me-auto">Reply</span>
                <LuReply className="feather feather-corner-up-left" />
                <div className="icon"></div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center text-danger">
                <span className="me-auto">Delete</span>
                <div className="icon">
                  <RiDeleteBin6Line className="feather feather-trash-2" />
                </div>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
