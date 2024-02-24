import { FC } from "react";
import CardCommunity from "./Chats/CardCommunity";
import CardLoading from "./Chats/CardLoading";
import Search from "./Chats/Search";
import UserOnline from "./Chats/UserOnline";
import UserTyping from "./Chats/UserTyping";
import UsersGroup from "./Chats/UsersGroup";

interface Props {
  isActive: boolean;
}

const Chats:FC<Props> = ({isActive}) => {
  return (
    <div className={`tab-pane fade h-100 ${isActive ? "show active" : ""}`}>
    <div className="d-flex flex-column h-100 position-relative">
      <div className="hide-scrollbar">
        <div className="container py-8">
          {/* Search */}
          <Search />

          {/* Chats */}
          <div className="card-list">
            {/* Card */}
            <CardCommunity />

            {/* Card */}
            <UserOnline />
            {/* Card */}

            {/* Card */}
            <UserTyping />
            {/* Card */}

            {/* Card */}
            <UsersGroup />
            {/* Card */}
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </div>
          {/* Chats */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Chats;
