import { Icon123 } from "@tabler/icons-react";
import { useState } from "react";

import Sidebar from "./assets/Sidebar";
// import UserChatBox from "./Components/ChatUI/UserChatBox";
import Login from "./Components/Account/Login";

const pages = [
  { id: 'chat', icon: <Icon123 size={24} /> },
  { id: 'contacts', icon: <Icon123 size={24} /> },
  { id: 'settings', icon: <Icon123 size={24} /> },
];

function App() {

  const [activePage, setActivePage] = useState('chat');


  const handleChangePage = (pageId: string) => {
    setActivePage(pageId);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Side Navigation Panel */}
      <Sidebar pages={pages} activePage={activePage} onChangePage={handleChangePage} />

      {/* Main Area */}
      <div className="flex-1 p-4 bg-gray-300 flex">
        {/* Add Main Content */}

        {/* <UserChatBox /> */}
        <Login/>

        {/* End */}
      </div>
    </div>
  );
}

export default App
