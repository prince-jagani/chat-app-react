import './group-chats.css';
import React from 'react';

export interface GroupChatsProps {
    className?: string;
}

export const GroupChats: React.FC<GroupChatsProps> = ({ className = '' }) => (
    <div className={`${className} group-chat-ui`}>
        <div />
    </div>
);