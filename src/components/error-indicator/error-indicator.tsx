import { useNavigate } from 'react-router';
import styles from './error-indicator.module.css';

type ErrorIndicatorPropsTypes = {
    setError: Function
}

export const ErrorIndicator = ({ setError }: ErrorIndicatorPropsTypes ) => {

    const navigate = useNavigate();

    const onClick = () => {
        setError();
        navigate('/');
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