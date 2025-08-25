import { Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About.jsx'
import Battle from './pages/Battle.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-xl font-semibold tracking-wide">BattleNight</div>
          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({isActive}) =>
                `px-3 py-1 rounded-lg ${isActive ? 'bg-zinc-800' : 'hover:bg-zinc-900'}`
              }
              end
            >
              About
            </NavLink>
            <NavLink
              to="/battle"
              className={({isActive}) =>
                `px-3 py-1 rounded-lg ${isActive ? 'bg-zinc-800' : 'hover:bg-zinc-900'}`
              }
            >
              Battle
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
      </main>
    </div>

  )
  
}
<Routes>
  <Route path="/" element={<About />} />
  <Route path="/battle" element={<Battle />} />
  <Route path="*" element={<NotFound />} />
</Routes>