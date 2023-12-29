import './user-chats.css';
import React from 'react';

export interface UserChatsProps {
    className?: string;
}

export const UserChats: React.FC<UserChatsProps> = ({ className = '' }) => (
    <div className={`${className} user-chats-ui`}>
        <div className="chat-user-list" />
        <div className="chatting-area" /></div>
);