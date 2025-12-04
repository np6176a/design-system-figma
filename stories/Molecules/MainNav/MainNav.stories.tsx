import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import { MainNav } from './MainNav';

const meta = {
  title: 'Molecules/MainNav',
  component: MainNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onNavItemClick: fn(),
    onMyTripsClick: fn(),
    onSignInClick: fn(),
  },
} satisfies Meta<typeof MainNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: 'Fjell',
    navItems: ['Hotel', 'Flights', 'Cars', 'Packages', 'Cruises'],
    showCurrency: true,
    currency: 'USD',
  },
};

export const CustomNavItems: Story = {
  args: {
    logo: 'Fjell',
    navItems: ['Home', 'About', 'Services', 'Contact'],
    showCurrency: true,
    currency: 'USD',
  },
};

export const WithoutCurrency: Story = {
  args: {
    logo: 'Fjell',
    navItems: ['Hotel', 'Flights', 'Cars', 'Packages', 'Cruises'],
    showCurrency: false,
  },
};

export const DifferentCurrency: Story = {
  args: {
    logo: 'Fjell',
    navItems: ['Hotel', 'Flights', 'Cars', 'Packages', 'Cruises'],
    showCurrency: true,
    currency: 'EUR',
  },
};

export const MinimalNav: Story = {
  args: {
    logo: 'Fjell',
    navItems: ['Hotel', 'Flights'],
    showCurrency: true,
    currency: 'USD',
  },
};

export const CustomLogo: Story = {
  args: {
    logo: 'TravelCo',
    navItems: ['Hotel', 'Flights', 'Cars', 'Packages', 'Cruises'],
    showCurrency: true,
    currency: 'GBP',
  },
};

