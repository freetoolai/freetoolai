"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaChartLine, FaBookmark, FaArrowUpRightFromSquare, FaShare } from 'react-icons/fa6';
import clsx from 'clsx';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [bookmarkCount, setBookmarkCount] = useState(tool.saves || 2400);

    // Load bookmark state from localStorage
    useEffect(() => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedTools') || '[]');
        setIsBookmarked(bookmarks.includes(tool.slug));
    }, [tool.slug]);

    // Handle bookmark toggle
    const handleBookmark = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedTools') || '[]');

        if (isBookmarked) {
            // Remove bookmark
            const updated = bookmarks.filter(slug => slug !== tool.slug);
            localStorage.setItem('bookmarkedTools', JSON.stringify(updated));
            setIsBookmarked(false);
            setBookmarkCount(prev => Math.max(0, prev - 1));
        } else {
            // Add bookmark
            bookmarks.push(tool.slug);
            localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarks));
            setIsBookmarked(true);
            setBookmarkCount(prev => prev + 1);
        }
    };

    // Handle share
    const handleShare = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const shareData = {
            title: tool.name,
            text: tool.shortDescription,
            url: `${window.location.origin}/tool/${tool.slug}`
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(shareData.url);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.log('Share failed:', err);
        }
    };

    const rating = tool.rating || 0;

    return (
        <div className={styles.card}>
            <Link href={`/tool/${tool.slug}`} className={styles.cardLink}>
                {/* Header: Logo & Badges */}
                <div className={styles.header}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src={tool.logo}
                            alt={tool.name}
                            className={styles.logo}
                            width={48}
                            height={48}
                            unoptimized // Since we are using external mock URLs or to prevent domain config issues for now
                        />
                    </div>
                    <div className={styles.badges}>
                        {tool.isTrending && (
                            <span className={clsx(styles.badge, styles.trendingBadge)}>
                                🔥 Trending
                            </span>
                        )}
                        <span className={clsx(styles.badge, styles[tool.pricing?.toLowerCase() || 'free'])}>
                            {tool.pricing}
                        </span>
                    </div>
                </div>

                {/* Content: Title & Desc */}
                <div className={styles.content}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.name}>{tool.name}</h3>
                        {tool.isVerified && <div className={styles.verifiedDot} title="Verified" />}
                    </div>
                    <p className={styles.description}>{tool.shortDescription}</p>

                    <div className={styles.categories}>
                        {tool.tags?.slice(0, 3).map(tag => (
                            <span key={tag} className={styles.categoryTag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </Link>

            {/* Footer: Actions & Stats */}
            <div className={styles.footer}>
                <div className={styles.stats}>
                    <div className={styles.rating}>
                        <FaStar size={14} fill="#F59E0B" color="#F59E0B" />
                        <span>{tool.rating}</span>
                    </div>
                    <div className={styles.separator} />
                    <div className={styles.views}>
                        <FaChartLine size={12} />
                        <span>{tool.views || '1.2k'}</span>
                    </div>
                </div>

                <div className={styles.actions}>
                    {/* Visit / Affiliate Link */}
                    <a
                        href={tool.affiliateLink || tool.website}
                        target="_blank"
                        rel={tool.affiliateLink ? "sponsored nofollow" : "noopener noreferrer"}
                        className={styles.visitBtn}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Visit <FaArrowUpRightFromSquare size={12} />
                    </a>

                    <button
                        className={clsx(styles.saveBtn, isBookmarked && styles.saved)}
                        onClick={handleBookmark}
                        title={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
                    >
                        <FaBookmark size={14} />
                        <span>{(bookmarkCount / 1000).toFixed(1)}k Saves</span>
                    </button>
                    <button
                        className={styles.shareBtn}
                        onClick={handleShare}
                        title="Share this tool"
                    >
                        <FaShare size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
