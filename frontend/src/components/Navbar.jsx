export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-end gap-6 glass rounded-b-2xl px-4 md:px-6">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/register" className="nav-cta">Register</a>
        </div>
      </div>
    </nav>
  );
}
