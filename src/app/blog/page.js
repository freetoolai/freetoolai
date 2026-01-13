import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Button from '../../components/ui/Button';

export const metadata = {
    title: 'AI Insights Blog',
    description: 'Latest news, tutorials, and insights about the world of AI tools.',
};

export default function BlogPage() {
    return (
        <div className="container" style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '40px' }}>
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: 600
                }}>
                    <Sparkles size={16} /> Coming Soon
                </span>
            </div>

            <h1 style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B4B4B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                AI Insights Blog
            </h1>

            <p style={{
                fontSize: '20px',
                color: '#B4B4B8',
                lineHeight: 1.6,
                marginBottom: '48px'
            }}>
                We're crafting in-depth articles, tutorials, and reviews to help you master the new wave of AI tools. Stay tuned!
            </p>

            <Button href="/" variant="secondary" size="large">
                <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Return Home
            </Button>
        </div>
    );
}
