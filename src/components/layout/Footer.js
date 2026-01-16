"use client";

import Link from 'next/link';
import { Twitter, Github, Linkedin, Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.mainGrid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}><Sparkles size={20} fill="currentColor" /></div>
                            <span>FreeTool<span style={{ color: 'var(--color-primary)' }}>AI</span></span>
                        </Link>
                        <p className={styles.description}>
                            Discover the best AI tools to supercharge your workflow. Curated daily for quality and free access.
                        </p>
                        <p className={styles.disclosure}>
                            Advertiser Disclosure: We may receive compensation when you click some links on our site. This keeps our content free.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.colTitle}>Categories</h4>
                        <ul className={styles.links}>
                            <li><Link href="/category/image-ai">Image Generators</Link></li>
                            <li><Link href="/category/text-ai">Text Writers</Link></li>
                            <li><Link href="/category/video-ai">Video Creators</Link></li>
                            <li><Link href="/category/code-ai">Coding Assistants</Link></li>
                            <li><Link href="/category/audio-ai">Voice & Music</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkGroup}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul className={styles.links}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/submit-tool">Submit a Tool</Link></li>
                            <li><Link href="/advertise">Advertise</Link></li>
                            <li><Link href="/editorial-guidelines">Guidelines</Link></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className={styles.connectCol}>
                        <h4 className={styles.colTitle}>Connect</h4>
                        <div className={styles.socialGrid}>
                            <Link href="#" className={styles.socialLink}><Twitter size={20} /></Link>
                            <Link href="#" className={styles.socialLink}><Linkedin size={20} /></Link>
                            <Link href="#" className={styles.socialLink}><Instagram size={20} /></Link>
                            <Link href="#" className={styles.socialLink}><Youtube size={20} /></Link>
                        </div>
                        <div className={styles.newsletter}>
                            <span className={styles.newsletterLabel}>Stay Updated</span>
                            <div className={styles.newsletterInputWrapper}>
                                <input placeholder="Enter your email" className={styles.newsletterInput} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>© {currentYear} freetoolai. All rights reserved.</div>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
