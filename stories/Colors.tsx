import './colors.css';

export interface ColorSwatchProps {
  /** Color name */
  name: string;
  /** Color hex value */
  value: string;
  /** Whether this is a dark color (affects text color) */
  isDark?: boolean;
}

const ColorSwatch = ({ name, value, isDark = false }: ColorSwatchProps) => {
  return (
    <div className="storybook-color-swatch">
      <div 
        className="storybook-color-square" 
        style={{ backgroundColor: value }}
      />
      <p className={`storybook-color-value ${isDark ? 'storybook-color-value--dark' : ''}`}>
        {value}
      </p>
      <p className={`storybook-color-name ${isDark ? 'storybook-color-name--dark' : ''}`}>
        {name}
      </p>
    </div>
  );
};

export const ColorPalette = () => {
  return (
    <div className="storybook-color-palette">
      <h2 className="storybook-color-palette-title">Color Palette</h2>
      
      <div className="storybook-color-section">
        <h3 className="storybook-color-section-title">Primary Colors</h3>
        <div className="storybook-color-grid">
          <ColorSwatch name="Primary" value="#6f7f6a" isDark={false} />
          <ColorSwatch name="Secondary" value="#8e6e53" isDark={false} />
          <ColorSwatch name="Tertiary" value="#9aa895" isDark={false} />
          <ColorSwatch name="Accent" value="#2e4a3b" isDark={false} />
          <ColorSwatch name="Quaternary" value="#b86f3d" isDark={false} />
        </div>
      </div>
      
      <div className="storybook-color-section">
        <h3 className="storybook-color-section-title">Neutral Colors</h3>
        <div className="storybook-color-grid">
          <ColorSwatch name="Neutral Light" value="#f7f3ea" isDark={false} />
          <ColorSwatch name="Neutral Lighter" value="#eae2d3" isDark={false} />
          <ColorSwatch name="Neutral Medium" value="#dce8ee" isDark={false} />
          <ColorSwatch name="Neutral Dark" value="#7a848c" isDark={true} />
          <ColorSwatch name="Neutral Darker" value="#2c2a28" isDark={true} />
          <ColorSwatch name="Neutral Darkest" value="#2b2f31" isDark={true} />
        </div>
      </div>
    </div>
  );
};

