import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Shabnam Beiraghian — Full-Stack Developer',
  description: 'Full-stack developer based in Vancouver. Building thoughtful web experiences with React, Next.js, and Node.js.',
  keywords: ['full-stack developer', 'Vancouver', 'React', 'Next.js', 'web development'],
  openGraph: {
    title: 'Shabnam Beiraghian — Full-Stack Developer',
    description: 'Full-stack developer based in Vancouver.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://dew-rho-ten.vercel.app/embed.js"
          data-biz="beiraghian"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
