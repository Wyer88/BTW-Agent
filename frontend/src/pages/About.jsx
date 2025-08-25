export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-zinc-300 leading-relaxed">
        BattleNight is a team battle game. New players are auto‑assigned to one of two teams.
        Before an assigned <span className="font-semibold">Battle Night</span>, each team collaboratively
        invests tokens into their Warrior across three tracks:
      </p>
      <ol className="list-decimal list-inside space-y-1 text-zinc-300">
        <li>Defense &amp; Armor</li>
        <li>Attack &amp; Weaponry</li>
        <li>Lore &amp; Mystic</li>
      </ol>
      <p className="text-zinc-300 leading-relaxed">
        Investments visually power up your Warrior. On Battle Night, the Warriors clash. The losing
        team’s pool is forfeited: <span className="font-semibold">50%</span> distributed to winners, and
        <span className="font-semibold"> 50%</span> burned on-chain.
      </p>
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-semibold">Roadmap (High Level)</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>v0: Frontend shell (you’re here)</li>
          <li>v1: Wallet connect + team assignment</li>
          <li>v2: Lockbox program + invest flows</li>
          <li>v3: On-chain resolution + reward/burn</li>
          <li>v4: Cinematic battle visualizer</li>
        </ul>
      </div>
    </section>
  )
}
