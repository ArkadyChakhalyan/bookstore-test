import { BookType } from '../../types';
import styles from './book-page.module.css';

type BookPagePropsType = {
    book: BookType
    goBack: Function
}

export const BookPage = ({ book, goBack }: BookPagePropsType) => {

    window.scrollTo(0,0);

    const { title, image, categories, authors, description } = book;
    
    const categoryList = categories.join(' / ');
    const authorList = authors.join(' / ');

    return (
        <div className={styles.page} >
            <button
                className={styles.button}
                onClick={() => goBack()} >
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