import { useNavigate } from 'react-router';
import { BookType } from '../../types';
import styles from './book-page.module.css';

type BookPagePropsType = {
    books: BookType[]
    bookId: string
}

export const BookPage = ({ books, bookId }: BookPagePropsType) => {

    const book: BookType = books.find((item) => {
        return item.id === bookId;
    })!;

    const { title, image, categories, authors, description } = book;
    
    const categoryList = categories.join(' / ');
    const authorList = authors.join(' / ');

    const history = useNavigate();

    const onClick = () => {
        history('/');
    };

    return (
        <div className={styles.page} >
            <button
                className={styles.button}
                onClick={onClick} >
                <i className='fas fa-angle-left fa-2x' />
                <p className={styles.buttonText} >back</p>
            </button>
            <div className={styles.left} >
                <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            </div>
            <div className={styles.right} >
                <p className={styles.category} >{categoryList}</p>
                <p className={styles.title} >{title}</p>
                <p className={styles.author} >{authorList}</p>
                <div className={styles.container} >
                    <p className={styles.description} >{description}</p>
                </div>
            </div>
        </div>
    );
};