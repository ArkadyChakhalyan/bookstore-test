import { Loader } from '../loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../types';
import styles from './book-list.module.css';
import { fetchBooksTC, onContinueSearch } from '../../actions/actions';
import BookstoreService from '../../services/bookstore-service';
import { BookListItem } from './book-item/book-list-item';

const bookstoreService = new BookstoreService();

export const BookList = () => {

    const loading = useSelector((state: StateType) => state.loading);
    const booksFound = useSelector((state: StateType) => state.books.booksFound);
    const booksLoaded = useSelector((state: StateType) => state.books.booksLoaded);
    const currentSearch = useSelector((state: StateType) => state.currentSearch);

    const dispatch = useDispatch();

    const onClick = () => {

        const search = {
            ...currentSearch,
            startAt: booksLoaded.length.toString()
        };

        dispatch(fetchBooksTC(bookstoreService, search));
        dispatch(onContinueSearch(booksLoaded.length.toString()));
    };

    const loadMore = loading ? <Loader /> :
        (
            <button
                className={styles.button}
                onClick={onClick} >
                Load more
            </button>
        );

    return (
        <div className={styles.page} >
            <p className={styles.text}><b>{booksFound}</b> books found</p>
            <ul className={styles.list} >
                {
                    booksLoaded.map((item) => {
                        return (
                            <li key={item.id}>
                                <BookListItem book={item} />
                            </li>
                        );
                    })
                }
            </ul>
            <div className={styles.load}>
                {booksLoaded.length >= booksFound ? null : loadMore}
            </div>
        </div>
    );
};