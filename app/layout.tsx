import "../styles/globals.css";

export const metadata = {
  title: 'Lurked Studios',
  description: 'What you seek is hidden.',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon_v2.ico' },
      { rel: 'icon', url: '/favicon_v2-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon_v2-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon_v2-180x180.png', // 如果你之後要加 iOS icon，可放這
  },
  themeColor: '#000000', // 瀏覽器主題色
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
