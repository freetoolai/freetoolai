import { tools, categories } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Bookmark, Check, Share2, Star } from 'lucide-react';
import ToolIcon from '@/components/ui/ToolIcon';
import Image from 'next/image';
import ToolDetailTabs from './ToolDetailTabs';
import styles from './page.module.css';

export default async function ToolPage({ params }) {
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug);

    if (!tool) notFound();

    const category = categories.find(c => c.id === tool.category);
    const alternatives = tools.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 4);

    return (
        <div className={styles.pageWrapper}>
            {/* HERO SECTION */}
            <div className={styles.heroWrapper}>
                <div className="container">
                    {/* Breadcrumb */}
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href={`/category/${tool.category}`}>{category?.name || 'Category'}</Link> / <span>{tool.name}</span>
                    </div>

                    <div className={styles.hero}>
                        <div className={styles.logoWrapper}>
                            <ToolIcon
                                src={tool.logo}
                                name={tool.name}
                                category={tool.category}
                                size={120}
                            />
                        </div>
                        <div className={styles.headerInfo}>
                            <h1 className={styles.title}>
                                {tool.name}
                                {tool.isVerified && <span className={styles.verifiedBadge}><Check size={14} /> Verified</span>}
                            </h1>
                            <p className={styles.tagline}>{tool.shortDescription}</p>

                            <div className={styles.actions}>
                                <a href={tool.website} target="_blank" rel="noopener" className={styles.visitBtn}>
                                    Visit Website <ExternalLink size={18} />
                                </a>
                                <button className={styles.bookmarkBtn}>
                                    <Bookmark size={18} /> {tool.saves || '2.4k'} Saves
                                </button>
                                <button className={styles.bookmarkBtn} style={{ padding: '0 12px' }}>
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container">
                <div className={styles.layout}>
                    <main className={styles.mainContent}>
                        <div className={styles.glassPanel}>
                            <div className={styles.screenshot}>
                                {tool.screenshot ? (
                                    <Image
                                        src={tool.screenshot}
                                        alt={`${tool.name} Interface`}
                                        width={800}
                                        height={500}
                                        layout="responsive"
                                        className={styles.screenshotImg}
                                    />
                                ) : (
                                    <div className={styles.previewPlaceholder}>
                                        <div className={styles.placeholderIcon}><ExternalLink size={32} /></div>
                                        <span>Click "Visit Website" to see {tool.name} in action</span>
                                    </div>
                                )}
                            </div>
                            <ToolDetailTabs tool={tool} alternatives={alternatives} />
                        </div>
                    </main>

                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Tool Stats</h3>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Pricing</span>
                                <span className={styles.infoValue}>{tool.pricing}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Rating</span>
                                <span className={styles.infoValue} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <Star size={14} fill="#FBB040" color="#FBB040" /> {tool.rating}
                                </span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Category</span>
                                <Link href={`/category/${tool.category}`} style={{ color: 'var(--color-primary)' }}>
                                    {category?.name}
                                </Link>
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Similar Tools</h3>
                            <div className={styles.altList}>
                                {alternatives.map(alt => (
                                    <Link key={alt.id} href={`/tool/${alt.slug}`} className={styles.altItem}>
                                        <ToolIcon
                                            src={alt.logo}
                                            name={alt.name}
                                            category={alt.category}
                                            size={40}
                                        />
                                        <div>
                                            <span className={styles.altName}>{alt.name}</span>
                                            <span className={styles.altCat}>{alt.pricing}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
