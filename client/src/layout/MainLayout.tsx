// import Navigation from "./components/Navigation";
import Sidebar from "./@components/Sidebar";
import Chat from "./@components/Chat";
import ChatInfo from "./@components/ChatInfo";

export const MainLayout = () => {
  return (
    <>
      {/* Layout */}
      <div className="layout overflow-hidden">
        {/* Navigation */}
        {/* <Navigation /> */}
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
        {/* Chat: Info */}
        <ChatInfo />
      </div>
    </>
  );
};
