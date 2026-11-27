import type { Metadata, Viewport } from "next";
import "./globals.css";

<<<<<<< HEAD
export const metadata: Metadata = {
  title: "Mohan.exe",
  description: "Developer portfolio",
};
=======
export const metadata: Metadata = { title: "Your Name — Full-Stack Developer", description: "Developer portfolio" };
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const themeInit = `try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`;

<<<<<<< HEAD
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
=======
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
      <body>{children}</body>
    </html>
  );
}
