import { createBoard } from '@wixc3/react-board';
import { Question } from '../../../components/question/question';
import Question_module from '../../../components/question/question.module.scss';

export default createBoard({
    name: 'Question',
    Board: () => (
        <Question
            answers={['13h00', 'quinze-heure-vingth-quatre', 'Lorem ipsum amet']}
            question="What time is it ?"
            is_input={false}
            callback={(e: string) => e}
            points={false}
            className={Question_module.question}
            pattern=".*"
        />
    ),
    environmentProps: {
        windowWidth: 956,
        canvasWidth: 849,
        canvasHeight: 131,
    },
});
