import styles from './page.module.css';
import { ShieldCheck, UserCheck, MessageSquare } from 'lucide-react';

export const metadata = {
    title: 'Editorial Guidelines | FreeToolAI',
    description: 'How we review and verify AI tools on our platform.'
};

export default function EditorialGuidelinesPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Editorial Guidelines</h1>
                    <p className={styles.date}>Last updated: January 2026</p>
                </header>

                <div className={styles.content}>
                    <div className={styles.callout}>
                        "Trust is our currency. We don't just list tools; we verify them."
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}><ShieldCheck size={24} className="text-blue-500" /> Verification Process</h2>
                        <p className={styles.text}>
                            Every tool submitted to FreeToolAI undergoes a rigorous manual review process. We check for:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Functionality:</strong> Does the tool actually do what it claims?</li>
                            <li className={styles.listItem}><strong>Safety:</strong> Is the website secure and free of malware?</li>
                            <li className={styles.listItem}><strong>Hidden Costs:</strong> Are "free" features truly free, or locked behind a paywall after one use?</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}><UserCheck size={24} className="text-green-500" /> User Reviews</h2>
                        <p className={styles.text}>
                            We believe in the power of community. While we curate the initial list, user ratings and reviews play a massive role in ranking.
                            We have a zero-tolerance policy for fake reviews.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}><MessageSquare size={24} className="text-purple-500" /> Correction Policy</h2>
                        <p className={styles.text}>
                            AI moves fast. If a tool changes its pricing model or shuts down, we aim to update our listing within 48 hours of notification.
                            Users can report inaccuracies directly from the tool page.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
