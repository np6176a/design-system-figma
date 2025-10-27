import './typography.css';

export interface TypographyProps {
  /** Typography variant */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
  /** Text content */
  children: React.ReactNode;
  /** Optional className */
  className?: string;
  /** Optional color */
  color?: 'primary' | 'secondary';
}

/** Typography component for consistent text styling */
export const Typography = ({
  variant,
  children,
  className = '',
  color = 'primary',
  ...props
}: TypographyProps) => {
  const Component = variant;
  const classes = [
    'storybook-typography',
    `storybook-typography--${variant}`,
    `storybook-typography--color-${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

