import React, { useState, useEffect } from 'react';
import fontData from './fontData.json';

interface Font {
  [variant: string]: string; // variant can be "400", "400italic", etc.
}

interface FontFamily {
  [family: string]: Font;
}

const App: React.FC = () => {
  const [selectedFontFamily, setSelectedFontFamily] = useState<string>('Abhaya Libre');
  const [selectedVariant, setSelectedVariant] = useState<string>('400');
  const [fonts, setFonts] = useState<FontFamily | null>(null);

  useEffect(() => {
    // Simulate fetching fonts from fontData.json
    setFonts(fontData);
  }, []);

  const handleFontFamilyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFontFamily(event.target.value);
    // Reset variant when font family changes to ensure consistency
    setSelectedVariant('400');
  };

  const handleVariantChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariant(event.target.value);
  };

  return (
    <div>
      <h1>Font Selector</h1>
      {fonts && (
        <>
          <div>
            <label htmlFor="fontFamilySelect">Select Font Family:</label>
            <select
              id="fontFamilySelect"
              value={selectedFontFamily}
              onChange={handleFontFamilyChange}
            >
              {Object.keys(fonts).map((family) => (
                <option key={family} value={family}>
                  {family}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="fontVariantSelect">Select Font Variant:</label>
            <select
              id="fontVariantSelect"
              value={selectedVariant}
              onChange={handleVariantChange}
            >
              {fonts[selectedFontFamily] &&
                Object.keys(fonts[selectedFontFamily]).map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <p>Selected Font Family: {selectedFontFamily}</p>
            <p>Selected Variant: {selectedVariant}</p>
            <p>
              <a
                href={fonts[selectedFontFamily][selectedVariant]}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Font
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
