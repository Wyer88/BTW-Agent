// src/components/Layout.jsx
import { NavLink, Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(700px 400px at 20% -10%, rgba(99,102,241,0.12), transparent 60%), radial-gradient(600px 500px at 100% 0%, rgba(244,63,94,0.10), transparent 55%)',
        }}
      />
      {/* Top nav */}
      <nav className="sticky top-0 z-20 border-b border-zinc-800/70 bg-zinc-950/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-indigo-600/90 shadow-lg shadow-indigo-600/30" />
            <span className="text-lg font-semibold tracking-wide">BattleNight</span>
          </Link>
          <div className="flex items-center gap-1">
            <Tab to="/" label="About" end />
            <Tab to="/battle" label="Battle" />
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-zinc-800/70 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} BattleNight — Two teams. One epic clash.</p>
      </footer>
    </div>
  )
}

function Tab({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `rounded-lg px-3 py-1.5 text-sm ${isActive ? 'bg-zinc-800' : 'hover:bg-zinc-900'}`
      }
    >
      {label}
    </NavLink>
  )
}
