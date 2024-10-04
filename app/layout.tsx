import type { Metadata } from "next";

import "./styles/globals.css";

import Header from "@/app/components/layout/Header";

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
        <Header />
        <main className="overflow-y-scroll">{children}</main>
      </body>
    </html>
  );
}
