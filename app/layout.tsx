import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Your Name — Full-Stack Developer", description: "Developer portfolio" };
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const themeInit = `try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>{children}</body>
    </html>
  );
}
