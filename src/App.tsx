import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Question } from './components/question/question';
import {useState} from 'react';

function get_question(nb, answers){
    if(nb == 0){
        return {question:"hello", answers:["hey"]}
    }
    else if(nb == 1){
        return {question:"test", answers:["hey"]}
    }
    
    
}

function App() {
    const [question_number, set_question_number] = useState(0);
    const [answers, set_answers] = useState([])

    return (
        <div className={styles.App}>
            <Question {...get_question(question_number, answers)} />
        </div>
    );
}

export default App;
