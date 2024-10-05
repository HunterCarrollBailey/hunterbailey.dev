'use client';

import { useState } from 'react';
import SplashScreen from '@/app/components/layout/SplashScreen';
import Header from '@/app/components/layout/Header';

export default function SplashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <>
      <SplashScreen setIsSplashComplete={setIsSplashComplete} />
      <Header />
      <main
        className={`overflow-y-scroll transition transition-opacity duration-1000 ease-out ${
          isSplashComplete ? 'opacity-100' : 'opacity-0'
        }`}
        id="main"
      >
        {children}
      </main>
    </>
  );
}
