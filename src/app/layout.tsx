import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aryan Verma — Software Developer',
  description: 'Software Developer with 2.5+ years of experience building responsive websites, web apps, and SEO-focused digital experiences. Mumbai, India.',
  keywords: ['Aryan Verma', 'Software Developer', 'React', 'Next.js', 'Python', 'Web Developer', 'Mumbai', 'Portfolio'],
  authors: [{ name: 'Aryan Verma' }],
  openGraph: {
    title: 'Aryan Verma — Software Developer',
    description: 'Software Developer with 2.5+ years of experience building responsive websites and web applications.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aryan Verma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Verma — Software Developer',
    description: 'Software Developer with 2.5+ years of experience building responsive websites and web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
