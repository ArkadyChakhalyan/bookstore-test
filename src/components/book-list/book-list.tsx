import { Loader } from '../loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { BookType, StateType } from '../../types';
import styles from './book-list.module.css';
import { fetchBooksTC, onContinueSearch } from '../../actions/actions';
import BookstoreService from '../../services/bookstore-service';
import { BookListItem } from './book-item/book-list-item';
import { BookPage } from '../book-page/book-page';
import { useState } from 'react';

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

    const [book, setBook] = useState(null)

    if (book) {
        return (
            <BookPage
                book={book}
                goBack={() => setBook(null)} />
        );
    }

    return (
        <div className={styles.page} >
            <p className={styles.text}><b>{booksFound}</b> books found</p>
            <ul className={styles.list} >
                {
                    booksLoaded.map((item: BookType) => {
                        return (
                            <li key={item.id} >
                                <BookListItem
                                    book={item}
                                    setPage={(book: any) => {
                                        setBook(book)
                                    }} />
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