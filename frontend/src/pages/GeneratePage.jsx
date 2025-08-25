function getParams() {
  const p = new URLSearchParams(window.location.search)
  return {
    sport: p.get('sport') || '',
    theme: p.get('theme') || '',
    videos: Number(p.get('videos') || 0),
    btwTotal: Number(p.get('btwTotal') || 0),
  }
}

export default function GeneratePage() {
  const { sport, theme, videos, btwTotal } = getParams()

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-24 md:mt-28">
      <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Generation Setup</h2>

        <div className="grid gap-3 md:gap-4">
          <Row label="Sport" value={sport} />
          <Row label="BTW Theme" value={theme} />
          <Row label="Videos" value={String(videos)} />
          <Row label="Total $BTW" value={btwTotal.toLocaleString()} />
        </div>

        <div className="p-4 md:p-5 rounded-xl bg-panel border border-white/10">
          <p className="text-white/80">
            Next steps (server-driven, secure):
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-white/85">
            <li>Validate user balance / signup credit **server-side**.</li>
            <li>Generate draft script, image prompts, and music cues.</li>
            <li>Return a render plan and job ID for progress tracking.</li>
          </ul>
          <p className="text-xs text-white/60 mt-3">
            Never trust client-calculated payment totals—recompute on the server.
          </p>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between bg-panel/70 rounded-lg px-4 py-3 border border-white/10">
      <span className="text-white/70">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}
