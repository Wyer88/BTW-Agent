import { useState, useMemo } from 'react'
import SelectField from '../components/SelectField'
import Button from '../components/Button'

const SPORTS = ['NFL', 'NBA', 'NHL']
const THEMES = ['Vegetables', 'Pokemon', 'Cars', 'Historic', 'Dark Aged', 'Animal']

const BTW_PER_VIDEO = 50000
const SIGNUP_BONUS = 100000

export default function FormPage() {
  const [sport, setSport] = useState('')
  const [theme, setTheme] = useState('')
  const [videos, setVideos] = useState(1)

  const totalBTW = useMemo(() => videos * BTW_PER_VIDEO, [videos])
  const canGenerate = sport && theme && videos > 0

  const handleGenerate = () => {
    if (!canGenerate) return
    const params = new URLSearchParams({
      sport,
      theme,
      videos: String(videos),
      btwTotal: String(totalBTW)
    })
    window.location.href = `/generate?${params.toString()}`
  }

  return (
    <div className="relative w-full">
      {/* Frosted panel */}
      <div className="max-w-2xl mx-auto mt-24 md:mt-28 px-4">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight animate-glow-pulse">
            BeforeTheWyer
          </h1>
          <p className="text-white/70 mt-3 md:mt-4">
            Generate video scripts with images & music cues from your chosen <span className="text-accent-1 font-semibold">Sport</span> and <span className="text-accent-2 font-semibold">BTW Theme</span>.
          </p>
        </header>

        <section className="glass rounded-2xl p-5 md:p-7 space-y-6">
          {/* Two dropdowns */}
          <div className="grid grid-cols-1 gap-6">
            <SelectField
              label="Sport"
              value={sport}
              onChange={setSport}
              options={SPORTS}
              placeholder="Choose a sport"
            />
            <SelectField
              label="BTW Theme"
              value={theme}
              onChange={setTheme}
              options={THEMES}
              placeholder="Choose a theme"
            />
          </div>

          {/* Payment row */}
          <div className="text-left">
            <label className="block mb-2 text-base md:text-lg font-semibold text-white/90">
              Prompt Fuel / Payment
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <select
                value={videos}
                onChange={(e) => setVideos(Number(e.target.value))}
                className="ctrl sm:w-64"
              >
                {[1,2,3,4,5].map(n => (<option key={n} value={n}>{n} Video{n>1?'s':''}</option>))}
              </select>

              <input
                type="text"
                readOnly
                value={totalBTW.toLocaleString()}
                className="ctrl-inset"
                aria-label="Total BTW"
                title="Total $BTW required"
              />
            </div>

            <div className="mt-3 text-sm text-white/70">
              Cost: {BTW_PER_VIDEO.toLocaleString()} $BTW per video.
            </div>
            <div className="mt-1 text-sm text-white/80">
              Sign up via <a href="/register" className="text-accent-1 underline">email</a> to receive <span className="font-semibold">{SIGNUP_BONUS.toLocaleString()} $BTW</span>.
            </div>
          </div>

          {/* Generate */}
          <div className="pt-2">
            <Button onClick={handleGenerate} disabled={!canGenerate} className="w-full">
              Generate
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
