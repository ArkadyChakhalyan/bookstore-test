import { BookType } from '../../../types';
import styles from './book-list-item.module.css';

type BookListItemPropsType = {
    book: BookType,
    setPage: Function
}

export const BookListItem = ({ book, setPage }: BookListItemPropsType) => {

    const { title, categories, authors, image } = book;

    const onClick = () => {
        setPage(book);
    };

    const authorList = authors.join(' / ');

    return (
        <div
            className={styles.container}
            onClick={() => onClick()} >
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            <div className={styles.info}>
                <p className={styles.category}>
                    {categories[0]}
                </p>
                <p className={styles.title}>
                    {title}
                </p>
                <p className={styles.author}>
                    {authorList}
                </p>
            </div>
        </div>
    );
};