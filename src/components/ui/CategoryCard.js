import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRight, Image, FileText, Video, Mic2, Code2, BarChart3, Binary, Sparkles } from 'lucide-react';
import styles from './CategoryCard.module.css';

const IconMap = {
    'image-ai': Image,
    'text-ai': FileText,
    'video-ai': Video,
    'audio-ai': Mic2,
    'code-ai': Code2,
    'business-ai': BarChart3,
    'sparkles': Sparkles,
};

export default function CategoryCard({ category }) {
    const IconComponent = IconMap[category.id] || Sparkles;

    return (
        <Link href={`/category/${category.id}`} className={styles.card}>
            <div className={styles.iconWrapper}>
                <IconComponent size={24} className={styles.icon} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{category.name}</h3>
                <span className={styles.count}>{category.count} Tools</span>
            </div>
            <ChevronRight size={18} className={styles.arrow} />
        </Link>
    );
}
