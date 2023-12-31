import React from 'react';
import './App.css';
import { UserChats } from './Components/ChatUI/user-chats/user-chats';
import { Button } from '@nextui-org/react';


function App() {
    return (
        <div className="App">
            <div className="navigation-panel" />
            <div className="main-container">
                {/* <UserChats /> */}
                {/* <Button>Test Button</Button> */}
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </div>
        </div>
    );
}

export default App;
