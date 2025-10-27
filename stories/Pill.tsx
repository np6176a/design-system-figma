import { Icon, getMaterialIcon } from './icons';

export interface PillProps {
  /** Pill content */
  children: React.ReactNode;
  /** Icon name from Material Icons (hotel, flights, cars, packages, cruises) */
  icon?: string;
  /** Click handler */
  onClick?: () => void;
  /** Optional className */
  className?: string;
}

/** Pill component for tags and filters */
export const Pill = ({
  children,
  icon,
  onClick,
  className = '',
  ...props
}: PillProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-[5px]
        p-2 rounded-[20px]
        bg-[#F7F3EA] border-0
        font-[var(--font-sans)] font-medium leading-normal text-[16px]
        text-[#B86F3D] text-nowrap tracking-[0.8px] whitespace-pre
        transition-all duration-200
        ${className}
      `}
      {...props}
    >
      {icon && <Icon name={getMaterialIcon(icon)} className="text-[#B86F3D]" />}
      <span>{children}</span>
    </button>
  );
};

