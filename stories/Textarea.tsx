import './textarea.css';

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
    <div className="storybook-textarea-wrapper">
      {label && (
        <label htmlFor={id} className="storybook-textarea-label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={[
          'storybook-textarea',
          disabled && 'storybook-textarea--disabled',
          error && 'storybook-textarea--error'
        ].filter(Boolean).join(' ')}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error && errorMessage && (
        <span className="storybook-textarea-error">{errorMessage}</span>
      )}
    </div>
  );
};

