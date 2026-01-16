"use client";

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import ToolCard from '@/components/ui/ToolCard';
import clsx from 'clsx';
import styles from './page.module.css';

export default function ToolDetailTabs({ tool, alternatives, reviews }) {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div className={styles.tabsContainer}>
            <nav className={styles.tabsNav}>
                {['Overview', 'Reviews', 'Alternatives'].map(tab => (
                    <button
                        key={tab}
                        className={clsx(styles.tab, activeTab === tab && styles.activeTab)}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <div className="animate-fade-in">
                {activeTab === 'Overview' && (
                    <>
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>About {tool.name}</h3>
                            <p className={styles.description}>{tool.description}</p>
                        </div>

                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Key Features</h3>
                            <div className={styles.featuresGrid}>
                                {tool.features?.map((f, i) => (
                                    <div key={i} className={styles.featureItem}>
                                        <Check size={16} className={styles.checkIcon} /> {f}
                                    </div>
                                )) || <p>No features listed.</p>}
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'Reviews' && (
                    <div>
                        <h3 className={styles.sectionTitle}>User Reviews</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 20 }}>
                            Coming soon. This is a placeholder for the reviews section.
                        </p>
                    </div>
                )}

                {activeTab === 'Alternatives' && (
                    <div className={styles.altGrid}>
                        {alternatives.map(t => (
                            <ToolCard key={t.id} tool={t} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
