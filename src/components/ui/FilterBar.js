"use client";

import { useState } from 'react';
import clsx from 'clsx';
import styles from './FilterBar.module.css';

export default function FilterBar({ activeCategory, onCategoryChange, activePrice, onPriceChange }) {
    const categories = ['All', 'Image AI', 'Text AI', 'Video AI', 'Audio AI', 'Code AI', 'Business AI'];
    const pricing = ['All Prices', 'Free', 'Freemium', 'Paid'];

    return (
        <div className={styles.stickyWrapper}>
            <div className="container">
                <div className={styles.filterContent}>
                    <div className={styles.pillsWrapper}>
                        <div className={styles.pillsGroup}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={clsx(styles.pill, activeCategory === cat && styles.active)}
                                    onClick={() => onCategoryChange(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.pillsGroup}>
                            {pricing.map((price) => (
                                <button
                                    key={price}
                                    className={clsx(styles.pill, activePrice === price && styles.active)}
                                    onClick={() => onPriceChange(price)}
                                >
                                    {price}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.controls}>
                        <select className={styles.sortSelect}>
                            <option>Newest First</option>
                            <option>Most Popular</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
