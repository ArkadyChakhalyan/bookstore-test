import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router';
import { clearData, clearSearch, fetchBooksTC, onFirstSearch } from '../../actions/actions';
import BookstoreService from '../../services/bookstore-service';
import { StateType } from '../../types';
import { Loader } from '../loader/loader';
import styles from './header.module.css';

const bookstoreService = new BookstoreService();

export const Header = () => {

    const loading = useSelector((state: StateType) => state.loading);
    const booksLoaded = useSelector((state: StateType) => state.books.booksLoaded);

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('relevance');
    const [category, setCategory] = useState('all');
 
    const onSubmit = () => {
 
        const search = {
            searchTerm: searchTerm,
            category: category,
            sortBy: sortBy,
            startAt: 0
        };
        dispatch(clearData());
        dispatch(fetchBooksTC(bookstoreService, search));
        dispatch(onFirstSearch(search));
    };

    const match = useMatch('/:id');

    useEffect(() => {
        if (booksLoaded.length > 0 && !match) {
            onSubmit();
        };
    }, [sortBy, category]);

    useEffect(() => {
        dispatch(clearSearch());
    }, [searchTerm, dispatch]);

    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') onSubmit();
    };

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const onCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const onSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };
    
    const search = loading ? <Loader /> : <i className="fas fa-search" onClick={onSubmit}></i>;

    return (
        <div 
            className={styles.container}
            onKeyPress={onKeyPress} >
            <h1 className={styles.title} >
                Search for books
            </h1>
            <div className={styles.search} >
                <input
                    className={styles.input}
                    onChange={onSearchChange}
                    placeholder='Search' />
                <span className={styles.button} >
                    {search}
                </span>
            </div>
            <div className={styles.sorting} >
                <span className={styles.categories} >
                    <label className={styles.label} >Categories</label>
                    <select
                        className={styles.options}
                        onChange={onCategoryChange} >
                        <option>all</option>
                        <option>art</option>
                        <option>biography</option>
                        <option>computers</option>
                        <option>history</option>
                        <option>medical</option>
                        <option>poetry</option>
                    </select>
                </span>
                <span className={styles.sortby} >
                    <label className={styles.label} >Sorting by</label>
                    <select
                        className={styles.options}
                        onChange={onSortByChange} >
                        <option>relevance</option>
                        <option>newest</option>
                    </select>
                </span>
            </div>
        </div>
    );
};