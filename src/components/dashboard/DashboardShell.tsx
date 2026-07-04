"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function DashboardShell({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dark min-h-screen bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_32%),linear-gradient(135deg,rgba(79,70,229,0.12),transparent_42%),linear-gradient(180deg,#020617,#0f172a_55%,#020617)]"
        aria-hidden="true"
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="relative lg:pl-72">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-[1640px] px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
