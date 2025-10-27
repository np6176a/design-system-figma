export interface BannerProps {
  /** Banner text content */
  children: React.ReactNode;
  /** Banner background color */
  backgroundColor?: string;
  /** Banner text color */
  textColor?: string;
  /** Banner variant */
  variant?: 'default' | 'compact';
  /** Optional className */
  className?: string;
  /** Full width banner */
  fullWidth?: boolean;
}

/** Promotional banner component for displaying announcements and offers */
export const Banner = ({
  children,
  backgroundColor = '#8e6e53',
  textColor = '#f7f3ea',
  variant = 'default',
  className = '',
  fullWidth = true,
  ...props
}: BannerProps) => {
  const heightClass = variant === 'compact' ? 'h-12' : 'h-14';
  
  return (
    <div 
      className={`
        ${heightClass}
        flex items-center justify-center
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      style={{ backgroundColor }}
      {...props}
    >
      <div 
        className="font-[var(--font-sans)] text-lg font-semibold text-nowrap tracking-[0.9px] uppercase whitespace-pre"
        style={{ color: textColor }}
      >
        {children}
      </div>
    </div>
  );
};

