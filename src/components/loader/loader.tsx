import styles from './loader.module.css';

export const Loader = () => {
    return (
        <div className={styles.outside}>
            <div className={styles.inside}>
                <div />
            </div>
        </div>
    );
};