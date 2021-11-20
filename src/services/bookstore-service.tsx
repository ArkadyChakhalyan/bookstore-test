import { BookType, SearchType } from "../types";
import { key } from "./key";

export default class BookstoreService {

    _apiBase = 'https://www.googleapis.com/books/v1/volumes?q=';

    _pagination = 30;

    getResource = async (searchTerm: string, sortBy?: string, startAt?: number, category?: string) => {

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

        const res = await this.getResource(searchTerm, sortBy, startAt, category);
        
        return {
            booksFound: res.totalItems,
            booksLoaded: res.items.map(this._transformBook)
        };
    };

    _transformBook = (book: any): BookType => { 
        return {
            id: book.id,
            authors: book.volumeInfo.authors || ['N/a'],
            title: book.volumeInfo.title || 'N/a',
            categories: book.volumeInfo.categories || ['N/a'],
            description: book.volumeInfo.description || 'N/a',
            image: book.volumeInfo.imageLinks.thumbnail || 'N/a'
        };
    };
};