export default function SelectField({ label, value, onChange, options, placeholder = 'Select...' }) {
  return (
    <div className="w-full text-left">
      <label className="block mb-2 text-base md:text-lg font-semibold text-white/90">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ctrl"
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
