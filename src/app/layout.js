import './globals.css';
import Script from 'next/script';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
    title: 'freetoolai - Discover AI Tools That Actually Work',
    description: '1,247 AI tools curated and updated daily. Find the perfect tool for your needs.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body suppressHydrationWarning>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
                <Script
                    src="https://s.skimresources.com/js/297317X1784802.skimlinks.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
