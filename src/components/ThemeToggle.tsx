import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark

  useEffect(() => {
    // Check if there's a saved preference, otherwise default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDarkMode = savedTheme === 'dark';
      setIsDark(isDarkMode);
      document.documentElement.classList.toggle('dark', isDarkMode);
    } else {
      // Default to dark mode
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-full hover:bg-ink/5 dark:hover:bg-gold/10 transition-colors duration-300 relative"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-ink" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-ink" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
