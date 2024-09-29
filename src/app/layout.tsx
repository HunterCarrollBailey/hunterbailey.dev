import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import {Header} from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bailey Carroll",
  description: "Portfolio & Digital Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <title>{metadata["title"] as String}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {/* <!-- Google tag (gtag.js) --> */}
      <GoogleAnalytics gaId="G-1TGMX650JG" />
      <body className={inter.className + 'flex h-full bg-slate-900 text-slate-300 bg-rose bg-contain bg-no-repeat bg-center'}>
        <main className="h-full overflow-scroll font-text">
            <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
