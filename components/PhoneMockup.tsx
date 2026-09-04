import type { ReactNode } from "react";

type PhoneMockupProps = {
  variant?: "market" | "cart" | "track";
  className?: string;
};

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-4 text-[9px] font-bold tracking-widest text-obsidian/40">
      <span>9:41</span>
      <span>•••</span>
    </div>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.5rem] border-[7px] border-obsidian bg-cream shadow-2xl">
      {/* Notch */}
      <div className="absolute left-1/2 top-2.5 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-obsidian" />
      <div className="flex h-full flex-col">{children}</div>
    </div>
  );
}

function MarketScreen() {
  const tiles = [
    "bg-brand",
    "bg-cream-deep",
    "bg-ember-soft",
    "bg-brand-soft",
    "bg-cream-deep",
    "bg-ember-soft",
  ];
  return (
    <>
      <StatusBar />
      <div className="px-4 pt-3">
        <div className="flex items-center justify-between">
          <span className="font-display text-[11px] font-black text-obsidian">
            Balogun Market
          </span>
          <span className="h-5 w-5 rounded-full bg-obsidian" />
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-full bg-cream-warm px-3 py-1.5 text-[9px] font-medium text-ink-faint">
          <span className="h-2 w-2 rounded-full bg-ember" /> Search the market…
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 px-4 pb-4">
        {tiles.map((tone, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className={`h-14 rounded-xl ${tone}`} />
            <div className="h-1.5 w-3/4 rounded bg-obsidian/10" />
            <div className="h-1.5 w-1/2 rounded bg-obsidian/10" />
          </div>
        ))}
      </div>
    </>
  );
}

function CartScreen() {
  const rows = ["bg-brand-soft", "bg-cream-deep", "bg-ember-soft"];
  return (
    <>
      <StatusBar />
      <div className="px-4 pt-3">
        <div className="font-display text-[11px] font-black text-obsidian">
          Your cart
        </div>
      </div>
      <div className="mt-3 space-y-2 px-4 pb-4">
        {rows.map((tone, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl bg-cream-warm p-2"
          >
            <div className={`h-8 w-8 rounded-lg ${tone}`} />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-2/3 rounded bg-obsidian/10" />
              <div className="h-1.5 w-1/3 rounded bg-obsidian/10" />
            </div>
            <div className="rounded-md bg-brand px-1.5 py-0.5 text-[9px] font-black text-obsidian">
              ×2
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto px-4 pb-4">
        <div className="rounded-full bg-obsidian py-2 text-center text-[9px] font-bold text-cream">
          Checkout · ₦12,400
        </div>
      </div>
    </>
  );
}

function TrackScreen() {
  const steps = [
    { label: "Packed by vendor", done: true },
    { label: "On the way", done: true },
    { label: "At your door", done: false },
  ];
  return (
    <>
      <StatusBar />
      <div className="px-4 pt-3">
        <div className="font-display text-[11px] font-black text-obsidian">
          Tracking
        </div>
      </div>
      <div className="mt-4 px-4">
        {steps.map((s, i) => (
          <div key={s.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-black ${
                  s.done ? "bg-brand text-obsidian" : "bg-cream-deep text-ink-faint"
                }`}
              >
                {s.done ? "✓" : ""}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-6 w-0.5 ${s.done ? "bg-brand" : "bg-obsidian/10"}`}
                />
              )}
            </div>
            <div className="pb-4">
              <div className="text-[10px] font-bold text-obsidian">{s.label}</div>
              <div className="mt-1 h-1.5 w-16 rounded bg-obsidian/10" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function PhoneMockup({
  variant = "market",
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={className}>
      <Shell>
        {variant === "market" && <MarketScreen />}
        {variant === "cart" && <CartScreen />}
        {variant === "track" && <TrackScreen />}
      </Shell>
    </div>
  );
}
