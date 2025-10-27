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
    <div className="flex flex-col gap-2">
      <div 
        className="w-full aspect-square rounded-lg border border-gray-300" 
        style={{ backgroundColor: value }}
      />
      <p className={`font-[var(--font-sans)] text-sm font-medium ${isDark ? 'text-gray-800' : 'text-[var(--color-text-primary)]'}`}>
        {value}
      </p>
      <p className={`font-[var(--font-sans)] text-sm font-normal ${isDark ? 'text-gray-600' : 'text-[var(--color-text-secondary)]'}`}>
        {name}
      </p>
    </div>
  );
};

export const ColorPalette = () => {
  return (
    <div className="p-6 max-w-7xl">
      <h2 className="text-[32px] font-[var(--font-weight-semibold)] mb-8 text-[var(--color-text-primary)]">Color Palette</h2>
      
      <div className="mb-10">
        <h3 className="text-2xl font-[var(--font-weight-medium)] mb-4 text-[var(--color-text-primary)]">Primary Colors</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
          <ColorSwatch name="Primary" value="#6f7f6a" isDark={false} />
          <ColorSwatch name="Secondary" value="#8e6e53" isDark={false} />
          <ColorSwatch name="Tertiary" value="#9aa895" isDark={false} />
          <ColorSwatch name="Accent" value="#2e4a3b" isDark={false} />
          <ColorSwatch name="Quaternary" value="#b86f3d" isDark={false} />
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-[var(--font-weight-medium)] mb-4 text-[var(--color-text-primary)]">Neutral Colors</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
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

