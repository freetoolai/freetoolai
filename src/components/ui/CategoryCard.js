import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
    return (
        <Link href={`/category/${category.id}`} className={styles.card}>
            <div className={styles.iconWrapper} />
            <div className={styles.content}>
                <div className={styles.name}>{category.name}</div>
                <div className={styles.count}>{category.count} tools</div>
            </div>
            <ChevronRight size={16} className={styles.arrow} />
        </Link>
    );
};

export default CategoryCard;
