// import Navigation from "./components/Navigation";
import Sidebar from "./@components/sidebar-content/Sidebar";
import Chat from "./@components/sidebar-content/Chat";
import ChatInfo from "./@components/sidebar-content/ChatInfo";

export const MainLayout = () => {
  return (
    <>
      {/* Layout */}
      <div className="layout overflow-hidden">
        <Sidebar />
        {/* Chat */}
        <Chat />
        {/* Chat: Info */}
        <ChatInfo />
      </div>
    </>
  );
};
