import "../styles/globals.css";

export const metadata = {
  title: 'Lurked Studios',
  description: 'What you seek is hidden.',
  themeColor: '#000000',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon_v4.ico?v=4' },
      { rel: 'icon', url: '/favicon_v4-32x32.png?v=4', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon_v4-16x16.png?v=4', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon_v4-180x180.png?v=4',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
