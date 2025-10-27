# Tailwind Theme Configuration

This project uses **Tailwind CSS v4** with custom theme tokens that match the Figma style guide.

## Theme Configuration

All design tokens are defined in `app/globals.css` using Tailwind's `@theme` directive.

### Colors

The following colors are available as CSS variables:

#### Primary Colors
- `--color-primary`: #6f7f6a (Green)
- `--color-secondary`: #8e6e53 (Brown)
- `--color-tertiary`: #9aa895 (Light Green)
- `--color-accent`: #2e4a3b (Dark Green)
- `--color-quaternary`: #b86f3d (Orange)

#### Neutral Colors
- `--color-neutral-light`: #f7f3ea (Cream)
- `--color-neutral-lighter`: #eae2d3 (Beige)
- `--color-neutral-medium`: #dce8ee (Light Blue-Grey)
- `--color-neutral-dark`: #7a848c (Grey)
- `--color-neutral-darker`: #2c2a28 (Dark Grey)
- `--color-neutral-darkest`: #2b2f31 (Almost Black)

#### Text Colors
- `--color-text-primary`: #2c2a28
- `--color-text-secondary`: #7a848c

### Typography

#### Font Family
- `--font-sans`: 'Outfit' with fallbacks
- Imported via Google Fonts

#### Font Sizes
- `--font-size-h1`: 40px
- `--font-size-h2`: 32px
- `--font-size-h3`: 24px
- `--font-size-h4`: 20px
- `--font-size-h5`: 18px
- `--font-size-h6`: 18px
- `--font-size-body`: 16px

#### Font Weights
- `--font-weight-regular`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600

#### Line Heights
- `--line-height-h1`: 1.2
- `--line-height-h2`: 1.25
- `--line-height-h3`: 1.33
- `--line-height-h4`: 1.4
- `--line-height-h5`: 1.44
- `--line-height-h6`: 1.44
- `--line-height-body`: 1.5

#### Letter Spacing
- `--letter-spacing-h6`: 0.9px

## Usage

### In Components

Components can use these CSS variables directly:

```css
.my-component {
  background-color: var(--color-primary);
  color: white;
  font-family: var(--font-sans);
  font-size: var(--font-size-h1);
}
```

### In TypeScript/JSX

CSS variables work with inline styles:

```tsx
<div style={{ 
  backgroundColor: 'var(--color-primary)',
  fontFamily: 'var(--font-sans)'
}}>
  Content
</div>
```

## Storybook Integration

The Storybook preview imports `app/globals.css`, making all theme tokens available in all stories and components.

## Figma Style Guide

All values match the "Fjell" style guide from the Figma design:
- Colors extracted from the color palette
- Typography matches the heading scale (H1-H6)
- Font family matches "Outfit" used in the design
- Font weights match the specification (Regular, Medium, SemiBold)

