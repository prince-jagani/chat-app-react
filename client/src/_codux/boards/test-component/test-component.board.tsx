import { createBoard } from '@wixc3/react-board';
import { TestComponent } from '../../../Components/test-component/test-component';

export default createBoard({
    name: 'TestComponent',
    Board: () => <TestComponent />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 183,
        canvasWidth: 474
    }
});
