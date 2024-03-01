import { useState } from "react";
import CardContent from "../../../components/chat/card-body/CardContent";
import CardFooter from "../../../components/chat/card-body/CardFooter";
import ChatHeader from "../../../components/chat/card-body/ChatHeader";

const Chat = () => {
  const [showFriends, setShowFriends] = useState<boolean>(true);

  return (
    <main className={`main ${showFriends ? "is-visible" : ""}`}>
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          {/* Chat: Header */}
          <ChatHeader showFriendsFn={() => setShowFriends(!showFriends)} />
          {/* Chat: Content */}
          <CardContent />
          {/* Chat: Footer */}
          <CardFooter />
        </div>
      </div>
    </main>
  );
};

export default Chat;
