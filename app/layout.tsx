import "../styles/globals.css";
import Head from 'next/head';

export const metadata = {
  title: 'Lurked Studios',
  description: 'What you seek is hidden.',
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon_v4.ico?v=4" />
        <link rel="shortcut icon" href="/favicon_v4.ico?v=4" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_v4-32x32.png?v=4" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_v4-16x16.png?v=4" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_v4-180x180.png?v=4" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
