import { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from './themes';

// создаём контекст
const ThemeContext = createContext(null);

// провайдер (обертка)
export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('dark');

    const theme = themeMode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// удобный хук
export const useTheme = () => useContext(ThemeContext);