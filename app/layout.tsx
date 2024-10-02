import type { Metadata } from "next";

import "./styles/globals.css";

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
      <body className={`text-slate-50 bg-slate-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
