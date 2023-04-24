import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import '98.css';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 782,
        canvasHeight: 311,
    },
});
