import styles from './question.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { Personnalite } from '../personnalite/personnalite';
import App_module from '../../App.module.scss';

export interface QuestionProps {
    className?: string;
    answers: string[];
    is_input: boolean;
    question: string;
    pattern?: string;
    callback?: Function;
    points: (Personnalite | undefined)[] | boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-questions-and-templates
 */
export const Question = ({
    className,
    is_input,
    answers,
    question,
    callback,
    points,
    pattern,
}: QuestionProps) => {
    const [input_val, input_val_set] = useState<string>('');
    let input :HTMLInputElement | null = null
    return (
        <div className={classNames(className, styles.question)} style={{}}>
            <h3>{question}</h3>
            {is_input ? (
                <div className={styles['input-question-div']}>
                    <input
                        style={{ height: '50px' }}
                        ref={ref => input = ref}
                        type="text"
                        placeholder="Entre ta réponse ici"
                        onChange={(e) => input_val_set(e.target.value)}
                        pattern={pattern}
                        value={input_val}
                        className={styles['input-question']}
                    />
                    <button
                        onClick={() => {
                            console.log(input)
                            if(input && input.matches(':valid') && input.value !== ""){
                                callback!(input_val, 0, points);
                                input_val_set('');
                            }
                            
                        }}
                        className={styles['question-button']}
                    >
                        Submit
                    </button>
                </div>
) : (
                answers.map((a, i) => (
                    <button
                        key={a}
                        className={styles['question-button']}
                        onClick={() => {
                            callback!(a, i, points);
                        }}
                    >
                        {a}
                    </button>
                ))
            )}
        </div>
    );
};
