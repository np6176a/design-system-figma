export interface TypographyProps {
  /** Typography variant */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
  /** Text content */
  children: React.ReactNode;
  /** Optional className */
  className?: string;
  /** Optional color */
  color?: 'primary' | 'secondary';
  /** Additional props like style, onClick, etc. */
  [key: string]: any;
}

/** Typography component for consistent text styling */
export const Typography = ({
  variant,
  children,
  className = '',
  color = 'primary',
  ...props
}: TypographyProps) => {
  const elementMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p'
  } as const;
  
  const Component = elementMap[variant] as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  
  const variantClasses = {
    h1: 'text-[var(--font-size-h1)] font-[var(--font-weight-semibold)] leading-[var(--line-height-h1)]',
    h2: 'text-[var(--font-size-h2)] font-[var(--font-weight-medium)] leading-[var(--line-height-h2)]',
    h3: 'text-[var(--font-size-h3)] font-[var(--font-weight-semibold)] leading-[var(--line-height-h3)]',
    h4: 'text-[var(--font-size-h4)] font-[var(--font-weight-medium)] leading-[var(--line-height-h4)]',
    h5: 'text-[var(--font-size-h5)] font-[var(--font-weight-medium)] leading-[var(--line-height-h5)]',
    h6: 'text-[var(--font-size-h6)] font-[var(--font-weight-semibold)] leading-[var(--line-height-h6)] tracking-[var(--letter-spacing-h6)] uppercase',
    body: 'text-[var(--font-size-body)] font-[var(--font-weight-regular)] leading-[var(--line-height-body)]'
  };
  
  const colorClasses = {
    primary: 'text-[var(--color-text-primary)]',
    secondary: 'text-[var(--color-text-secondary)]'
  };

  return (
    <Component 
      className={`m-0 font-[var(--font-sans)] ${variantClasses[variant]} ${colorClasses[color]} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
};

