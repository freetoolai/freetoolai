import ToolCard from '../../components/ui/ToolCard';
import { tools } from '../../lib/mockData';
import styles from '../page.module.css'; // Reusing main page styles for grid

export const metadata = {
    title: 'Featured AI Tools - FreeToolAI',
    description: 'Hand-picked selection of the best and most popular AI tools.',
};

export default function FeaturedPage() {
    // For manual simulation, let's just pick the first 8 tools as "Featured" if no 'featured' flag exists
    // But ideally we should filter by tool.featured === true
    const featuredTools = tools.filter(t => t.featured).length > 0
        ? tools.filter(t => t.featured)
        : tools.slice(0, 8);

    return (
        <div className={styles.page}>
            <div className="container">
                <div style={{ paddingTop: '40px', paddingBottom: '20px' }}>
                    <h1 style={{
                        fontSize: '32px',
                        fontWeight: '800',
                        marginBottom: '8px',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Featured Tools
                    </h1>
                    <p style={{ color: 'var(--color-text-dim)' }}>
                        Curated selection of high-quality AI tools you shouldn't miss.
                    </p>
                </div>

                <div className={styles.toolsGrid}>
                    {featuredTools.map((tool, index) => (
                        <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
