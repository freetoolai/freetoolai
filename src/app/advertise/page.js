import styles from './page.module.css';
import { Check } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Advertise with Us | FreeToolAI',
    description: 'Promote your AI tool to thousands of engaged users.'
};

export default function AdvertisePage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Reach Thousands of AI Enthusiasts</h1>
                <p className={styles.subtitle}>
                    Promote your tool to a dedicated audience of developers, creators, and professionals looking for the next big thing in AI.
                </p>
            </div>

            <div className={styles.pricingGrid}>
                {/* Basic Plan */}
                <div className={styles.card}>
                    <h3 className={styles.planName}>Featured Listing</h3>
                    <div className={styles.price}>$49</div>
                    <div className={styles.period}>per week</div>
                    <ul className={styles.features}>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Top of category page</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> "Featured" badge</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Basic analytics</li>
                    </ul>
                    <button className={styles.ctaBtn}>Get Started</button>
                </div>

                {/* Popular Plan */}
                <div className={`${styles.card} ${styles.popularCard}`}>
                    <span className={styles.badge}>Most Popular</span>
                    <h3 className={styles.planName}>Homepage Spotlight</h3>
                    <div className={styles.price}>$149</div>
                    <div className={styles.period}>per week</div>
                    <ul className={styles.features}>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Hero section placement</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Included in newsletter</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Social media shoutout</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Detailed analytics report</li>
                    </ul>
                    <button className={`${styles.ctaBtn} ${styles.primaryBtn}`}>Get Started</button>
                </div>

                {/* Custom Plan */}
                <div className={styles.card}>
                    <h3 className={styles.planName}>Enterprise</h3>
                    <div className={styles.price}>Custom</div>
                    <div className={styles.period}>tailored package</div>
                    <ul className={styles.features}>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Custom banner ads</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Dedicated email blast</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Partner webinar</li>
                        <li className={styles.feature}><Check size={20} className={styles.check} /> Long-term placement</li>
                    </ul>
                    <button className={styles.ctaBtn}>Contact Sales</button>
                </div>
            </div>
        </div>
    );
}
