import styles from './error-indicator.module.css';

export const ErrorIndicator = () => {
    return (
        <div className={styles.error}>
            <p className={styles.title}>Error!</p>
            <p>Something went wrong</p>
        </div>
    );
};