import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ColorPalette } from './Colors';

const meta = {
  title: 'Foundation/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryColors: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 500 }}>Primary Colors</h2>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <ColorSwatch name="Primary" value="#6f7f6a" />
        <ColorSwatch name="Secondary" value="#8e6e53" />
        <ColorSwatch name="Tertiary" value="#9aa895" />
        <ColorSwatch name="Accent" value="#2e4a3b" />
        <ColorSwatch name="Quaternary" value="#b86f3d" />
      </div>
    </div>
  ),
};

export const NeutralColors: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 500 }}>Neutral Colors</h2>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <ColorSwatch name="Neutral Light" value="#f7f3ea" />
        <ColorSwatch name="Neutral Lighter" value="#eae2d3" />
        <ColorSwatch name="Neutral Medium" value="#dce8ee" />
        <ColorSwatch name="Neutral Dark" value="#7a848c" isDark={true} />
        <ColorSwatch name="Neutral Darker" value="#2c2a28" isDark={true} />
        <ColorSwatch name="Neutral Darkest" value="#2b2f31" isDark={true} />
      </div>
    </div>
  ),
};

function ColorSwatch({ name, value, isDark = false }: { name: string; value: string; isDark?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: value,
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
        }}
      />
      <p style={{ fontSize: '14px', fontWeight: 500, margin: 0, color: '#2c2a28' }}>{value}</p>
      <p style={{ fontSize: '14px', fontWeight: 400, margin: 0, color: '#7a848c' }}>{name}</p>
    </div>
  );
}

