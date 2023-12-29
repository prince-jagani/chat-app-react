import React from 'react';
import './App.css';
import { UserChats } from './Components/ChatUI/user-chats/user-chats';


function App() {
    return (
        <div className="App">
            <div className="navigation-panel" />
            <div className="main-container">
                <UserChats />
            </div>
        </div>
    );
}

export default App;
