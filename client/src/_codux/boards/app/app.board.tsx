import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1995,
        canvasHeight: 1080,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
