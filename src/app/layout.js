import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      <head>
        {/* Set theme before first paint — defaults to dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
