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
  const baseClasses = 'inline-flex items-center justify-center cursor-pointer border-none rounded-lg font-medium transition-all duration-200 whitespace-nowrap';
  
  const variantClasses = {
    primary: 'bg-[var(--color-primary)] text-white hover:translate-y-[-1px] hover:shadow-lg',
    secondary: 'bg-[var(--color-secondary)] text-white hover:translate-y-[-1px] hover:shadow-lg',
    tertiary: 'bg-[var(--color-tertiary)] text-white hover:translate-y-[-1px] hover:shadow-lg',
    outline: 'bg-transparent border-2 border-solid text-[var(--color-primary)] border-[var(--color-primary)] hover:translate-y-[-1px]'
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm rounded-md',
    medium: 'px-6 py-3 text-base rounded-lg',
    large: 'px-8 py-4 text-lg rounded-[10px]'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none' : '';
  
  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

