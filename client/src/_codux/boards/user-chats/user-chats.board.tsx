import { createBoard } from '@wixc3/react-board';
import { UserChats } from '../../../Components/ChatUI/user-chats/user-chats';

export default createBoard({
    name: 'UserChats',
    Board: () => <UserChats />,
    isSnippet: true,
});
