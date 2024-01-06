import React from 'react'
import ResizeBox from '../../assets/ResizeBox'
import { Button, Input, ScrollShadow } from '@nextui-org/react';
import { IconMessageCirclePlus } from '@tabler/icons-react'


const UserChatBox: React.FC = () => {

    return (
        <>
            <ResizeBox direction="e"
                min={[300, Infinity]}
                max={[450, Infinity]}
                defaultSize={[350, Infinity]}
            >
                <div className="h-full bg-white rounded-lg flex flex-col">
                    <div className="user-list-search flex items-center gap-2 border-b-2 p-2">
                        <Button isIconOnly color="primary" size="lg"><IconMessageCirclePlus /></Button>
                        <Input placeholder="Search" name="search" variant="faded" color="primary" size="sm" />
                    </div>
                    <div className="user-lists flex-1 overflow-scroll" id='user-chat-list'>
                        <div className="h-full">
                            <ScrollShadow className='h-full w-full p-2'>
                            </ScrollShadow>
                        </div>
                    </div>
                </div>
            </ResizeBox>
            <div className="bg-white h-full flex-1 rounded-lg"></div>
        </>
    )
}

export default UserChatBox;