import styles from './question.module.scss';
import classNames from 'classnames';

export interface QuestionProps {
    className?: string;
    answers: [string];
    is_input: boolean;
    question: string;
    callback: Function;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-questions-and-templates
 */
export const Question = ({ className, is_input, answers, question, callback }: QuestionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['question-name']}>{question}</h1>
            {
                is_input ? 
                    <div>
                        <input type="text" className={styles['question-button']} />
                        <button>Submit</button> 
                    </div>
                :
                    answers.map((a) => (
                            <button key={a} className={styles['question-button']} onClick={()=>{callback(a)}}>
                                {a}
                            </button>
                            ))
                    
            }
        </div>
    );
};
