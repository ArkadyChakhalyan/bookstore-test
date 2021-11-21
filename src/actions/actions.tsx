import { Dispatch } from "redux";
import { SearchType, ServiceType } from "../types";

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    } as const;
};

const booksLoaded = (newBooks: ServiceType) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    } as const;
};

const booksError = (error: object) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    } as const;
};

const clearData = () => {
    return {
        type: 'CLEAR_DATA'
    } as const;
};

const onFirstSearch = (search: SearchType) => {
    return {
        type: 'ON_FIRST_SEARCH',
        payload: search
    } as const;
};

const onContinueSearch = (startAt: string) => {
    return {
        type: 'ON_CONTINUE_SEARCH',
        payload: startAt
    } as const;
};

const clearSearch = () => {
    return {
        type: 'CLEAR_SEARCH'
    } as const;
};

const fetchBooksTC = (bookstoreService: any, search: SearchType) => {
    return (dispatch: Dispatch) => { 
        dispatch(booksRequested());
        bookstoreService.getBooks(search)
            .then((data: ServiceType) => dispatch(booksLoaded(data)))
            .catch((err: object) => dispatch(booksError(err)));
    };
};
       
export {
    booksRequested,
    booksLoaded,
    booksError,
    fetchBooksTC,
    onFirstSearch,
    onContinueSearch,
    clearSearch,
    clearData
};