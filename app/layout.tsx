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
    <html lang="en">
      <body
        className={`text-slate-50 bg-slate-900 antialiased bg-rose bg-no-repeat bg-center h-screen`}
      >
        <Header />
        <main className="overflow-scroll max-h-[90dvh]">{children}</main>
      </body>
    </html>
  );
}
