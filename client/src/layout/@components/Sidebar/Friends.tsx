import { FC, useState } from "react";
import ModalInvite from "../../../components/chat/models/ModalInvite";
import CardConversation from "../../../components/chat/card/conversation-menu/CardConversation";
import Search from "./Chats/Search";
import { IoPersonAddOutline } from "react-icons/io5";


interface Props {
  isActive: boolean;
}
const Friends: FC<Props> = ({ isActive }) => {
  const [findFriendOpen, setFindFriendOpen] = useState<boolean>(false);

  const handelFindFriendOpen = () => {
    setFindFriendOpen(true);
  };
  return (
    <div className={`tab-pane fade h-100 ${isActive ? "show active" : ""}`}>
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container py-8">
            {/* Search */}
            <div className="mb-6">
              <Search />

              {/* Invite button */}
              <div className="mt-5">
                <button
                  onClick={handelFindFriendOpen}
                  className="btn btn-lg btn-primary w-100 d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-invite"
                >
                  Find Friends
                  <span className="icon ms-auto">
                    <IoPersonAddOutline className="feather feather-user-plus" />
                  </span>
                </button>
                <ModalInvite
                  findFriendOpen={findFriendOpen}
                  setFindFriendOpen={setFindFriendOpen}
                />
              </div>
            </div>

            {/* List */}
            <div className="card-list">
              {/* Card */}
              <CardConversation />
              <CardConversation />
              <CardConversation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
