import styles from './question.module.scss';
import classNames from 'classnames';
import {useState} from 'react';
import { Personnalite } from '../personnalite/personnalite';

export interface QuestionProps {
    className?: string;
    answers: string[];
    is_input: boolean;
    question: string;
    callback?: Function;
    points: (Personnalite | undefined)[] | boolean ;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-questions-and-templates
 */
export const Question = ({ className, is_input, answers, question, callback, points }: QuestionProps) => {
    const [input_val, input_val_set] = useState<string>('');
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['question-name']}>{question}</h1>
            {
                is_input ? 
                    <div>
                        <input type="text" onChange={e => input_val_set(e.target.value)} value={input_val} className={styles['question-button']} />
                        <button onClick={()=>{callback!(input_val, 0, points); input_val_set(''); }} >Submit</button> 
                    </div>
                :
                    answers.map((a, i) => (
                            <button key={a} className={styles['question-button']} onClick={()=>{callback!(a, i, points)}}>
                                {a}
                            </button>
                            ))
                    
            }
        </div>
    );
};
