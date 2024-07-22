import React, { useState, useEffect } from 'react';
import FontSelector from './FontSelector';
import FontWeightSelector from './FontWeightSelector';

const TextEditor: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [selectedFontFamily, setSelectedFontFamily] = useState<string>('Arial');
  const [selectedFontWeight, setSelectedFontWeight] = useState<number>(400);
  const [isItalic, setIsItalic] = useState<boolean>(false);

  // Load saved text and font settings from localStorage on component mount
  useEffect(() => {
    const savedText = localStorage.getItem('text') || '';
    const savedFontFamily = localStorage.getItem('fontFamily') || 'Arial';
    const savedFontWeight = parseInt(localStorage.getItem('fontWeight') || '400', 10);
    const savedIsItalic = localStorage.getItem('isItalic') === 'true';

    setText(savedText);
    setSelectedFontFamily(savedFontFamily);
    setSelectedFontWeight(savedFontWeight);
    setIsItalic(savedIsItalic);
  }, []);

  // Save text and font settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('text', text);
    localStorage.setItem('fontFamily', selectedFontFamily);
    localStorage.setItem('fontWeight', selectedFontWeight.toString());
    localStorage.setItem('isItalic', isItalic.toString());
  }, [text, selectedFontFamily, selectedFontWeight, isItalic]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleFontFamilyChange = (fontFamily: string) => {
    setSelectedFontFamily(fontFamily);
  };

  const handleFontWeightChange = (fontWeight: number) => {
    setSelectedFontWeight(fontWeight);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };

  return (
    <div>
      <div>
        <FontSelector
          selectedFontFamily={selectedFontFamily}
          onFontFamilyChange={handleFontFamilyChange}
        />
        <FontWeightSelector
          selectedFontFamily={selectedFontFamily}
          selectedFontWeight={selectedFontWeight}
          onFontWeightChange={handleFontWeightChange}
          isItalic={isItalic}
        />
        <button onClick={handleItalicToggle} disabled={!isItalic}>
          {isItalic ? 'Italic On' : 'Italic Off'}
        </button>
      </div>
      <div>
        <textarea
          value={text}
          onChange={handleTextChange}
          rows={10}
          style={{
            fontFamily: selectedFontFamily,
            fontWeight: selectedFontWeight,
            fontStyle: isItalic ? 'italic' : 'normal',
          }}
          data-testid="text-editor-textarea"
        />
      </div>
    </div>
  );
};

export default TextEditor;
