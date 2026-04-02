import { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme, accentColors } from './themes';

// создаём контекст
const ThemeContext = createContext(null);

// провайдер (обертка)
export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('dark');
    const [accentKey, setAccentKey] = useState('blue');

    const baseTheme = themeMode === 'dark' ? darkTheme : lightTheme;
    const theme = {
        ...baseTheme,
        accent: accentColors[accentKey]
    }

    return (
        <ThemeContext.Provider value={{ theme, themeMode, setThemeMode, accentKey, setAccentKey }}>
            {children}
        </ThemeContext.Provider>
    );
};

// удобный хук
export const useTheme = () => useContext(ThemeContext);