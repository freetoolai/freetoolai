"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaMagnifyingGlass, FaBars, FaXmark, FaHouse, FaLayerGroup, FaFire, FaWandMagicSparkles } from 'react-icons/fa6';
import clsx from 'clsx';
import Button from '../ui/Button';
import { tools } from '@/lib/mockData';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const handleSearchSelect = (slug) => {
        setSearchQuery('');
        setIsSearchFocused(false);
        router.push(`/tool/${slug}`);
    };

    const navLinks = [
        { name: 'Home', href: '/', icon: <FaHouse size={16} /> },
        { name: 'Categories', href: '/category/image-ai', icon: <FaLayerGroup size={16} /> },
        { name: 'New Tools', href: '/new', icon: <FaWandMagicSparkles size={16} /> },
        { name: 'Trending', href: '/trending', icon: <FaFire size={16} /> },
    ];

    return (
        <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
            <div className={clsx("container", styles.container)}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>FreeTool<span className={styles.logoHighlight}>AI</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(styles.navLink, pathname === link.href && styles.active)}
                        >
                            <span className={styles.navIcon}>{link.icon}</span>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Search Bar */}
                <div className={styles.searchWrapper} ref={searchRef}>
                    <FaMagnifyingGlass className={styles.searchIcon} size={18} />
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
                    <Button href="/submit-tool" variant="primary" size="small" className={styles.submitBtn}>
                        Submit Tool
                    </Button>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileSearch}>
                        <FaMagnifyingGlass className={styles.searchIcon} size={18} />
                        <input
                            type="text"
                            placeholder="Search tools..."
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                        />
                        {/* Mobile Search Dropdown */}
                        {isSearchFocused && searchResults.length > 0 && (
                            <div className={styles.searchDropdown} style={{ position: 'relative', marginTop: 8 }}>
                                {searchResults.map(result => (
                                    <div
                                        key={result.id}
                                        className={styles.searchItem}
                                        onClick={() => {
                                            handleSearchSelect(result.slug);
                                            setIsMobileMenuOpen(false);
                                        }}
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
