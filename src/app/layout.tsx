import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { PlayerBar } from "@/features/player/PlayerBar";

export const metadata: Metadata = {
  title: "Wavelength",
  description: "Premium music streaming demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-950 text-white antialiased">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto pb-24">{children}</main>
        </div>
        <PlayerBar />
      </body>
    </html>
  );
}
