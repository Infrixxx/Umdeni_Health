import React, { createContext, useState, useContext } from 'react';

// Define the shape of our Context
type LanguageContextType = {
  language: 'English' | 'isiZulu';
  setLanguage: (lang: 'English' | 'isiZulu') => void;
};

// Create the Context with defaults
const LanguageContext = createContext<LanguageContextType>({
  language: 'English',
  setLanguage: () => {},
});

// The Provider Component (Wraps the app)
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'English' | 'isiZulu'>('English');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// A simple Hook to use the language anywhere
export const useLanguage = () => useContext(LanguageContext);
