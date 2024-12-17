import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const colors = theme === 'dark' ? '' : '';

  return { colors, currentTheme: theme, toggleTheme };
};

export default useTheme;
