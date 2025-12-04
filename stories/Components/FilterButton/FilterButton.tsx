export interface FilterButtonProps {
  /** Button text */
  label: string;
  /** Icon source URL or component */
  icon?: string;
  /** Active state */
  active?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Optional className */
  className?: string;
}

/** Rounded filter button for category selection */
export const FilterButton = ({
  label,
  icon,
  active = false,
  onClick,
  className = '',
  ...props
}: FilterButtonProps) => {
  const activeClasses = active 
    ? 'bg-[#f7f3ea] border-[#b86f3d] text-[#b86f3d]'
    : 'bg-white border-[#2e4a3b] text-[#2e4a3b]';
  
  return (
    <button
      onClick={onClick}
      className={`
        content-stretch flex gap-[5px] items-center justify-center 
        p-2 relative rounded-[20px]
        border border-solid box-border
        font-[var(--font-sans)] font-medium leading-normal text-base
        text-nowrap tracking-[0.8px] whitespace-pre
        transition-all duration-200
        ${activeClasses}
        ${className}
      `}
      {...props}
    >
      {icon && (
        <div className="h-[11px] w-4 relative shrink-0">
          <img alt="" className="block max-w-none size-full" src={icon} />
        </div>
      )}
      <span>{label}</span>
    </button>
  );
};

