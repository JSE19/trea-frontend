"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Modal } from "@/components/Modal";

const wallets = [
  { name: "Freighter Wallet", badge: "Recommended", type: "browser extension & mobile" },
  { name: "Albedo", badge: null, type: "web-based Stellar signing" },
  { name: "xBull Wallet", badge: null, type: "cross-platform Stellar wallet" },
  { name: "Lobstr", badge: null, type: "mobile wallet with QR connect" },
];

export default function Home() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(wallets[0].name);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-lg space-y-6">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Discover
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Upcoming Experiences
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setIsWalletModalOpen(true)}
            className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
          >
            Connect wallet
          </button>
        </div>

        <Card
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAx_i3H4XkedRxS4t3UKmMjiq8Ir7UhgCqxF9g-8ByZXz1WERh85Lk79422StBtI7cxt_Ox3Rzbk_hVQVMnoQOC4pb0-qC9HMc40Z3d3hEBzaJw1jemur83PZyh0I7SxpINdmbEqtz3F1r0FGwRTZNHpOIMv-nHpDNBh43cxrOXy8uoZLOzCO0sZuEZfT8R2sQd1RyJ_IVOEm2nblFR8xzSj-y33YjHM2eWYSCf6LcDXBQqZCGShDPg"
          imageAlt="Luxury rooftop event"
          title="Stellar Meridian Night Afterparty"
          metadata={
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-300">
              <span className="rounded-md bg-zinc-800/90 px-2 py-1">Oct 13, 2025</span>
              <span className="rounded-md bg-rose-500/15 px-2 py-1 text-rose-300">
                VIP Access
              </span>
            </div>
          }
          action={
            <div className="flex items-center justify-between gap-3 pt-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                  Ticket Price
                </p>
                <p className="mt-1 text-2xl font-semibold text-rose-300">25 XLM</p>
              </div>

              <button
                type="button"
                onClick={() => setIsWalletModalOpen(true)}
                className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Get Pass
              </button>
            </div>
          }
        >
          <p className="leading-6 text-zinc-300">
            A high-fidelity bass experience with international headline DJs, open ledger bar,
            and NFT guest credentials.
          </p>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Capacity</span>
              <span className="font-medium text-zinc-200">320 / 400 Registered</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-700">
              <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-rose-500 to-red-400" />
            </div>
          </div>
        </Card>
      </div>

      <Modal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        title="Connect Stellar Wallet"
        description="Connect your wallet to sign on-chain registrations, hold cryptographic event tickets, and unlock attendee perks."
      >
        <div className="space-y-3" role="radiogroup" aria-label="Stellar wallet providers">
          {wallets.map((wallet) => {
            const active = wallet.name === selectedWallet;

            return (
              <button
                key={wallet.name}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSelectedWallet(wallet.name)}
                className={[
                  "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition",
                  active
                    ? "border-rose-400/60 bg-[#2a2a2a]"
                    : "border-transparent bg-[#262626] hover:bg-[#2d2d2d]",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#101010] text-lg font-semibold text-zinc-200">
                    {wallet.name.slice(0, 1)}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-lg font-semibold text-white">{wallet.name}</span>
                      {wallet.badge ? (
                        <span className="rounded-full bg-rose-500/15 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] text-rose-300">
                          {wallet.badge}
                        </span>
                      ) : null}
                    </div>
                    <span className="block truncate text-sm text-zinc-400">{wallet.type}</span>
                  </div>
                </div>

                <span
                  className={[
                    "inline-flex h-5 w-5 items-center justify-center rounded-full border",
                    active ? "border-rose-400 bg-rose-400" : "border-zinc-500 bg-transparent",
                  ].join(" ")}
                >
                  <span className="h-2 w-2 rounded-full bg-[#1b1b1b]" />
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-lg border border-white/10 bg-[#121212] p-3 text-sm text-zinc-300">
          By connecting, you agree to Trea&apos;s Terms and Stellar network gas fees (~0.00001 XLM).
        </div>

        <button
          type="button"
          onClick={() => setIsWalletModalOpen(false)}
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-rose-400 px-4 py-3 text-base font-semibold text-[#2a0000] transition hover:bg-rose-300"
        >
          Connect {selectedWallet}
        </button>
      </Modal>
    </main>
  );
}
