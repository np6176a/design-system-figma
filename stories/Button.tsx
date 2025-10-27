import './button.css';

export interface ButtonProps {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${variant}`,
        `storybook-button--${size}`,
        disabled && 'storybook-button--disabled'
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
