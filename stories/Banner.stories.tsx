import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Banner } from './Banner';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FallDeals: Story = {
  args: {
    children: 'Fall Deals: Get 25% off Flights. Use code AUTMN',
    backgroundColor: '#8e6e53',
    textColor: '#f7f3ea',
  },
};

export const SpringPromotion: Story = {
  args: {
    children: 'Spring Sale: Save up to 40% on Hotels Worldwide',
    backgroundColor: '#6f7f6a',
    textColor: '#f7f3ea',
  },
};

export const SummerVacation: Story = {
  args: {
    children: 'Summer Vacation Deals: Book Your Dream Trip Today',
    backgroundColor: '#2e4a3b',
    textColor: '#f7f3ea',
  },
};

export const Compact: Story = {
  args: {
    children: 'Limited Time Offer: Free Cancellation',
    backgroundColor: '#8e6e53',
    textColor: '#f7f3ea',
    variant: 'compact',
  },
};

export const CustomColors: Story = {
  args: {
    children: 'Custom Color Banner with Your Message',
    backgroundColor: '#b86f3d',
    textColor: '#ffffff',
  },
};

export const NotFullWidth: Story = {
  args: {
    children: 'This banner is not full width',
    backgroundColor: '#8e6e53',
    textColor: '#f7f3ea',
    fullWidth: false,
  },
};

