import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    rows: 5,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Notes',
    value: 'This is a pre-filled textarea with some content.',
    rows: 6,
  },
};

export const Error: Story = {
  args: {
    label: 'Message',
    error: true,
    errorMessage: 'Message is required',
    placeholder: 'Enter your message...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    disabled: true,
    value: 'This textarea is disabled',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '500px' }}>
      <Textarea label="Small (3 rows)" rows={3} placeholder="Enter text..." />
      <Textarea label="Medium (5 rows)" rows={5} placeholder="Enter text..." />
      <Textarea label="Large (8 rows)" rows={8} placeholder="Enter text..." />
    </div>
  ),
};

