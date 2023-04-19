import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Question } from './components/question/question';

function App() {
    return (
        <div className={styles.App}>
            <Question answers={["hello", "world"]} question="une autre question" />
        </div>
    );
}

export default App;
