import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 796,
        windowHeight: 806,
        canvasWidth: 740,
        canvasHeight: 235,
    },
});
