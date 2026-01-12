import Link from 'next/link';
import { Star, Activity, Bookmark, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool }) {
    // Mock rating array for rendering stars
    const stars = Array(5).fill(0).map((_, i) => (
        <Star
            key={i}
            size={14}
            fill={i < Math.floor(tool.rating) ? "#FBB040" : "transparent"}
            color={i < Math.floor(tool.rating) ? "#FBB040" : "rgba(255,255,255,0.1)"}
            className={clsx(styles.star, i >= Math.floor(tool.rating) && styles.empty)}
        />
    ));

    return (
        <div className={styles.card}>
            <Link href={`/tool/${tool.slug}`} className={styles.cardLink}>
                <div className={styles.header}>
                    <img src={tool.logo} alt={tool.name} className={styles.logo} loading="lazy" />
                    <div className={styles.badges}>
                        <span className={clsx(styles.badge, styles[tool.pricing.toLowerCase()])}>
                            {tool.pricing}
                        </span>
                        {tool.isTrending && (
                            <span className={clsx(styles.badge, styles.trendingBadge)}>🔥 Trending</span>
                        )}
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.name}>{tool.name}</h3>
                        {tool.isVerified && <span className={styles.verifiedCheck} title="Verified">Check</span>}
                    </div>
                    <p className={styles.description}>{tool.shortDescription}</p>

                    <div className={styles.tags}>
                        {tool.tags?.map(tag => (
                            <span key={tag} className={styles.tag}>#{tag}</span>
                        )) || (
                                <>
                                    <span className={styles.tag}>#ai</span>
                                    <span className={styles.tag}>#productivity</span>
                                </>
                            )}
                    </div>
                </div>
            </Link>

            <div className={styles.footer}>
                <div className={styles.actions}>
                    <button className={styles.bookmarkBtn} title="Save Tool">
                        <Bookmark size={16} />
                        <span className={styles.bookmarkText}>{tool.saves || '1.2k'}</span>
                    </button>
                    <a href={tool.website} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
                        Visit Site <ExternalLink size={14} />
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.ratingBox}>
                        <div className={styles.starsRow}>{stars}</div>
                        <span className={styles.ratingValue}>{tool.rating}</span>
                    </div>
                    <div className={styles.viewBox}>
                        <Activity size={14} className={styles.viewIcon} />
                        <span>{tool.views}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
