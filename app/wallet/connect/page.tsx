"use client";

import { Modal } from "@/components/Modal";
import { WalletConnect } from "@/components/WalletConnect";
import { useState } from "react";

export default function WalletConnectPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="min-h-screen bg-[#131313] px-4 py-10 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#1b1b1b] p-6">
        <h1 className="text-2xl font-semibold">Wallet connect modal preview</h1>
        <p className="mt-2 text-sm text-zinc-300">
          This page exists only as a preview for the reusable modal UI.
        </p>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Connect Stellar Wallet"
        description="Connect your wallet to sign on-chain registrations, hold cryptographic event tickets, and unlock attendee perks."
      >
        <WalletConnect />
      </Modal>
    </main>
  );
}
