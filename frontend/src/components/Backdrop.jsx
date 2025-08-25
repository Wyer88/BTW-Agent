export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 bg-horizon">
      {/* animated soft blobs */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full blur-3xl opacity-20 bg-accent-2 animate-slow-float"></div>
      <div className="absolute -bottom-40 left-1/3 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-10 bg-accent-1"></div>
      <div className="absolute -bottom-20 right-1/4 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-10 bg-accent-3"></div>
    </div>
  )
}

