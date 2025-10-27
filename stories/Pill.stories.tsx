import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Pill } from './Pill';

const meta = {
  title: 'Components/Pill',
  component: Pill,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hotel: Story = {
  args: {
    children: 'Hotel',
    icon: 'hotel',
  },
};

export const Flights: Story = {
  args: {
    children: 'Flights',
    icon: 'flights',
  },
};

export const Cars: Story = {
  args: {
    children: 'Cars',
    icon: 'cars',
  },
};

export const Packages: Story = {
  args: {
    children: 'Packages',
    icon: 'packages',
  },
};

export const Cruises: Story = {
  args: {
    children: 'Cruises',
    icon: 'cruises',
  },
};

export const AllPills = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Pill icon="hotel">Hotel</Pill>
      <Pill icon="flights">Flights</Pill>
      <Pill icon="cars">Cars</Pill>
      <Pill icon="packages">Packages</Pill>
      <Pill icon="cruises">Cruises</Pill>
    </div>
  ),
};

