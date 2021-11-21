import { StateType, ActionTypes, ServiceType, SearchType } from "../types";

const initialState: StateType = {
    books: {
        booksFound: 0,
        booksLoaded: []
    },
    currentSearch: {
        searchTerm: '',
        category: 'all',
        sortBy: 'relevance',
        startAt: '0'
    },
    loading: false,
    error: null
}

export const reducer = (state: StateType | undefined = initialState, action: ActionTypes): StateType => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return onBooksLoaded(state, action.payload);
        case 'FETCH_BOOKS_FAILURE':
            return onFailure(state, action.payload);
        case 'ON_FIRST_SEARCH':
            return onFirstSearch(state, action.payload);
        case 'ON_CONTINUE_SEARCH':
            return onContinueSearch(state, action.payload);
        case 'CLEAR_SEARCH':
            return onClearSearch(state);
        case 'CLEAR_DATA':
            return onClearData(state);
        default:
            return state;
    }
};

const onBooksLoaded = (state: StateType, payload: ServiceType) => {
    
    const { books } = state;

    const newBooks = [
        ...books.booksLoaded,
        ...payload.booksLoaded
    ]

    return {
        ...state,
        books: {
            booksFound: payload.booksFound,
            booksLoaded: newBooks
        },
        loading: false,
        error: null
    }
};

const onFailure = (state: StateType, payload: object) => {
    return {
        ...state,
        loading: false,
        error: payload
    };
};

const onFirstSearch = (state: StateType, payload: SearchType) => {
    return {
        ...state,
        currentSearch: payload
    };
};

const onContinueSearch = (state: StateType, payload: string) => {
    return {
        ...state,
        currentSearch: {
            ...state.currentSearch,
            startAt: payload
        }
    };
};

const onClearSearch = (state: StateType) => {
    return {
        ...state,
        currentSearch: {
            searchTerm: '',
            category: 'all',
            sortBy: 'relevance',
            startAt: '0'
        }
    };
};

const onClearData = (state: StateType) => {
    return {
        ...state,
        books: {
            booksFound: 0,
            booksLoaded: []
        }
    };
};
