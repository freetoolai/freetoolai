import styles from './page.module.css';
import { Sparkles, Users, Globe } from 'lucide-react';

export const metadata = {
    title: 'About Us | FreeToolAI',
    description: 'We are on a mission to democratize access to AI tools.'
};

export default function AboutPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Empowering Creativity Through AI</h1>
                    <p className={styles.heroSubtitle}>
                        FreeToolAI is the world's largest curated directory of free and freemium AI tools, built to help you find the perfect tool for your next big idea.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>
                            <Sparkles className="text-purple-400" /> Our Mission
                        </h2>
                        <p className={styles.text}>
                            The AI revolution is here, but finding the right tools amidst the noise can be overwhelming.
                            Our mission is simple: to curate, verify, and categorize the best AI tools available, making them accessible to everyone—from solo creators to enterprise teams.
                        </p>
                        <p className={styles.text}>
                            We believe that AI should be an enabler, not a barrier. That's why we focus heavily on tools that offer free tiers, ensuring that innovation isn't limited by budget.
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>1,200+</span>
                            <span className={styles.statLabel}>Tools Indexed</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>50k+</span>
                            <span className={styles.statLabel}>Monthly Users</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>100%</span>
                            <span className={styles.statLabel}>Verified</span>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>
                            <Globe className="text-blue-400" /> Global Community
                        </h2>
                        <p className={styles.text}>
                            We are more than just a directory. We are a community of developers, designers, and prompt engineers sharing insights and reviews.
                            Every tool on our platform is community-vetted to ensure quality and reliability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
