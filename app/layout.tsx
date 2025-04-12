
import "../styles/globals.css";

export const metadata = {
  title: 'Lurked Studios',
  description: 'What you seek is hidden.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
