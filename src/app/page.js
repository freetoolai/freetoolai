"use client";

import { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Sparkles, Search, ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import Link from 'next/link';
import ToolCard from '../components/ui/ToolCard';
import CategoryCard from '../components/ui/CategoryCard';
import FilterBar from '../components/ui/FilterBar';
import Button from '../components/ui/Button';
import { tools, categories } from '../lib/mockData';
import styles from './page.module.css';

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [activePrice, setActivePrice] = useState('All Prices');

    const featuredTools = tools.filter(t => t.isFeatured);

    // Filtering Logic
    const filteredTools = useMemo(() => {
        return tools.filter(tool => {
            const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

            const catMapping = {
                'image ai': 'image-ai',
                'text ai': 'text-ai',
                'video ai': 'video-ai',
                'audio-ai': 'audio-ai',
                'audio ai': 'audio-ai',
                'code ai': 'code-ai',
                'business ai': 'business-ai'
            };
            const targetCatId = catMapping[activeCategory.toLowerCase()];
            const matchesCategory = activeCategory === 'All' || tool.category === targetCatId;

            const matchesPrice = activePrice === 'All Prices' || tool.pricing === activePrice;

            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [searchQuery, activeCategory, activePrice]);

    const latestTools = filteredTools.slice(0, 12);
    const trendingTools = tools.filter(t => t.isTrending);

    // Carousel Auto-scroll
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % featuredTools.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [featuredTools.length]);

    return (
        <div className={styles.page}>

            {/* 1. HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <Sparkles size={14} /> 1,247 tools curated and updated daily
                    </div>
                    <h1 className={styles.heroTitle}>
                        Discover AI Tools That <br />Actually Work
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Stop wasting time searching. We curate the best AI tools, updated every day, to help you build faster and work smarter.
                    </p>

                    {/* Large Hero Search */}
                    <div className={styles.heroSearch}>
                        <Search className={styles.heroSearchIcon} size={24} />
                        <input
                            type="text"
                            placeholder="Search over 1,000+ AI tools..."
                            className={styles.heroSearchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button
                            className={styles.heroSearchBtn}
                            onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Search
                        </Button>
                    </div>

                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}>
                            <span className={styles.statValue}>1,247</span>
                            <span className={styles.statLabel}>AI Tools</span>
                        </div>
                        <div className={styles.heroStat}>
                            <span className={styles.statValue}>47</span>
                            <span className={styles.statLabel}>Categories</span>
                        </div>
                        <div className={styles.heroStat}>
                            <span className={styles.statValue}>100%</span>
                            <span className={styles.statLabel}>Free to Browse</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FEATURED CAROUSEL */}
            <section className={styles.featuredSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Featured This Week</h2>
                        <div className={styles.carouselNav}>
                            <button className={styles.navBtn} onClick={() => setActiveSlide((prev) => (prev - 1 + featuredTools.length) % featuredTools.length)}><ChevronLeft /></button>
                            <button className={styles.navBtn} onClick={() => setActiveSlide((prev) => (prev + 1) % featuredTools.length)}><ChevronRight /></button>
                        </div>
                    </div>

                    <div className={styles.carouselWrapper}>
                        <div
                            className={styles.carouselTrack}
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {featuredTools.map(tool => (
                                <div key={tool.id} className={styles.carouselSlide}>
                                    <ToolCard tool={tool} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.carouselDots}>
                        {featuredTools.map((_, i) => (
                            <button
                                key={i}
                                className={clsx(styles.dot, activeSlide === i && styles.dotActive)}
                                onClick={() => setActiveSlide(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FILTER BAR */}
            <FilterBar
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                activePrice={activePrice}
                onPriceChange={setActivePrice}
            />

            {/* 4. LATEST TOOLS / RESULTS */}
            <section className={styles.section} id="results">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            {(searchQuery || activeCategory !== 'All' || activePrice !== 'All Prices') ? 'Search Results' : 'Just Added'}
                        </h2>
                        <Link href="/new" className={styles.viewAll}>View All <ArrowRight size={16} /></Link>
                    </div>
                    <div className={styles.toolsGrid}>
                        {latestTools.map(tool => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                        {latestTools.length === 0 && (
                            <div className={styles.noResults}>
                                <h3>No tools found matching your criteria.</h3>
                                <p>Try clearing your filters or searching for something else.</p>
                                <Button variant="secondary" onClick={() => { setSearchQuery(''); setActiveCategory('All'); setActivePrice('All Prices'); }}>
                                    Clear All Filters
                                </Button>
                            </div>
                        )}
                    </div>

                    {latestTools.length > 0 && !searchQuery && activeCategory === 'All' && (
                        <div className={styles.loadMoreWrapper}>
                            <Button variant="secondary" size="large">Load More Tools</Button>
                        </div>
                    )}
                </div>
            </section>

            {/* 5. TRENDING SECTION */}
            <section className={styles.trendingSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Trending Now <Flame size={24} color="#f5576c" /></h2>
                    </div>
                    <div className={styles.toolsGrid}>
                        {trendingTools.slice(0, 4).map(tool => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CATEGORIES GRID */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Browse by Category</h2>
                    </div>
                    <div className={styles.categoriesGrid}>
                        {categories.map(cat => (
                            <CategoryCard key={cat.id} category={cat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. NEWSLETTER */}
            <section className={styles.newsletterSection}>
                <div className="container">
                    <div className={styles.newsletterCard}>
                        <h2 className={styles.newsletterTitle}>Get Weekly AI Updates</h2>
                        <p className={styles.newsletterText}>Join 15,000+ subscribers getting the best new tools in their inbox.</p>
                        <div className={styles.newsletterForm}>
                            <input type="email" placeholder="Enter your email address" className={styles.newsletterInput} />
                            <Button variant="primary" size="large">Subscribe Free</Button>
                        </div>
                        <p className={styles.privacyNote}>We respect your inbox. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

function clsx(...args) {
    return args.filter(Boolean).join(' ');
}
