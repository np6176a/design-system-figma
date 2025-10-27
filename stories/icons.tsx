import React from 'react';

export interface IconProps {
  /** Icon name from Material Icons */
  name: string;
  /** Optional className */
  className?: string;
}

/** Material Icon component */
export const Icon = ({ name, className = '' }: IconProps) => {
  return (
    <span className={`material-icons ${className}`} style={{ fontSize: 'inherit' }}>
      {name}
    </span>
  );
};

// Icon name mappings - maps to Material Icons
export const getMaterialIcon = (key: string): string => {
  const iconMap: Record<string, string> = {
    hotel: 'hotel',
    flights: 'flight',
    cars: 'directions_car',
    packages: 'inventory_2',
    cruises: 'sailing',
    calendar: 'calendar_today',
    location: 'location_on',
    people: 'people',
  };
  return iconMap[key] || '';
};

