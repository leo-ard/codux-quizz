import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Question } from './components/question/question';

function App() {
    return (
        <div className={styles.App}>
            <Question />
        </div>
    );
}

export default App;
