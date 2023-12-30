import { IconMessageCirclePlus, IconSearch, IconSend } from '@tabler/icons-react';
import './user-chats.css';
import React, { useEffect, useRef, useState } from 'react';

export interface UserChatsProps {
    className?: string;
}

export const UserChats: React.FC<UserChatsProps> = ({ className = '' }) => {
    const messageFieldRef = useRef<HTMLTextAreaElement>(null)
    const [messageText, setMessageText] = useState("");
    const [resizeMessageField, setResizeMessageField] = useState(false)

    useEffect(() => {
        if (messageFieldRef.current) {
            messageFieldRef.current.style.height = 'auto'
            messageFieldRef.current.style.height = messageFieldRef.current.scrollHeight + 'px'
        }
        return () => {
            setResizeMessageField(false)
        }
    }, [resizeMessageField])



    return (
        <div className={`${className} user-chats-ui`}>
            {/* Chat: User List */}
            <div className="chat-user-list">
                <div className="chat-search-bar">
                    <IconMessageCirclePlus className="new-cha-btm" />
                    <div className="user-search-input">
                        <input placeholder='Search' className="inp-field-search" />
                        <IconSearch size={16} />
                    </div>
                </div>
                <div className="list scrollable-div">
                </div>
            </div>


            {/* Chat: Chatting Area */}
            <div className="chatting-area scrollable-div">
                <div className="chat-user-title-bar">
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className="avatar-main" />
                </div>
                <div className="main-chat-box" />
                <div className="send-message-controls">
                    <textarea className="message-ctrl-input scrollable-div"
                        value={messageText}
                        ref={messageFieldRef}
                        rows={1}
                        placeholder='Enter a new message...'
                        onChange={(e) => {
                            setMessageText(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                console.log("Send");
                            }
                            else setResizeMessageField(true);
                        }}
                    />
                    <button
                        type="submit"
                        className="message-ctrl-send-btn"><IconSend /></button>
                </div>
            </div>
        </div>
    )
};