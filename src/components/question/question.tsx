import styles from './question.module.scss';
import classNames from 'classnames';

export interface QuestionProps {
    className?: string;
    answers: [string];
    question: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-questions-and-templates
 */
export const Question = ({ className, answers, question }: QuestionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['question-name']}>{question}</h1>
            {answers.map((a) => (
                <button key={a} className={styles['question-button']}>
                    {a}
                </button>
            ))}
        </div>
    );
};
