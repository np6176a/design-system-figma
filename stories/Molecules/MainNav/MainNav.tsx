import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export interface MainNavProps {
  /** Navigation items for left side */
  navItems?: string[];
  /** Show currency selector */
  showCurrency?: boolean;
  /** Currency code */
  currency?: string;
  /** Optional className */
  className?: string;
  /** Click handlers for nav items */
  onNavItemClick?: (item: string) => void;
  /** Click handler for My Trips */
  onMyTripsClick?: () => void;
  /** Click handler for Sign In */
  onSignInClick?: () => void;
}

/** Main navigation component for the application header */
export const MainNav = ({
  navItems = ['Hotel', 'Flights', 'Cars', 'Packages', 'Cruises'],
  showCurrency = true,
  currency = 'USD',
  className = '',
  onNavItemClick,
  onMyTripsClick,
  onSignInClick,
  ...props
}: MainNavProps) => {

  return (
    <div
      className={`
        bg-white/50
        border-t border-b border-[#2c2a28] border-solid
        box-border
        flex items-center justify-between
        px-32 py-3
        w-full
        ${className}
      `}
      {...props}
    >
      {/* Left section - Logo and navigation */}
      <div className="flex gap-5 items-center">
        {/* Logo */}
        <div className="relative shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>

        {/* Navigation items */}
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavItemClick?.(item);
            }}
            className="
              font-[var(--font-sans)]
              font-medium
              text-[#2c2a28]
              text-[1rem]
              tracking-[0.9px]
              leading-normal
              whitespace-nowrap
              hover:text-[#8e6e53]
              transition-colors
              cursor-pointer
              no-underline
            "
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right section - Currency, My Trips, Sign in */}
      <div className="flex gap-5 items-center px-2">
        {/* Currency selector */}
        {showCurrency && (
          <div className="flex items-center gap-1">
            <span className="text-[1rem]">🇺🇸</span>
            <p className="
              font-[var(--font-sans)]
              font-medium
              text-[#2c2a28]
              text-[1rem]
              tracking-[0.9px]
              whitespace-nowrap
            ">
              {currency}
            </p>
          </div>
        )}

        {/* My Trips */}
        <button
          onClick={onMyTripsClick}
          className="
            font-[var(--font-sans)]
            font-medium
            text-[#2c2a28]
            text-[1rem]
            tracking-[0.9px]
            whitespace-nowrap
            hover:text-[#8e6e53]
            transition-colors
            cursor-pointer
            bg-transparent
            border-none
          "
        >
          My Trips
        </button>

        {/* Sign in */}
        <button
          onClick={onSignInClick}
          className="
            font-[var(--font-sans)]
            font-medium
            text-[#2c2a28]
            text-[1rem]
            tracking-[0.9px]
            whitespace-nowrap
            hover:text-[#8e6e53]
            transition-colors
            cursor-pointer
            bg-transparent
            border-none
          "
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

