export default function Button({ children, disabled, onClick, className = "" }) {
  const base = disabled ? "btn btn-disabled" : "btn btn-primary"
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${className}`}>
      {children}
    </button>
  )
}
