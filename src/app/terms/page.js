import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Terms of Service | FreeToolAI',
    description: 'Terms and conditions for using FreeToolAI.'
};

export default function TermsPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <p className={styles.lastUpdated}>Last updated: January 16, 2026</p>
                </header>

                <div className={styles.content}>
                    <div className={styles.highlight}>
                        By accessing and using FreeToolAI, you agree to be bound by these Terms of Service. Please read them carefully.
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                        <p className={styles.text}>
                            By accessing or using FreeToolAI ("the Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Description of Service</h2>
                        <p className={styles.text}>
                            FreeToolAI is a directory and discovery platform for AI tools. We provide:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Curated listings of AI tools and services</li>
                            <li className={styles.listItem}>Reviews, ratings, and user feedback</li>
                            <li className={styles.listItem}>Search and filtering capabilities</li>
                            <li className={styles.listItem}>Educational content and guides</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. User Responsibilities</h2>
                        <p className={styles.text}>You agree to:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Provide accurate information when submitting tools or content</li>
                            <li className={styles.listItem}>Not submit spam, malicious content, or misleading information</li>
                            <li className={styles.listItem}>Respect intellectual property rights</li>
                            <li className={styles.listItem}>Not attempt to hack, disrupt, or abuse the Service</li>
                            <li className={styles.listItem}>Comply with all applicable laws and regulations</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Tool Submissions</h2>
                        <p className={styles.text}>
                            When you submit a tool to our directory:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>You confirm you have the right to submit the tool information</li>
                            <li className={styles.listItem}>We reserve the right to review, edit, or reject any submission</li>
                            <li className={styles.listItem}>We may remove listings at our discretion</li>
                            <li className={styles.listItem}>You grant us a license to display and promote the submitted content</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Affiliate Links and Monetization</h2>
                        <p className={styles.text}>
                            FreeToolAI may contain affiliate links. When you click on certain links and make purchases, we may receive a commission. This helps us keep the service free.
                        </p>
                        <p className={styles.text}>
                            We clearly disclose affiliate relationships and maintain editorial independence in our reviews and recommendations.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Disclaimer of Warranties</h2>
                        <p className={styles.text}>
                            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Accuracy or completeness of tool information</li>
                            <li className={styles.listItem}>Availability or uptime of the Service</li>
                            <li className={styles.listItem}>Quality or safety of third-party tools</li>
                            <li className={styles.listItem}>Results from using any listed tools</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
                        <p className={styles.text}>
                            FreeToolAI and its operators shall not be liable for any damages arising from:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Use or inability to use the Service</li>
                            <li className={styles.listItem}>Reliance on information provided</li>
                            <li className={styles.listItem}>Third-party tools or services</li>
                            <li className={styles.listItem}>Data loss or security breaches</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
                        <p className={styles.text}>
                            Our Service contains links to third-party websites and tools. We are not responsible for the content, privacy policies, or practices of these external sites. Use them at your own risk.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Intellectual Property</h2>
                        <p className={styles.text}>
                            All content on FreeToolAI, including text, graphics, logos, and software, is owned by or licensed to us and protected by copyright and trademark laws.
                        </p>
                        <p className={styles.text}>
                            You may not reproduce, distribute, or create derivative works without our written permission.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>10. Termination</h2>
                        <p className={styles.text}>
                            We reserve the right to terminate or suspend access to the Service at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the Service.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>11. Changes to Terms</h2>
                        <p className={styles.text}>
                            We may modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>12. Governing Law</h2>
                        <p className={styles.text}>
                            These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>13. Contact Information</h2>
                        <p className={styles.text}>
                            For questions about these Terms, please contact us at:{' '}
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
