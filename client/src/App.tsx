import { Icon123 } from "@tabler/icons-react";
import { useState } from "react";
import Sidebar from "./assets/Sidebar";


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
      <Sidebar pages={pages} activePage={activePage} onChangePage={handleChangePage} />
      <div className="flex-1 p-4 bg-gray-300">
        {/* Render content based on the activePage */}
        {activePage === 'chat' && <div>Chat Page Content</div>}
        {activePage === 'contacts' && <div>Contacts Page Content</div>}
        {activePage === 'settings' && <div>Settings Page Content</div>}
      </div>
    </div>
  );
}

export default App
