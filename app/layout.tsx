
import "../styles/globals.css";

export const metadata = {
  title: "Lurked Studios",
  description: "Redefining Modern Streetwear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
