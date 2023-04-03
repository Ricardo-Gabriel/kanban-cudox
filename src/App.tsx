import styles from './App.module.scss';
import { Card } from './components/card/card';

function App() {
    return (
        <div className={styles.App}>
            <ul>
                <li>
                    <Card />
                </li>
                <li>
                    <Card drag>{undefined}</Card>
                </li>
                <li></li>
            </ul>
        </div>
    );
}

export default App;
