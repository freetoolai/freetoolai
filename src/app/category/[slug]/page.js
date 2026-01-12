import { tools, categories } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ToolCard from '@/components/ui/ToolCard';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = categories.find((c) => c.id === slug);

    if (!category) return { title: 'Category Not Found' };

    return {
        title: `${category.name} - Free AI Tools | freetoolai`,
        description: `Browse the top ${category.count} curated ${category.name} tools. Updated daily to help you find the best AI for your workflow.`,
    };
}

export async function generateStaticParams() {
    return categories.map((cat) => ({
        slug: cat.id,
    }));
}

export default async function CategoryPage({ params }) {
    // Await params for Next.js 15+
    const { slug } = await params;
    const category = categories.find((c) => c.id === slug);

    if (!category) {
        notFound();
    }

    const categoryTools = tools.filter((t) => t.category === category.id);

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.iconWrapper} style={{ background: category.gradient }}>
                    {category.icon}
                </div>
                <div>
                    <h1 className={styles.title}>{category.name}</h1>
                    <p className={styles.subtitle}>
                        Browse the best {category.name} tools. {category.count} tools available.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                {categoryTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
            {categoryTools.length === 0 && (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-text-tertiary)' }}>
                    <p>No tools found in this category yet.</p>
                </div>
            )}
        </div>
    );
}
