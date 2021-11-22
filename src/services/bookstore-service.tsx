import { BookType, SearchType } from "../types";
import { key } from "./key";

export default class BookstoreService {

    _apiBase = 'https://www.googleapis.com/books/v1/volumes?q=';

    _pagination = 30;

    getResource = async (searchTerm: string, sortBy?: string, startAt?: string, category?: string) => {

        const { _apiBase, _pagination } = this;

        const searchTermAdjusted: string = searchTerm.split(' ').join('+');

        const sortedBy = sortBy === 'newest' ? '&orderBy=newest' : '';
        const startIndex = startAt ? `&startIndex=${startAt}` : '';
        const sortByCategory = category !== 'all' ? `+subject:${category}`: '';
        
        const res = await fetch(
            `${_apiBase}${searchTermAdjusted}${sortByCategory}&maxResults=${_pagination}${startIndex}${sortedBy}&printType=books&key=${key}`
        );

        if (!res.ok) {
            throw new Error(`Could not fetch ${searchTerm}` +
                `, recieved ${res.status}`)
        }

        return await res.json();
    };

    getBooks = async (search: SearchType) => {

        const { searchTerm, sortBy, category, startAt } = search;
        const { getResource, _transformBook } = this;

        const res = await getResource(searchTerm, sortBy, startAt, category);
        
        return {
            booksFound: res.totalItems,
            booksLoaded: res.items.map((item: any) => {
                return _transformBook(item);
            })
        };
    };

    _transformBook = (book: any): BookType => {
        return {
            id: book.id,
            authors: book.volumeInfo.authors || [''],
            title: book.volumeInfo.title || '',
            categories: book.volumeInfo.categories || [''],
            description: book.volumeInfo.description || '',
            image: book.volumeInfo.imageLinks.thumbnail || ''
        };
    };
};