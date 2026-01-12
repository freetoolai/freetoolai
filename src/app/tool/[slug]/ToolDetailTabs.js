"use client";

import { useState } from 'react';
import {
    Check, X, Zap, Play, FileText, Star
} from 'lucide-react';
import Button from '@/components/ui/Button';
import ToolCard from '@/components/ui/ToolCard';
import clsx from 'clsx';
import styles from './page.module.css';

export default function ToolDetailTabs({ tool, category, alternatives, reviews }) {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div className={styles.tabsContainer}>
            {/* Tabs */}
            <nav className={styles.tabs}>
                {['Overview', 'Reviews', 'Alternatives'].map(tab => (
                    <button
                        key={tab}
                        className={clsx(styles.tab, activeTab === tab && styles.activeTab)}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === 'Overview' && `What is ${tool.name}?`}
                        {tab === 'Reviews' && `${tool.name} Reviews`}
                        {tab === 'Alternatives' && `${tool.name} alternatives`}
                    </button>
                ))}
            </nav>

            {/* Overview Content */}
            {activeTab === 'Overview' && (
                <div className="animate-fade-in">
                    <div className={styles.section}>
                        <p className={styles.description}>{tool.description}</p>
                    </div>

                    <div className={styles.prosConsGrid}>
                        <div className={styles.list}>
                            <h3 className={clsx(styles.listTitle, styles.proTitle)}><Check size={20} /> Pros</h3>
                            <div className={styles.listItem}><Check size={16} className={styles.checkIcon} /> Enhanced intelligence with latest models</div>
                            <div className={styles.listItem}><Check size={16} className={styles.checkIcon} /> Vast integration ecosystem</div>
                            <div className={styles.listItem}><Check size={16} className={styles.checkIcon} /> multi-modal: text, voice, images</div>
                        </div>
                        <div className={styles.list}>
                            <h3 className={clsx(styles.listTitle, styles.conTitle)}><X size={20} /> Cons</h3>
                            <div className={styles.listItem}><X size={16} className={styles.xIcon} /> Occasional inaccuracies and hallucinations</div>
                            <div className={styles.listItem}><X size={16} className={styles.xIcon} /> Free tier can be slow during peak hours</div>
                            <div className={styles.listItem}><X size={16} className={styles.xIcon} /> Learning curve for advanced prompt mode</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Key Features</h3>
                        <div className={styles.features}>
                            {tool.features.map((f, i) => (
                                <div key={i} className={styles.featureItem}>
                                    <div className={styles.checkIcon}><Check size={14} /></div>
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Who is Using {tool.name}?</h3>
                        <ul className={styles.bulletList}>
                            <li className={styles.bulletItem}><strong>Freelancers & Content Creators:</strong> For drafting, editing, research, and image generation.</li>
                            <li className={styles.bulletItem}><strong>Software Engineers & Data Analysts:</strong> For coding, debugging, data interpretation, and automation.</li>
                            <li className={styles.bulletItem}><strong>Researchers & Academics:</strong> For literature reviews, structured study, and data synthesis.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Pricing</h3>
                        <ul className={styles.bulletList}>
                            <li className={styles.bulletItem}><strong>Free Tier:</strong> $0 per month; includes limited access and basic tools.</li>
                            <li className={styles.bulletItem}><strong>Standard:</strong> $20 per month; full access to latest AI models.</li>
                            <li className={styles.bulletItem}><strong>Enterprise:</strong> Custom pricing for teams and advanced security.</li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Reviews Content */}
            {activeTab === 'Reviews' && (
                <div className="animate-fade-in">
                    <div className={styles.reviewSummary}>
                        <div className={styles.scoreColumn}>
                            <span className={styles.scoreBig}>{tool.rating}</span>
                            <span className={styles.scoreInfo}>from 120 reviews</span>
                        </div>
                        <div className={styles.distributionColumn}>
                            {[5, 4, 3, 2, 1].map(star => (
                                <div key={star} className={styles.distRow}>
                                    <span>{star} stars</span>
                                    <div className={styles.distBar}>
                                        <div className={styles.distFill} style={{ width: `${star * 15}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.reviewHeader}>
                        <h3 className={styles.sectionTitle}>Individual Reviews</h3>
                        <Button variant="secondary" size="small">Write a review</Button>
                    </div>

                    <div className={styles.reviewsGrid}>
                        {reviews.map(r => (
                            <div key={r.id} className={styles.reviewCard}>
                                <div className={styles.reviewUser}>
                                    <div className={styles.userAvatar} />
                                    <div>
                                        <div className={styles.userName}>{r.user}</div>
                                        <div className={styles.reviewDate}>{r.date}</div>
                                    </div>
                                </div>
                                <p className={styles.reviewText}>{r.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Alternatives Content */}
            {activeTab === 'Alternatives' && (
                <div className={styles.catGrid}>
                    {alternatives.map(t => (
                        <ToolCard key={t.id} tool={t} />
                    ))}
                </div>
            )}
        </div>
    );
}
