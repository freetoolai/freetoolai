import { tools } from '@/lib/mockData';
import ToolCard from '@/components/ui/ToolCard';
import { Clock } from 'lucide-react';
import styles from '../category/[slug]/page.module.css'; // Reuse category styles

export default function NewToolsPage() {
    // Mock sorting by date (just taking slice for now)
    const newTools = tools.slice(0, 8);

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.iconWrapper} style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
                    <Clock color="white" size={32} />
                </div>
                <div>
                    <h1 className={styles.title}>New AI Tools</h1>
                    <p className={styles.subtitle}>
                        Discover the latest AI tools added this week. Updated daily.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                {newTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </div>
    );
}
