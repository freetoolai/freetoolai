import Link from 'next/link';
import { Twitter, Github, Globe, Mail, Linkedin, Instagram, Facebook, Youtube, Play, Shield, User, LogOut } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: Brand & Disclosure */}
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2L24.3923 8V20L14 26L3.6077 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M10 9H18M10 14H16M10 19V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span>freetoolai</span>
                        </Link>
                        <p className={styles.disclosure}>
                            Advertiser Disclosure: freetoolai.com is committed to rigorous editorial standards to provide our users with accurate and helpful content. To keep our site free, we may receive compensation when you click some links on our site.
                        </p>
                    </div>

                    {/* Column 2: Categories */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Categories</h3>
                        <ul className={styles.links}>
                            <li><Link href="/category/productivity">Productivity Tools</Link></li>
                            <li><Link href="/category/image-ai">Image Generators</Link></li>
                            <li><Link href="/category/text-ai">Text Generators</Link></li>
                            <li><Link href="/category/video-ai">Video Tools</Link></li>
                            <li><Link href="/category/art-generators">Art Generators</Link></li>
                            <li><Link href="/category/audio-ai">Audio Generators</Link></li>
                            <li><Link href="/all">All AI Tools</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Resources</h3>
                        <ul className={styles.links}>
                            <li><Link href="/resources/art">Best AI Art Generators</Link></li>
                            <li><Link href="/resources/image">Best AI Image Generators</Link></li>
                            <li><Link href="/resources/chatbots">Best AI Chatbots</Link></li>
                            <li><Link href="/resources/text">Best AI Text Generators</Link></li>
                            <li><Link href="/resources/3d">Best AI 3D Generators</Link></li>
                            <li><Link href="/all-resources">All Resources</Link></li>
                            <li><Link href="/skill-leap">Skill Leap</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Company</h3>
                        <ul className={styles.links}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/advertise">Advertise</Link></li>
                            <li><Link href="/submit-tool">Submit a Tool</Link></li>
                            <li><Link href="/request-feature">Request a Feature</Link></li>
                            <li><Link href="/update-tool">Update a Tool</Link></li>
                            <li><Link href="/editorial-guidelines">Editorial Guidelines</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: User & Social */}
                    <div className={styles.column}>
                        <div className={styles.userControls}>
                            <Link href="/profile" className={styles.profileBtn}>
                                <div className={styles.avatar}>
                                    <span>A</span>
                                    <span className={styles.badge}>5</span>
                                </div>
                                <span>Profile</span>
                            </Link>
                            <button
                                className={styles.logoutBtn}
                                onClick={() => alert('Logged out successfully (Simulator)')}
                            >
                                Logout
                            </button>
                        </div>

                        <div className={styles.socialGrid}>
                            <Link href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={20} /></Link>
                            <Link href="#" className={styles.socialLink} aria-label="X"><Twitter size={20} /></Link>
                            <Link href="#" className={styles.socialLink} aria-label="YouTube"><Youtube size={20} /></Link>
                            <Link href="#" className={styles.socialLink} aria-label="TikTok"><Play size={20} /></Link>
                            <Link href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></Link>
                            <Link href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomLinks}>
                        <span>© {currentYear} freetoolai LLC. All rights reserved.</span>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
