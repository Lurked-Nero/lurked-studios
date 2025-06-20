import "../styles/globals.css";

export const metadata = {
  title: 'Lurked Studios',
  description: 'What you seek is hidden.',
  themeColor: '#000000',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon_v6.ico?v=6' },
      { rel: 'icon', url: '/favicon_v6-32x32.png?v=6', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon_v6-16x16.png?v=6', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon_v6-180x180.png?v=6',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}