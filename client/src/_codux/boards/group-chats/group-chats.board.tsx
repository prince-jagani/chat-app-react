import { createBoard } from '@wixc3/react-board';
import { GroupChats } from '../../../Components/ChatUI/group-chats/group-chats';

export default createBoard({
    name: 'GroupChats',
    Board: () => <GroupChats />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5
    }
});
