import './input.css';

export interface InputProps {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Placeholder text */
  placeholder?: string;
  /** Input label */
  label?: string;
  /** Whether input is disabled */
  disabled?: boolean;
  /** Whether input has error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Optional change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional value */
  value?: string;
  /** HTML input id */
  id?: string;
}

/** Text input field component */
export const Input = ({
  type = 'text',
  placeholder,
  label,
  disabled = false,
  error = false,
  errorMessage,
  onChange,
  value,
  id,
  ...props
}: InputProps) => {
  return (
    <div className="storybook-input-wrapper">
      {label && (
        <label htmlFor={id} className="storybook-input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        className={[
          'storybook-input',
          disabled && 'storybook-input--disabled',
          error && 'storybook-input--error'
        ].filter(Boolean).join(' ')}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error && errorMessage && (
        <span className="storybook-input-error">{errorMessage}</span>
      )}
    </div>
  );
};

