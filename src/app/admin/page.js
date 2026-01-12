import { stats } from '@/lib/mockData';
import Button from '@/components/ui/Button';
import { Activity, Users, MousePointer, Shield } from 'lucide-react';

export default function AdminPage() {
    // Simple inline styles for the admin mock
    const cardStyle = {
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        padding: '24px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    };

    return (
        <div className="container" style={{ paddingBottom: 80 }}>
            {/* Admin Header */}
            <div style={{ margin: '40px 0', borderBottom: '1px solid var(--border-color)', paddingBottom: 24 }}>
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Admin Dashboard</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Welcome back, Admin</p>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 40 }}>
                <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Total Tools</span>
                        <Shield size={20} color="var(--brand-primary)" />
                    </div>
                    <span style={{ fontSize: 32, fontWeight: 700 }}>{stats.totalTools}</span>
                </div>
                <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Views Today</span>
                        <Activity size={20} color="#10b981" />
                    </div>
                    <span style={{ fontSize: 32, fontWeight: 700 }}>12.5k</span>
                </div>
                <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Pending</span>
                        <Users size={20} color="#f59e0b" />
                    </div>
                    <span style={{ fontSize: 32, fontWeight: 700 }}>4</span>
                </div>
                <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Clicks</span>
                        <MousePointer size={20} color="#3b82f6" />
                    </div>
                    <span style={{ fontSize: 32, fontWeight: 700 }}>8,432</span>
                </div>
            </div>

            {/* Mock Table */}
            <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>Recent Submissions</h3>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', background: 'var(--bg-secondary)', fontSize: 14, color: 'var(--text-secondary)' }}>
                            <th style={{ padding: '16px 24px' }}>Tool Name</th>
                            <th style={{ padding: '16px 24px' }}>Submitter</th>
                            <th style={{ padding: '16px 24px' }}>Date</th>
                            <th style={{ padding: '16px 24px' }}>Status</th>
                            <th style={{ padding: '16px 24px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'PhotoMagic AI', user: 'alex@example.com', date: '2 min ago', status: 'Pending' },
                            { name: 'CopyWriter Pro', user: 'sarah@test.com', date: '1 hour ago', status: 'Pending' },
                            { name: 'CodeGenius', user: 'mike@dev.io', date: '3 hours ago', status: 'Rejected' },
                        ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', fontSize: 14 }}>
                                <td style={{ padding: '16px 24px', fontWeight: 500 }}>{row.name}</td>
                                <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>{row.user}</td>
                                <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>{row.date}</td>
                                <td style={{ padding: '16px 24px' }}>
                                    <span style={{
                                        padding: '4px 8px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                                        background: row.status === 'Pending' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                        color: row.status === 'Pending' ? '#f59e0b' : '#ef4444'
                                    }}>
                                        {row.status}
                                    </span>
                                </td>
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <Button size="small" variant="secondary">Review</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
