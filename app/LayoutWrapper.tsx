"use client";
import Navbar from "@/components/Navbar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <Navbar/>
        {children}
      </div>
  );
}