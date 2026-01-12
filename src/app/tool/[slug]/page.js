import { tools, categories } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    ExternalLink, Share2, Bookmark, Check, Zap, Play, FileText
} from 'lucide-react';
import Button from '@/components/ui/Button';
import ToolDetailTabs from './ToolDetailTabs';
import clsx from 'clsx';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug);

    if (!tool) return { title: 'Tool Not Found' };

    return {
        title: `${tool.name} - ${tool.shortDescription} | freetoolai`,
        description: tool.description,
    };
}

export async function generateStaticParams() {
    return tools.map((tool) => ({
        slug: tool.slug,
    }));
}

export default async function ToolPage({ params }) {
    // Await params for Next.js 15+ 
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug);

    if (!tool) {
        notFound();
    }

    const category = categories.find(c => c.id === tool.category);
    const alternatives = tools.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 4);

    // Mock Reviews
    const reviews = [
        { id: 1, user: 'Austin L.', rating: 5, date: '01/10/2026', text: 'Great even if you don\'t pay for premium, all you get is faster times and GPT-4.' },
        { id: 2, user: 'Nico C.', rating: 3, date: '01/08/2026', text: 'Honestly this is an overrated chatbot. It\'s good but not amazing for specialized tasks.' },
        { id: 3, user: 'Vivek V.', rating: 5, date: '01/05/2026', text: 'Absolutely worth the $20/mo I\'m paying. Works great as a general purpose AI tool.' }
    ];

    return (
        <div className="container">
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <Link href="/">Home</Link> / <Link href={`/category/${tool.category}`}>{category?.name || 'Category'}</Link> / <span>{tool.name}</span>
            </div>

            <div className={styles.layout}>
                {/* Main Content */}
                <div className={styles.main}>
                    {/* Header */}
                    <div className={styles.header}>
                        <img src={tool.logo} alt={tool.name} className={styles.logo} />
                        <div className={styles.headerInfo}>
                            <div className={styles.titleRow}>
                                <h1 className={styles.title}>{tool.name}</h1>
                                <div className={styles.verifiedBadge}>
                                    <Check size={14} /> Verified
                                </div>
                            </div>
                            <p className={styles.tagline}>{tool.shortDescription}</p>

                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <strong>AI Categories:</strong>
                                    <Link href={`/category/${tool.category}`} style={{ color: '#3B82F6' }}>{category?.name}</Link>
                                </div>
                                <div className={styles.metaItem}>
                                    <strong>Pricing Model:</strong>
                                    <span>{tool.pricing}, {tool.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Button className={styles.bookmarkBtn} variant="secondary" size="large">
                            <Bookmark size={18} style={{ marginRight: 8 }} /> {tool.saves || '6068'}
                        </Button>
                        <Button href={tool.website} target="_blank" variant="primary" size="large">
                            Visit Site <ExternalLink size={18} style={{ marginLeft: 8 }} />
                        </Button>
                        <Button variant="ghost" size="medium">
                            <Share2 size={18} />
                        </Button>
                    </div>

                    {/* Screenshot Placeholder */}
                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ width: '100%', height: '300px', background: 'var(--color-bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-tertiary)' }}>
                            Tool Interface Screenshot ({tool.name})
                        </div>
                    </div>

                    {/* Interactive Tabs Section */}
                    <ToolDetailTabs
                        tool={tool}
                        category={category}
                        alternatives={alternatives}
                        reviews={reviews}
                    />
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.masteryCard}>
                        <h3 className={styles.masteryTitle}>Unlock AI Mastery</h3>
                        <ul className={styles.masteryList}>
                            <li className={styles.masteryItem}><Zap size={16} /> Instant Access to 20+ Premium AI Courses</li>
                            <li className={styles.masteryItem}><Play size={16} /> 500+ In-Depth Training Videos</li>
                            <li className={styles.masteryItem}><FileText size={16} /> 5500+ Expert-Crafted Prompts</li>
                        </ul>
                        <Button variant="primary" style={{ background: 'white', color: '#3B82F6', width: '100%' }}>
                            Start Learning For Free
                        </Button>
                    </div>

                    <div className={clsx(styles.sidebarCard, styles.stickySidebar)}>
                        <h3 className={styles.sidebarTitle}>Tool Quick Facts</h3>
                        <div className={styles.infoRow}>
                            <span>Pricing model</span>
                            <strong>{tool.pricing}, {tool.price}</strong>
                        </div>
                        <div className={styles.infoRow}>
                            <span>Category</span>
                            <strong>{category?.name}</strong>
                        </div>
                        <div className={styles.infoRow}>
                            <span>Added</span>
                            <strong>March 2024</strong>
                        </div>

                        <div style={{ marginTop: '24px' }}>
                            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Trending Alternatives</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {alternatives.slice(0, 3).map(t => (
                                    <Link href={`/tool/${t.slug}`} key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src={t.logo} alt="" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
                                        <span style={{ fontSize: '13px', fontWeight: '600' }}>{t.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
