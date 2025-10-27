# Design System Components

This directory contains atomic components and design tokens extracted from the Figma style guide.

## Components

### Button
A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `children`: React.ReactNode

**Usage:**
```tsx
<Button variant="primary" size="large">Click Me</Button>
<Button variant="outline" disabled>Disabled Button</Button>
```

### Input
A text input field with label and error states.

**Props:**
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
- `label`: string
- `placeholder`: string
- `error`: boolean
- `errorMessage`: string
- `disabled`: boolean

**Usage:**
```tsx
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Name" error errorMessage="Name is required" />
```

### Textarea
A multi-line text input with label and error states.

**Props:**
- `label`: string
- `placeholder`: string
- `rows`: number
- `error`: boolean
- `errorMessage`: string
- `disabled`: boolean

**Usage:**
```tsx
<Textarea label="Description" rows={5} />
<Textarea label="Message" error errorMessage="Message is required" />
```

### Typography
Text styling component for consistent typography across the app.

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body'
- `color`: 'primary' | 'secondary'
- `children`: React.ReactNode

**Usage:**
```tsx
<Typography variant="h1">Main Title</Typography>
<Typography variant="body" color="secondary">Body text</Typography>
```

### ColorPalette
Displays the complete color palette from the design system.

**Usage:**
```tsx
import { ColorPalette } from './Colors';
<ColorPalette />
```

## Design Tokens

All design tokens are defined in `tokens.css`:

### Colors
- **Primary**: #6f7f6a
- **Secondary**: #8e6e53
- **Tertiary**: #9aa895
- **Accent**: #2e4a3b
- **Neutral colors**: Various shades from light to dark

### Typography
- **Font**: Outfit (Regular 400, Medium 500, SemiBold 600)
- **Headings**: H1-H6 with defined sizes and weights
- **Body**: 16px regular weight

## Viewing in Storybook

Run Storybook to see all components:
```bash
npm run storybook
```

The style guide is available at: **Documentation > Style Guide**

## Files Structure

```
stories/
├── tokens.css           # Design tokens
├── Button.tsx          # Button component
├── Button.stories.ts   # Button stories
├── Input.tsx           # Input component
├── Input.stories.ts    # Input stories
├── Textarea.tsx        # Textarea component
├── Textarea.stories.ts # Textarea stories
├── Typography.tsx      # Typography component
├── Typography.stories.ts # Typography stories
├── Colors.tsx          # Color palette component
├── Colors.stories.ts   # Colors stories
├── StyleGuide.stories.ts # Complete style guide
└── *.css               # Component-specific styles
```

