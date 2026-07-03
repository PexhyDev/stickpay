"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-primary/60 px-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-panel">
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-xl font-extrabold text-primary">
            {title}
          </h2>
          <Button variant="ghost" className="px-2 py-2" aria-label="Fechar modal" onClick={onClose}>
            <X aria-hidden="true" size={18} />
          </Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
