import { createBoard } from '@wixc3/react-board';
import { Question } from '../../../components/question/question';

export default createBoard({
    name: 'Question',
    Board: () => (
        <Question
            answers={['13h00', 'quinze-heure-vingth-quatre', 'Lorem ipsum amet']}
            question="What time is it ?"
        />
    ),
    environmentProps: {
        windowWidth: 842,
        canvasWidth: 399,
        canvasHeight: 331,
    },
});
