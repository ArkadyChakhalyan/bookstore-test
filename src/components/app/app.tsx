import { useSelector } from "react-redux";
import { RouteObject, useMatch, useRoutes } from "react-router";
import { StateType } from "../../types";
import { BookList } from "../book-list/book-list";
import { BookPage } from "../book-page/book-page";
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

    const match = useMatch('/:id');
    const id: string = match?.params.id ? match?.params.id : '';

    const routes: RouteObject[] = [ 
        {
            path: '/',
            element: bookList
        },
        {
            path: '/:id',
            element: <BookPage 
                books={booksLoaded}
                bookId={id} />
        }
    ];

    let elements = useRoutes(routes);

    return (
        <div className={styles.app}>
            <Header />
            {elements}
        </div>
    );
};