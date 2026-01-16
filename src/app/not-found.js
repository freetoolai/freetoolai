export default function NotFound() {
    return (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '72px', fontWeight: '800', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>404</h1>
            <p style={{ fontSize: '18px', color: '#94A3B8', marginTop: '16px' }}>Page not found</p>
        </div>
    )
}
