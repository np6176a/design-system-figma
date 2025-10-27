import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from './Button';
import { ColorPalette } from './Colors';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Typography } from './Typography';

const meta = {
  title: 'Documentation/Style Guide',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteStyleGuide: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '60px' }}>
        <Typography variant="h1">Fjell</Typography>
        <Typography variant="body" color="secondary">
          Complete style guide and component library
        </Typography>
      </div>

      <section style={{ marginBottom: '60px' }}>
        <Typography variant="h2" style={{ marginBottom: '32px' }}>Typography</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '700px' }}>
          <div>
            <Typography variant="h1" style={{ marginBottom: '8px' }}>H1 Title</Typography>
            <Typography variant="body" color="secondary" style={{ fontSize: '14px' }}>
              40px / SemiBold
            </Typography>
          </div>
          <div>
            <Typography variant="h2" style={{ marginBottom: '8px' }}>H2 Title</Typography>
            <Typography variant="body" color="secondary" style={{ fontSize: '14px' }}>
              32px / Medium
            </Typography>
          </div>
          <div>
            <Typography variant="h3" style={{ marginBottom: '8px' }}>H3 Title</Typography>
            <Typography variant="body" color="secondary" style={{ fontSize: '14px' }}>
              24px / SemiBold
            </Typography>
          </div>
          <div>
            <Typography variant="h4" style={{ marginBottom: '8px' }}>H4 Title</Typography>
            <Typography variant="body" color="secondary" style={{ fontSize: '14px' }}>
              20px / Medium
            </Typography>
          </div>
          <div>
            <Typography variant="h5" style={{ marginBottom: '8px' }}>H5 Title</Typography>
            <Typography variant="body" color="secondary" style={{ fontSize: '14px' }}>
              18px / Medium
            </Typography>
          </div>
          <div>
            <Typography variant="h6" style={{ marginBottom: '8px' }}>H6 TITLE</Typography>
            <Typography variant="body" color="secondary" style={{ fontSize: '14px' }}>
              18px / SemiBold / Uppercase
            </Typography>
          </div>
          <div>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui nibh, tincidunt quis hendrerit sed, dictum ac enim. Ut luctus, orci faucibus blandit luctus, lacus dui imperdiet neque, nec consectetur lacus mauris ut purus. Mauris quis libero lacinia, cursus risus sed, commodo diam.
            </Typography>
            <Typography variant="body" color="secondary" style={{ fontSize: '14px', marginTop: '8px' }}>
              16px / Regular
            </Typography>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <Typography variant="h2">Colors</Typography>
        <ColorPalette />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <Typography variant="h2" style={{ marginBottom: '24px' }}>Buttons</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
          <Button variant="primary" size="large">Primary Large</Button>
          <Button variant="primary" size="medium">Primary Medium</Button>
          <Button variant="primary" size="small">Primary Small</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <Typography variant="h2" style={{ marginBottom: '24px' }}>Form Fields</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Name" placeholder="Enter your name" value="John Doe" />
          <Input label="Password" type="password" placeholder="Enter password" />
          <Input 
            label="Email with Error" 
            type="email" 
            placeholder="you@example.com"
            error={true}
            errorMessage="Please enter a valid email address"
          />
          <Input label="Disabled Field" disabled value="This is disabled" />
          <Textarea label="Description" placeholder="Enter description..." rows={5} />
          <Textarea 
            label="Message with Error" 
            placeholder="Enter your message..."
            error={true}
            errorMessage="Message is required"
          />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <Typography variant="h2" style={{ marginBottom: '24px' }}>Card Example</Typography>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '25px',
          padding: '32px',
          boxShadow: '0px 4px 4px 0px rgba(111, 127, 106, 0.5)',
          maxWidth: '400px'
        }}>
          <Typography variant="h3">Card Title</Typography>
          <Typography variant="body" color="secondary">
            This is a card component with a shadow effect, demonstrating the design system's capabilities.
          </Typography>
          <Button variant="primary">Learn More</Button>
        </div>
      </section>
    </div>
  ),
};

