// src/pages/Battle.jsx
import { useEffect, useMemo, useState } from 'react'

// --- Constants (JS only; no TypeScript) ---
const TEAMS = ['Crimson', 'Obsidian']

// Simple mock team assignment for demo.
// TODO: Replace with deterministic assignment from connected wallet (e.g., hash(address) % 2)
function useAssignedTeam() {
  const [seed] = useState(() => Math.random())
  const team = seed > 0.5 ? TEAMS[0] : TEAMS[1]
  return team
}

// Countdown to a target ISO date/time
function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, target - now)
  const totalSeconds = Math.floor(diff / 1000)
  const d = Math.floor(totalSeconds / 86400)
  const h = Math.floor((totalSeconds % 86400) / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return { d, h, m, s, done: diff <= 0 }
}

export default function Battle() {
  // Sample battle date (UTC). Change this to your scheduled "battle night".
  // TODO: Make this configurable in app state/admin panel.
  const battleISO = '2025-09-15T01:00:00Z'
  const { d, h, m, s, done } = useCountdown(battleISO)

  const assignedTeam = useAssignedTeam()

  // Demo slider state representing pre-battle investments
  const [defense, setDefense] = useState(20)
  const [attack, setAttack] = useState(20)
  const [lore, setLore] = useState(20)

  const total = defense + attack + lore
  const capped = Math.min(total, 300) // purely visual cap for demo

  return (
    <section className="space-y-6">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Battle</h1>
          <p className="text-zinc-400">
            Your team: <span className="font-semibold">{assignedTeam}</span>
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2">
          {!done ? (
            <p className="font-medium">
              Battle Night in {d}d {h}h {m}m {s}s
            </p>
          ) : (
            <p className="font-semibold text-lime-400">BATTLE LIVE</p>
          )}
        </div>
      </header>

      {/* Main: Warrior preview + Invest controls */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Warrior Preview */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <h2 className="mb-4 text-xl font-semibold">Your Warrior</h2>
          <WarriorPreview team={assignedTeam} defense={defense} attack={attack} lore={lore} />
        </div>

        {/* Investment Panel (demo only) */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <h2 className="mb-4 text-xl font-semibold">Invest</h2>

          <Track
            label="Defense & Armor"
            value={defense}
            onChange={setDefense}
            hint="Fortify shields and plating."
          />
          <Track
            label="Attack & Weaponry"
            value={attack}
            onChange={setAttack}
            hint="Sharpen blades and boost damage."
          />
          <Track
            label="Lore & Mystic"
            value={lore}
            onChange={setLore}
            hint="Arcana, chants, and fate."
          />

          <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
            <span>Total allocation (demo):</span>
            <span className="font-semibold text-zinc-200">{capped}</span>
          </div>

          <button
            className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-2 font-semibold hover:bg-indigo-500"
            onClick={() => {
              // TODO: Replace with wallet + on-chain lockbox call
              console.log('INVEST SUBMIT', { defense, attack, lore, team: assignedTeam })
              alert('Demo only: this would open wallet + send your investment to the lockbox.')
            }}
            disabled={done} // lock when battle is live
          >
            {done ? 'Investing Closed' : 'Invest (Demo)'}
          </button>

          <p className="mt-3 text-xs text-zinc-500">
            Funds will be held in a lockbox smart contract until the battle resolves.
          </p>
        </div>
      </div>

      {/* Battle Visualizer placeholder */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
        <h2 className="mb-4 text-xl font-semibold">Battle Visualizer</h2>
        {!done ? (
          <p className="text-zinc-400">Battle not live yet — come back on Battle Night.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <BattleCard team="Crimson" />
            <BattleCard team="Obsidian" />
          </div>
        )}
      </div>

      {/* Integration TODOs */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300">
        <p className="mb-2 font-semibold">Next Up (Integration TODOs)</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Plug in Solana wallet adapter (Phantom, etc.).</li>
          <li>Create lockbox smart contract (invest, finalize, distribute, burn).</li>
          <li>Deterministic team assignment from wallet address.</li>
          <li>On-chain reads to reflect live “power levels” and preview.</li>
          <li>Deterministic/seeded battle sim driven by power allocation.</li>
        </ul>
      </div>
    </section>
  )
}

/* ----------------- Subcomponents ----------------- */

function Track({ label, value, onChange, hint }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        <span className="text-xs text-zinc-400">{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="mt-2 w-full accent-indigo-500"
      />
      <div className="mt-1 text-xs text-zinc-500">{hint}</div>
    </div>
  )
}

function BattleCard({ team }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="mb-2 text-sm uppercase tracking-wide text-zinc-400">Team</div>
      <div className="mb-4 text-2xl font-bold">{team}</div>
      <div className="h-24 animate-pulse rounded-lg bg-zinc-800/60" />
      <p className="mt-3 text-xs text-zinc-500">Cinematic battle animations go here.</p>
    </div>
  )
}

function WarriorPreview({ team, defense, attack, lore }) {
  const armorGlow = Math.min(1, defense / 100)
  const bladeGlow = Math.min(1, attack / 100)
  const mysticGlow = Math.min(1, lore / 100)

  const bg =
    team === 'Crimson'
      ? `radial-gradient(circle at 30% 30%, rgba(220,38,38,${0.3 + bladeGlow * 0.3}), transparent 60%),
         radial-gradient(circle at 70% 70%, rgba(244,63,94,${0.2 + armorGlow * 0.3}), transparent 65%),
         radial-gradient(circle at 50% 90%, rgba(168,85,247,${0.15 + mysticGlow * 0.4}), transparent 55%)`
      : `radial-gradient(circle at 30% 30%, rgba(39,39,42,${0.4 + bladeGlow * 0.2}), transparent 60%),
         radial-gradient(circle at 70% 70%, rgba(24,24,27,${0.35 + armorGlow * 0.2}), transparent 65%),
         radial-gradient(circle at 50% 90%, rgba(14,165,233,${0.15 + mysticGlow * 0.4}), transparent 55%)`

  return (
    <div className="flex items-center gap-4">
      <div
        className="relative h-40 w-40 rounded-2xl border border-zinc-800"
        style={{ background: bg }}
      >
        <div className="absolute inset-0 grid place-items-center text-xs text-zinc-300">
          <div className="rounded bg-zinc-900/60 px-2 py-1">Warrior: {team}</div>
        </div>
      </div>

      <div className="flex-1">
        <Bar label="Defense" value={defense} />
        <Bar label="Attack" value={attack} />
        <Bar label="Lore" value={lore} />
      </div>
    </div>
  )
}

function Bar({ label, value }) {
  return (
    <div className="mb-2">
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-zinc-400">{label}</span>
        <span className="font-medium text-zinc-200">{value}</span>
      </div>
      <div className="h-2 w-full rounded bg-zinc-800">
        <div className="h-2 rounded bg-indigo-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
