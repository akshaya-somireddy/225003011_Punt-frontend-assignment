import React from 'react';

interface FontSelectorProps {
  selectedFontFamily: string;
  onFontFamilyChange: (fontFamily: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ selectedFontFamily, onFontFamilyChange }) => {
  const fontFamilies = ['Arial', 'Verdana', 'Helvetica']; // Example list of font families

  const handleFontFamilyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFont = event.target.value;
    onFontFamilyChange(selectedFont);
  };

  return (
    <select value={selectedFontFamily} onChange={handleFontFamilyChange}>
      {fontFamilies.map((fontFamily) => (
        <option key={fontFamily} value={fontFamily}>
          {fontFamily}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
