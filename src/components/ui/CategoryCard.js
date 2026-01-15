import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRight, Palette, Bot, Clapperboard, Headphones, Terminal, Briefcase, Sparkles } from 'lucide-react';
import styles from './CategoryCard.module.css';

const IconMap = {
    'image-ai': Palette,
    'text-ai': Bot,
    'video-ai': Clapperboard,
    'audio-ai': Headphones,
    'code-ai': Terminal,
    'business-ai': Briefcase,
    'sparkles': Sparkles,
};

export default function CategoryCard({ category }) {
    const IconComponent = IconMap[category.id] || Sparkles;

    return (
        <Link href={`/category/${category.id}`} className={styles.card}>
            <div className={styles.iconWrapper} style={{ background: category.gradient }}>
                <IconComponent size={24} className={styles.icon} style={{ color: '#FFF' }} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{category.name}</h3>
                <span className={styles.count}>{category.count} Tools</span>
            </div>
            <ChevronRight size={18} className={styles.arrow} />
        </Link>
    );
}
