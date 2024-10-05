import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import SplashLayout from '@/app/SplashLayout'
import "@/app/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Bailey Carroll",
  description: "Making My Mark - One Line of Code at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="text-slate-50 bg-slate-900 antialiased bg-rose bg-fixed bg-no-repeat bg-center h-full">
        <SplashLayout>{children}</SplashLayout>
        {/* Vercel Analytics */}
        <Analytics />
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-1TGMX650JG" />
        <SpeedInsights />
      </body>
    </html>
  );
}
