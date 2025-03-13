import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-ink/5 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="w-6 h-6 text-ink" />
      ) : (
        <Sun className="w-6 h-6 text-ink" />
      )}
    </button>
  );
}