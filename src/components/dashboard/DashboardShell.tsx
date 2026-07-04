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
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.1),transparent_30%),linear-gradient(135deg,rgba(79,70,229,0.1),transparent_40%),linear-gradient(180deg,#020617,#0f172a_58%,#020617)]"
        aria-hidden="true"
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="relative lg:pl-72">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-[1640px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
