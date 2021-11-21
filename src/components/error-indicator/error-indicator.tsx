import { useNavigate } from 'react-router';
import styles from './error-indicator.module.css';

export const ErrorIndicator = () => {

    const history = useNavigate();

    const onClick = () => {
        history('/');
    };

    return (
        <div className={styles.error}>
            <p className={styles.title}>Error!</p>
            <p>Something went wrong, try again!</p>
            <button
                className={styles.button}
                onClick={onClick} >
                Go to homepage
            </button>
        </div>
    );
};