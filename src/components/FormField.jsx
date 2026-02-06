/**
 * Reusable form field components with label and error message.
 * Styled for Modus Safaris (luxury safari look).
 */

export function FormField({ id, label, error, children, required }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="text-gray-600 text-sm font-medium tracking-wide uppercase"
      >
        {label}
        {required && <span className="text-[#3a5a40] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p id={id ? `${id}-error` : undefined} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputBase =
  "w-full px-0 py-2.5 bg-transparent text-gray-900 placeholder-gray-400 border-0 border-b border-gray-300 focus:border-[#3a5a40] focus:outline-none transition-colors duration-200"

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
