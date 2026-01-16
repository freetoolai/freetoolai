"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bookmark, Search } from 'lucide-react';
import ToolCard from '../../components/ui/ToolCard';
import { tools } from '../../lib/mockData';
import styles from '../page.module.css';

export default function BookmarksPage() {
    const [bookmarkedTools, setBookmarkedTools] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load bookmarks from localStorage
        const saved = JSON.parse(localStorage.getItem('bookmarkedTools') || '[]');

        // Find the full tool objects matching the saved IDs
        const foundTools = tools.filter(t => saved.includes(t.id));
        setBookmarkedTools(foundTools);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="container" style={{ paddingTop: '40px', color: 'white' }}>Loading...</div>;
    }

    return (
        <div className={styles.page}>
            <div className="container">
                <div style={{ paddingTop: '40px', paddingBottom: '20px' }}>
                    <h1 style={{
                        fontSize: '32px',
                        fontWeight: '800',
                        marginBottom: '8px',
                        color: 'var(--color-text-main)'
                    }}>
                        Your Bookmarks
                    </h1>
                    <p style={{ color: 'var(--color-text-dim)' }}>
                        {bookmarkedTools.length} saved tools
                    </p>
                </div>

                {bookmarkedTools.length > 0 ? (
                    <div className={styles.toolsGrid}>
                        {bookmarkedTools.map((tool, index) => (
                            <ToolCard key={tool.id} tool={tool} index={index} />
                        ))}
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '80px 0',
                        backgroundColor: 'var(--color-bg-card)',
                        borderRadius: '20px',
                        border: '1px dashed var(--border-subtle)',
                        marginTop: '20px'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            background: 'var(--color-bg-subtle)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                            color: 'var(--color-text-dim)'
                        }}>
                            <Bookmark size={32} />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-main)', marginBottom: '8px' }}>
                            No bookmarks yet
                        </h3>
                        <p style={{ color: 'var(--color-text-dim)', marginBottom: '32px' }}>
                            Save tools you like to quickly access them later.
                        </p>
                        <Link href="/" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 24px',
                            background: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '10px',
                            fontWeight: '600'
                        }}>
                            <Search size={18} />
                            Browse Tools
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
