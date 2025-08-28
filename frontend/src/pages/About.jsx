// src/pages/About.jsx
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40">
        <GridGlow />
        <div className="relative z-10 grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Two Teams. One Night. <span className="text-indigo-400">Winner Claims Glory.</span>
            </h1>
            <p className="max-w-prose text-zinc-300">
              New players are auto-assigned to <span className="font-medium">Crimson</span> or{' '}
              <span className="font-medium">Obsidian</span>. Until <span className="font-medium">Battle Night</span>,
              your team collaboratively invests in your Warrior across three tracks: Defense, Attack, and Lore.
              Your allocations visibly power up the Warrior in real time. On Battle Night… the clash is settled.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/battle"
                className="rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold shadow-lg shadow-indigo-600/25 hover:bg-indigo-500"
              >
                Enter the Arena
              </Link>
              <a
                href="#how"
                className="rounded-xl border border-zinc-700 px-5 py-2.5 font-semibold text-zinc-200 hover:bg-zinc-900"
              >
                How it Works
              </a>
            </div>
            <p className="text-xs text-zinc-500">
              On resolution: 50% of the losing pool is rewarded to winners; 50% is burned on-chain.
            </p>
          </div>

          {/* Warrior cards preview */}
          <div className="grid gap-4 sm:grid-cols-2">
            <WarriorCard name="Crimson" accent="from-rose-500/40 to-pink-500/20" blip="bg-rose-400" />
            <WarriorCard name="Obsidian" accent="from-zinc-700/50 to-sky-400/20" blip="bg-sky-400" />
          </div>
        </div>
      </section>

      {/* Three Tracks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Invest in Power</h2>
        <p className="max-w-prose text-zinc-300">
          Every token you contribute strengthens your team’s Warrior. Choose your mix—fortify armor, sharpen damage, or
          weave mystic fate.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <TrackCard
            title="Defense & Armor"
            desc="Shields, plating, resistances. Keep your Warrior standing when the arena erupts."
            ring="ring-rose-400/30"
            glow="shadow-rose-500/20"
          />
          <TrackCard
            title="Attack & Weaponry"
            desc="Damage, crit, ferocity. Turn every opening into a decisive strike."
            ring="ring-indigo-400/30"
            glow="shadow-indigo-500/20"
          />
          <TrackCard
            title="Lore & Mystic"
            desc="Arcana, chants, fate. Bend probability—and the crowd—to your will."
            ring="ring-sky-400/30"
            glow="shadow-sky-500/20"
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="space-y-8">
        <h2 className="text-2xl font-semibold">How it Works</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          <Step n="1" title="Auto-Assign">
            Join and you’re placed on <b>Crimson</b> or <b>Obsidian</b>. No lobbies, no friction.
          </Step>
          <Step n="2" title="Invest Together">
            Allocate tokens to <b>Defense</b>, <b>Attack</b>, or <b>Lore</b>. Watch the Warrior evolve.
          </Step>
          <Step n="3" title="Battle Night">
            Warriors clash. <b>Winners receive 50%</b> of the opposing pool; <b>50% burns</b> forever.
          </Step>
        </ol>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-sm text-zinc-300">
          <p className="mb-1 font-medium">Fair Play & Transparency</p>
          <p>
            Funds lock in a hold-box smart contract until resolution. The battle sim and rewards are auditable.
            Tokenomics come later—this is the shell MVP.
          </p>
        </div>
        <div className="pt-2">
          <Link
            to="/battle"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 font-semibold text-zinc-900 hover:bg-white"
          >
            Open Battle Page <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

/* ---------- tiny UI pieces for About ---------- */

function GridGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          'radial-gradient(600px 300px at 20% 10%, rgba(99,102,241,0.20), transparent 60%), radial-gradient(500px 300px at 80% 20%, rgba(244,63,94,0.15), transparent 60%)',
      }}
    />
  )
}

function WarriorCard({ name, accent, blip }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-2xl`} />
      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${blip} shadow-lg`} />
          <span className="text-sm uppercase tracking-wide text-zinc-400">Team</span>
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="mt-4 h-28 w-full rounded-xl border border-zinc-800 bg-zinc-950/60" />
        <p className="mt-3 text-xs text-zinc-500">Live warrior preview reacts as your team invests.</p>
      </div>
    </div>
  )
}

function TrackCard({ title, desc, ring, glow }) {
  return (
    <div className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 ring-1 ${ring} shadow-lg ${glow}`}>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-zinc-300">{desc}</p>
    </div>
  )
}

function Step({ n, title, children }) {
  return (
    <li className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-800 text-sm font-semibold">{n}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-zinc-300">{children}</p>
    </li>
  )
}
