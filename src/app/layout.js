import './globals.css';
import Script from 'next/script';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ErrorBoundary from '../components/ui/ErrorBoundary';

export const metadata = {
    title: 'freetoolai - Discover AI Tools That Actually Work',
    description: '1,247 AI tools curated and updated daily. Find the perfect tool for your needs.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* ... head ... */}
            <body suppressHydrationWarning>
                <ErrorBoundary>
                    <div style={{ display: 'flex', minHeight: '100vh' }}>
                        <Sidebar />
                        <main style={{ flex: 1, position: 'relative', overflowY: 'auto', height: '100vh' }}>
                            <Header />
                            {children}
                            <Footer />
                        </main>
                    </div>
                </ErrorBoundary>
                <Script
                    src="https://s.skimresources.com/js/297317X1784802.skimlinks.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
