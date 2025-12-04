export interface TextareaProps {
  /** Placeholder text */
  placeholder?: string;
  /** Textarea label */
  label?: string;
  /** Number of rows */
  rows?: number;
  /** Whether textarea is disabled */
  disabled?: boolean;
  /** Whether textarea has error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Optional change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Optional value */
  value?: string;
  /** HTML textarea id */
  id?: string;
}

/** Textarea field component */
export const Textarea = ({
  placeholder,
  label,
  rows = 4,
  disabled = false,
  error = false,
  errorMessage,
  onChange,
  value,
  id,
  ...props
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="font-[var(--font-sans)] text-sm font-medium text-[var(--color-text-primary)]">
          {label}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-3 font-[var(--font-sans)] text-base font-normal
          text-[var(--color-text-primary)] bg-white
          border-2 border-[var(--color-neutral-medium)] rounded-lg
          transition-all duration-200 box-border resize-y min-h-[80px]
          placeholder:text-[var(--color-text-secondary)]
          focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(111,127,106,0.1)]
          ${disabled ? 'bg-[#f5f5f5] cursor-not-allowed text-[var(--color-text-secondary)]' : ''}
          ${error ? 'border-[#d32f2f]' : ''}
        `}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error && errorMessage && (
        <span className="font-[var(--font-sans)] text-sm text-[#d32f2f] -mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

