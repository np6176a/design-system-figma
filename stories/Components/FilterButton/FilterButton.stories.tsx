import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { FilterButton } from './FilterButton';

const meta = {
  title: 'Components/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const hotelIcon = "http://localhost:3845/assets/6af5a0e66adda4f7a9b835bde50ce38e6afd83ec.svg";
const hotelIconActive = "http://localhost:3845/assets/c0d6c6894eafb7d5a23891fe21f39d54ac1e71cd.svg";
const flightIcon = "http://localhost:3845/assets/ade02742948ff71d19a2af7a03ba13d06b194e84.svg";
const flightIconActive = "http://localhost:3845/assets/33c61c2853b3efc0df6d6735c1831996b30d3ec2.svg";

export const Default: Story = {
  args: {
    label: 'Hotel',
    icon: hotelIcon,
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Hotel',
    icon: hotelIconActive,
    active: true,
  },
};

export const FlightsDefault: Story = {
  args: {
    label: 'Flights',
    icon: flightIcon,
    active: false,
  },
};

export const FlightsActive: Story = {
  args: {
    label: 'Flights',
    icon: flightIconActive,
    active: true,
  },
};

export const AllFilterButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <FilterButton label="Hotel" icon={hotelIcon} active={true} />
      <FilterButton label="Hotel" icon={hotelIcon} active={false} />
      <FilterButton label="Flights" icon={flightIcon} active={true} />
      <FilterButton label="Flights" icon={flightIcon} active={false} />
      <FilterButton label="Cars" active={false} />
      <FilterButton label="Packages" active={false} />
      <FilterButton label="Cruises" active={false} />
    </div>
  ),
};

