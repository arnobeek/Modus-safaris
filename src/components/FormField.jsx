/**
 * Reusable form field components with label and error message.
 * Styled for Modus Safaris (luxury safari look).
 */

export function FormField({ id, label, error, children, required }) {
  return (
    <div className="flex flex-col gap-2.5 w-full group">
      {label && (
        <label
          htmlFor={id}
          className="text-zinc-500 text-[11px] font-bold tracking-[0.1em] uppercase transition-colors group-focus-within:text-[#3a5a40]"
        >
          {label}
          {required && <span className="text-[#3a5a40] ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {children}
      </div>
      {error && (
        <p id={id ? `${id}-error` : undefined} className="text-xs text-red-500 mt-1 font-medium animate-in fade-in slide-in-from-top-1 duration-200" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputBase =
  "w-full px-0 py-3 bg-transparent text-gray-900 placeholder-gray-400 border-0 border-b-2 border-zinc-100 focus:border-[#3a5a40] focus:outline-none transition-all duration-300 ease-in-out text-lg"

export function FormInput({
  id,
  label,
  error,
  required,
  type = "text",
  ...props
}) {
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <input
        id={id}
        type={type}
        className={inputBase}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
    </FormField>
  )
}

export function FormSelect({
  id,
  label,
  error,
  required,
  children,
  ...props
}) {
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <select
        id={id}
        className={`${inputBase} cursor-pointer appearance-none bg-no-repeat bg-right pr-8`}
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%233a5a40'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")" }}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      >
        {children}
      </select>
    </FormField>
  )
}

export function FormTextarea({
  id,
  label,
  error,
  required,
  ...props
}) {
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <textarea
        id={id}
        className={`${inputBase} min-h-[120px] resize-y`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
    </FormField>
  )
}

export function FormCheckboxGroup({ label, error, children, required, columns = "grid-cols-2" }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2">
        <label className="text-gray-600 text-sm font-medium tracking-wide uppercase">
          {label}
          {required && <span className="text-[#3a5a40] ml-0.5">*</span>}
        </label>
      </div>
      <div className={`grid gap-3 ${columns} sm:grid-cols-2 md:grid-cols-3 lg:${columns}`}>
        {children}
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function CheckboxButton({ id, name, value, label, checked, onChange, type = "checkbox" }) {
  return (
    <label
      className={`
        relative flex items-center justify-center px-6 py-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-center text-[15px] font-semibold
        ${checked 
          ? "border-[#3a5a40] bg-[#3a5a40]/5 text-[#3a5a40] shadow-[0_8px_20px_-8px_rgba(58,90,64,0.3)] ring-1 ring-[#3a5a40]" 
          : "border-zinc-100 bg-white text-zinc-500 hover:border-zinc-200 hover:bg-zinc-50 hover:text-zinc-700 shadow-sm"}
        active:scale-[0.98]
      `}
    >
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="relative z-10">{label}</span>
      {checked && (
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#3a5a40] animate-pulse" />
      )}
    </label>
  )
}
