import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Typography } from './Typography';

const meta = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'H1 Title',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'H2 Title',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'H3 Title',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'H4 Title',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'H5 Title',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'H6 TITLE',
  },
};


export const SecondaryColor: Story = {
  args: {
    variant: 'body',
    color: 'secondary',
    children: 'This is secondary text color.',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui nibh, tincidunt quis hendrerit sed, dictum ac enim. Ut luctus, orci faucibus blandit luctus, lacus dui imperdiet neque, nec consectetur lacus mauris ut purus.',
  },
};

export const TypographyScale: Partial<Story> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
      <Typography variant="h1">H1 Title</Typography>
      <Typography variant="h2">H2 Title</Typography>
      <Typography variant="h3">H3 Title</Typography>
      <Typography variant="h4">H4 Title</Typography>
      <Typography variant="h5">H5 Title</Typography>
      <Typography variant="h6">H6 TITLE</Typography>
      <Typography variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui nibh, tincidunt quis hendrerit sed, dictum ac enim. Ut luctus, orci faucibus blandit luctus, lacus dui imperdiet neque, nec consectetur lacus mauris ut purus.
      </Typography>
    </div>
  ),
};

