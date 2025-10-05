// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Next.js App Router Setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
