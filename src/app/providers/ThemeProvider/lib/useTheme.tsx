import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult{
    onToggleTheme: () => void;
    theme: Theme
}
export function useTheme():useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const onToggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, onToggleTheme };
}
