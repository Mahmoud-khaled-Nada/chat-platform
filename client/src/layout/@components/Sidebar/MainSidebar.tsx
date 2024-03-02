import { RiEditLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import Chats from "./Chats";
import Friends from "./Friends";
import Notifications from "./Notifications";
// import Support from "./Support";
// import Settings from "./Settings";

const MainSidebar = () => {
  const [chats, setChats] = useState<boolean>(false);
  const [friends, setFriends] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(false);
  // const [settings, setSettings] = useState<boolean>(false);
  // const [support, setSupport] = useState<boolean>(false);

  const handleChatsClick = () => {
    setChats(true);
    setFriends(false);
    setNotifications(false);
  };

  const handleFriendsClick = () => {
    setChats(false);
    setFriends(true);
    setNotifications(false);
  };

  const handleNotificationsClick = () => {
    setChats(false);
    setFriends(false);
    setNotifications(true);
  };

  return (
    <>
      <ul className="mn-ul-navigation">
        <li>
          <div className="avatar avatar-online mx-auto d-none d-xl-block">
            <img
              className="avatar-img"
              src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
              alt=""
            />
          </div>
          <div className="avatar avatar-online avatar-xs d-xl-none">
            <img
              className="avatar-img"
              src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
              alt=""
            />
          </div>
        </li>
        <li>
          <RiEditLine onClick={handleChatsClick} />
        </li>
        <li>
          <FiUsers onClick={handleFriendsClick} />
        </li>
        <li>
          <BsChatDots onClick={handleChatsClick} />
        </li>
        <li>
          <IoNotificationsOutline onClick={handleNotificationsClick} />
        </li>
      </ul>

      <Chats isActive={chats} />
      <Friends isActive={friends} />
      <Notifications isActive={notifications} />
      {/* <Support isActive={support} />
      <Settings isActive={settings} /> */}
    </>
  );
};

export default MainSidebar;
