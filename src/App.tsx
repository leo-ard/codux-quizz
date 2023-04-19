import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Question } from './components/question/question';
import {useState} from 'react';

function get_question(nb, answers){
    if(nb == 0){
        return {question:"Qui est tu ?", answers:["hey", "bonjour", "comment ]a va"], is_input:true}
    }
    else if(nb == 1){
        return {question:"Ta personne préféré", answers:["Ta mère", "Ton père", answers[0]], is_input:false}
    }
    else if(nb == 2){
        return {question:answers[1] + " est la plus cool", answers:["Ta mère", "Ton père", answers[0]], is_input:false}
    }
    
}

function App() {
    const [question_number, set_question_number] = useState(2);
    const [answers, set_answers] = useState(["Tasha", "Ta mère"])

    return (
        <div className={styles.App}>
            <Question 
                {...get_question(question_number, answers)} 
                callback={(e) => {
                    set_question_number(question_number+1);
                }} />
        </div>
    );
}

export default App;
