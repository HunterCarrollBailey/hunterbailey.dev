"use client";
import React from "react";
import DesktopNavigation from "@/app/components/navigation/DesktopNav";
import MobileNavigation from "@/app/components/navigation/MobileNav";

export default function Header() {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col bg-transparent"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div
        className="top-0 z-10 h-16 pt-6"
        style={{
          position: "var(--header-position)" as React.CSSProperties["position"],
        }}
      >
        <div
          className="top-[var(--header-top,theme(spacing.6))] w-full"
          style={{
            position:
              "var(--header-inner-position)" as React.CSSProperties["position"],
          }}
        >
          <div className="relative flex gap-4">
            <div className="flex flex-1 justify-end md:justify-center">
              <MobileNavigation className="pointer-events-auto md:hidden mr-7" />
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
