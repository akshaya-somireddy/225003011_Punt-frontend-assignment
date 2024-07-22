# Text Editor App

This project is a simple text editor application implemented in React with TypeScript. It allows users to change the font family, font weight, and italic style of the entire text in a textarea. The font selector displays a list of Google Fonts, and the font weight selector shows appropriate weights supported for the selected font family. The italic toggle is active only if the selected font family and weight combination supports italic.

FEATURES

Font Family Selector: Choose from a list of Google Fonts.

Font Weight Selector: Select appropriate font weights available for the chosen font family.

Italic Toggle: Activate or deactivate italic style for the selected font.

Auto Save: Saves text and font family locally in the browser. On page reload, the last saved content loads with the correct font family and variant selected in the dropdown.

Dynamic Variant Selection: Handles cases where a selected variant (weight + italic) is not available in the newly selected font family by finding the closest matching variant.

 **Installation**

To run this project locally, follow these steps:

1. **Clone the repository**:

   git clone https://github.com/your-username/text-editor.git
   cd text-editor
   

2. **Install dependencies**:

    npm install
  

 

After completing the installation steps, you can start the application with:


   npm start


The app will open in your default browser at `http://localhost:3000`.

**Assumptions**

The application assumes that font data (`fontData.json`) is correctly structured with all necessary font families and their variants.
It assumes that the provided font data covers a sufficient range of font weights and italic styles for each font family.
It assumes that localStorage is available and persistent across browser sessions for auto-saving functionality.

 **Improvements**

Given more time, here are improvements that could be made:

Error Handling: Improve error handling for cases where selected font variants are not available.
Enhanced UI/UX: Implement better styling and user interface components.
Backend Integration: Replace localStorage with a backend API for storing user preferences.
Accessibility: Ensure the application is accessible to all users, including screen readers and keyboard navigation.



