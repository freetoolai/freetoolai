import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Privacy Policy | FreeToolAI',
    description: 'Our commitment to protecting your privacy and data.'
};

export default function PrivacyPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last updated: January 16, 2026</p>
                </header>

                <div className={styles.content}>
                    <div className={styles.highlight}>
                        Your privacy is important to us. This Privacy Policy explains how FreeToolAI collects, uses, and protects your personal information.
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>

                        <h3 className={styles.subsectionTitle}>Information You Provide</h3>
                        <p className={styles.text}>
                            When you use our services, we may collect information you provide directly, including:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Email address (for newsletter subscriptions)</li>
                            <li className={styles.listItem}>Tool submissions (name, URL, description)</li>
                            <li className={styles.listItem}>Contact form messages</li>
                            <li className={styles.listItem}>Bookmark and preference data (stored locally)</li>
                        </ul>

                        <h3 className={styles.subsectionTitle}>Automatically Collected Information</h3>
                        <p className={styles.text}>
                            We automatically collect certain information when you visit our website:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Browser type and version</li>
                            <li className={styles.listItem}>Device information</li>
                            <li className={styles.listItem}>IP address and location data</li>
                            <li className={styles.listItem}>Pages visited and time spent</li>
                            <li className={styles.listItem}>Referral sources</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                        <p className={styles.text}>We use the collected information to:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Provide and improve our services</li>
                            <li className={styles.listItem}>Send newsletters and updates (with your consent)</li>
                            <li className={styles.listItem}>Respond to your inquiries and support requests</li>
                            <li className={styles.listItem}>Analyze website usage and optimize user experience</li>
                            <li className={styles.listItem}>Prevent fraud and ensure security</li>
                            <li className={styles.listItem}>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Cookies and Tracking</h2>
                        <p className={styles.text}>
                            We use cookies and similar technologies to enhance your browsing experience. These include:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                            <li className={styles.listItem}><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                            <li className={styles.listItem}><strong>Preference Cookies:</strong> Remember your settings (theme, language)</li>
                        </ul>
                        <p className={styles.text}>
                            You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Third-Party Services</h2>
                        <p className={styles.text}>
                            We use third-party services that may collect information:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Analytics:</strong> Google Analytics for usage statistics</li>
                            <li className={styles.listItem}><strong>Affiliate Links:</strong> Skimlinks for monetization</li>
                            <li className={styles.listItem}><strong>Hosting:</strong> Vercel for website hosting</li>
                        </ul>
                        <p className={styles.text}>
                            These services have their own privacy policies governing their use of your information.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Data Security</h2>
                        <p className={styles.text}>
                            We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Your Rights</h2>
                        <p className={styles.text}>You have the right to:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Access your personal data</li>
                            <li className={styles.listItem}>Request correction of inaccurate data</li>
                            <li className={styles.listItem}>Request deletion of your data</li>
                            <li className={styles.listItem}>Opt-out of marketing communications</li>
                            <li className={styles.listItem}>Object to data processing</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Children's Privacy</h2>
                        <p className={styles.text}>
                            Our service is not directed to individuals under 13. We do not knowingly collect personal information from children.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
                        <p className={styles.text}>
                            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated "Last updated" date.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Contact Us</h2>
                        <p className={styles.text}>
                            If you have questions about this Privacy Policy, please contact us at:{' '}
                            <Link href="/contact" className={styles.contactLink}>
                                Contact Page
                            </Link>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
