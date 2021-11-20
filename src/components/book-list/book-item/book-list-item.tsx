//@ts-ignore
import { useNavigate } from 'react-router-dom';
import { BookType } from '../../../types';
import styles from './book-list-item.module.css';

type BookListItemPropsType = {
    book: BookType
}

export const BookListItem = ({ book }: BookListItemPropsType) => {

    const { title, categories, authors, image, id } = book;

    const history = useNavigate();

    const onClick = (id: string) => {
        const path = `/${id}`;
        history(path);
    };

    return (
        <div
            className={styles.container}
            onClick={() => onClick(id)} >
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            <div className={styles.info}>
                <p className={styles.category}>
                    {categories[0]}
                </p>
                <p className={styles.title}>
                    {title}
                </p>
                <p className={styles.author}>
                    {authors[0]}
                </p>
            </div>
        </div>
    );
};