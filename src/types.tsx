import { booksError, booksLoaded, booksRequested, clearData, clearSearch, onContinueSearch, onFirstSearch } from "./actions/actions";

export type ServiceType = {
    booksFound: number
    booksLoaded: Array<BookType>
}

export type BookType = {
    id: string
    title: string
    authors: string[]
    categories: string[]
    description: string
    image: string
}

export type SearchType = {
    searchTerm: string
    category: string
    sortBy: string
    startAt: number
}

export type StateType = {
    books: {
        booksFound: number
        booksLoaded: Array<BookType>
    }
    currentSearch: SearchType
    loading: boolean
    error: null | object
}

export type ActionTypes = ReturnType<typeof booksRequested>
    | ReturnType<typeof booksLoaded>
    | ReturnType<typeof booksError>
    | ReturnType<typeof onFirstSearch>
    | ReturnType<typeof onContinueSearch>
    | ReturnType<typeof clearSearch>
    | ReturnType<typeof clearData>

