import { tools } from '@/lib/mockData';
import ToolCard from '@/components/ui/ToolCard';
import { Flame } from 'lucide-react';
import styles from '../category/[slug]/page.module.css'; // Reuse category styles

export default function TrendingPage() {
    const trendingTools = tools.filter(t => t.isTrending);

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.iconWrapper} style={{ background: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)' }}>
                    <Flame color="white" size={32} />
                </div>
                <div>
                    <h1 className={styles.title}>Trending Tools</h1>
                    <p className={styles.subtitle}>
                        The most popular AI tools this week based on community clicks.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                {trendingTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </div>
    );
}
