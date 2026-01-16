"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
    FaTableCellsLarge,
    FaWandMagicSparkles,
    FaBolt,
    FaCirclePlus,
    FaBars,
    FaBookmark
} from 'react-icons/fa6';
import Button from '../ui/Button';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Discover', href: '/', icon: FaTableCellsLarge },
        { name: 'New Tools', href: '/new', icon: FaWandMagicSparkles },
        { name: 'Featured', href: '/featured', icon: FaBolt },
    ];

    return (
        <aside className={styles.sidebar}>
            {/* Logo Area */}
            <div className={styles.logoArea}>
                <Link href="/" className={styles.logo}>
                    <span>FreeTool<span className={styles.logoHighlight}>AI</span></span>
                </Link>
            </div>

            {/* Main Navigation */}
            <nav className={styles.nav}>
                <div className={styles.sectionLabel}>MENU</div>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(styles.navItem, isActive && styles.active)}
                        >
                            <item.icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}

                <div className={styles.sectionLabel} style={{ marginTop: 24 }}>YOUR TOOLS</div>
                <Link href="/bookmarks" className={styles.navItem}>
                    <FaBookmark size={20} />
                    <span>Bookmarks</span>
                </Link>
            </nav>

            {/* Bottom Actions */}
            <div className={styles.footer}>
                <Button href="/submit-tool" variant="primary" className={styles.submitBtn}>
                    <FaCirclePlus size={18} />
                    <span>Submit Tool</span>
                </Button>
            </div>
        </aside>
    );
}
