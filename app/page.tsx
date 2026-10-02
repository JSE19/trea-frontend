import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-lg">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Discover
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Upcoming Experiences
            </h1>
          </div>
          <button className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/5">
            View all
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

              <button className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700">
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
    </main>
  );
}
