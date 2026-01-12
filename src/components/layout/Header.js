"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Zap, Menu, X, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import Button from '../ui/Button';
import { tools } from '@/lib/mockData';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef(null);

    const pathname = usePathname();
    const router = useRouter();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme toggle initialization
    useEffect(() => {
        const initializeTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                setIsDarkMode(true);
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                setIsDarkMode(false);
                document.documentElement.setAttribute('data-theme', 'light');
            }
        };
        initializeTheme();
    }, []);

    // Click outside search to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Search Logic optimized with useMemo
    const searchResults = useMemo(() => {
        if (searchQuery.length <= 1) return [];
        return tools.filter(tool =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5);
    }, [searchQuery]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    const handleSearchSelect = (slug) => {
        setSearchQuery('');
        setSearchResults([]);
        setIsSearchFocused(false);
        router.push(`/tool/${slug}`);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Categories', href: '/category/image-ai' }, // Simplified link for demo
        { name: 'New Tools', href: '/new' },
        { name: 'Trending', href: '/trending' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
            <div className={clsx("container", styles.container)}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.iconWrapper}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2L24.3923 8V20L14 26L3.6077 20V8L14 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M10 9H18M10 14H16M10 19V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className={styles.logoText}>freetoolai</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(styles.navLink, pathname === link.href && styles.active)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Search Bar */}
                <div className={styles.searchWrapper} ref={searchRef}>
                    <Search className={styles.searchIcon} size={18} />
                    <input
                        type="text"
                        placeholder="Search 1,000+ AI tools..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                    />

                    {/* Search Dropdown */}
                    {isSearchFocused && searchResults.length > 0 && (
                        <div className={styles.searchDropdown}>
                            {searchResults.map(result => (
                                <div
                                    key={result.id}
                                    className={styles.searchItem}
                                    onClick={() => handleSearchSelect(result.slug)}
                                >
                                    <img src={result.logo} alt="" className={styles.searchItemLogo} />
                                    <div>
                                        <div className={styles.searchItemName}>{result.name}</div>
                                        <div className={styles.searchItemType}>{result.pricing}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <button onClick={toggleTheme} className={styles.iconButton} aria-label="Toggle Theme">
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <Button href="/submit-tool" variant="primary" size="small" className={styles.submitBtn}>
                        Submit Tool
                    </Button>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className={styles.mobileActions}>
                        <Button href="/submit-tool" variant="primary" className={styles.fullWidthBtn}>
                            Submit Tool
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
