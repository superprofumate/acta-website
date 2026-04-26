import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'ACTA — Legislative Impact Intelligence for Tax Consultants',
    template: '%s | ACTA',
  },
  description:
    'ACTA turns legislative changes into client-specific actions, helping tax consultants identify risks, deadlines, and optimization opportunities across their entire portfolio.',
  keywords: ['tax consultant software', 'legislative monitoring', 'fiscal compliance', 'Romanian tax law', 'ANAF', 'AI tax software'],
  openGraph: {
    title: 'ACTA — Legislative Impact Intelligence for Tax Consultants',
    description: 'Turn legislative changes into client-specific actions — automatically, accurately, and at scale.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
