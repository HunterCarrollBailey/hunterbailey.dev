import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunter Bailey",
  description: "Portfolio & Digital Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {/* <!-- Google tag (gtag.js) --> */}
      <GoogleAnalytics gaId="G-1TGMX650JG" />
      <body className={inter.className}>
        <main className="min-h-screen max-h-screen min-w-full max-w-full overflow-scroll bg-slate-900 text-slate-300 bg-rose bg-contain bg-no-repeat bg-center font-text">
          {children}
        </main>
      </body>
    </html>
  );
}
