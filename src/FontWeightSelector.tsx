import React, { useEffect, useState } from 'react';

interface FontWeightSelectorProps {
  selectedFontFamily: string;
  selectedFontWeight: number;
  onFontWeightChange: (fontWeight: number) => void;
  isItalic: boolean;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({
  selectedFontFamily,
  selectedFontWeight,
  onFontWeightChange,
  isItalic,
}) => {
  const [fontWeights, setFontWeights] = useState<number[]>([400, 700]); // Example list of font weights

  useEffect(() => {
    // Simulate fetching available font weights based on selected font family
    // In a real application, you would fetch this data from a JSON file or an API
    if (selectedFontFamily === 'Arial') {
      setFontWeights([100, 400, 700]);
    } else if (selectedFontFamily === 'Verdana') {
      setFontWeights([400, 600, 800]);
    } else if (selectedFontFamily === 'Helvetica') {
      setFontWeights([300, 500, 700]);
    }
  }, [selectedFontFamily]);

  const handleFontWeightChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWeight = parseInt(event.target.value, 10);
    onFontWeightChange(selectedWeight);
  };

  return (
    <select value={selectedFontWeight} onChange={handleFontWeightChange}>
      {fontWeights.map((weight) => (
        <option key={weight} value={weight} disabled={!isItalic && weight === 100}>
          {weight}
        </option>
      ))}
    </select>
  );
};

export default FontWeightSelector;
