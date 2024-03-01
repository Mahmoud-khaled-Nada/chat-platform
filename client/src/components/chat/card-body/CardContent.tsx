import MessageInner from "./messages/MessageInner";
import MessageOut from "./messages/MessageOut";
import MessageDivider from "./messages/MessageDivider";
import UserIsTyping from "./messages/UserIsTyping";

const CardContent = () => {
  return (
    <div className="chat-body hide-scrollbar flex-1 h-100">
      <div className="chat-body-inner">
        <div className="py-6 py-lg-12">
          {/* Message */}


            <MessageInner />
         

          {/* Message */}
          <MessageOut />

          {/* Divider */}
          <MessageDivider />

          {/* Message */}
          <UserIsTyping />
        </div>
      </div>
    </div>
  );
};

export default CardContent;
