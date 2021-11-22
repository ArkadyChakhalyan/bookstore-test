import { useSelector } from "react-redux";
import { StateType } from "../../types";
import { BookList } from "../book-list/book-list";
import { Header } from "../header/header";
import { Loader } from "../loader/loader";
import styles from './app.module.css';

export const App = () => {

    const booksLoaded = useSelector((state: StateType) => state.books.booksLoaded);
    const loading = useSelector((state: StateType) => state.loading);
    const error = useSelector((state: StateType) => state.error);

    const bookList = booksLoaded.length > 0 ?
        <BookList />
        : loading ? <Loader />
            : error ?
                <p className={styles.start}>We couldn't find anything, try again!</p>
                : <p className={styles.start}>Start searching for the book!</p>;

    return (
        <div className={styles.app}>
            <Header />
            {bookList}
        </div>
    );
};

