import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Front Page', href: '#front-page', isAI: false },
    { label: 'The Story', href: '#story', isAI: false },
    { label: 'Expertise', href: '#expertise', isAI: false },
    { label: 'Experience', href: '#experience', isAI: false },
    { label: 'Projects', href: '#projects', isAI: false },
    { label: 'Tech Column', href: '#tech-column', isAI: true },
    { label: 'Resume', href: '#resume', isAI: false },
    { label: 'Contact', href: '#footer', isAI: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-paper/95 dark:bg-[rgb(28,26,24)]/95 backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      {/* Top decorative border - newspaper masthead style */}
      <div className={`h-0.5 bg-gradient-to-r from-transparent via-accent dark:via-gold to-transparent transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="newspaper-container">
        <div className="flex items-center h-14">
          {/* Logo / Brand - Newspaper masthead style */}
          <motion.a
            href="#front-page"
            className="flex items-center gap-1.5 group shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-accent dark:text-gold">
              The
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              Portfolio Times
            </span>
          </motion.a>

          {/* Desktop Menu - Clean, professional newspaper style */}
          <div className="hidden lg:flex items-center ml-8">
            {/* Decorative left border */}
            <div className="h-6 w-px bg-ink/10 dark:bg-gold/20 mr-4" />
            
            <div className="flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 font-accent text-[11px] uppercase tracking-wider 
                             text-ink/60 dark:text-ink/50 hover:text-accent dark:hover:text-gold 
                             transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="relative">
                    {item.label}
                    {/* AI indicator for Tech Column - subtle newspaper style */}
                    {item.isAI && (
                      <span className="inline-flex items-center ml-1.5 relative">
                        <Sparkles className="w-3 h-3 text-accent dark:text-gold" />
                        {/* Subtle glow effect */}
                        <span className="absolute inset-0 animate-pulse">
                          <Sparkles className="w-3 h-3 text-accent/40 dark:text-gold/40 blur-sm" />
                        </span>
                      </span>
                    )}
                  </span>
                  {/* Underline on hover */}
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-accent dark:bg-gold 
                                   scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
            </div>
            
            {/* Decorative separator */}
            <div className="h-6 w-px bg-ink/10 dark:bg-gold/20 mx-3" />
            
            <ThemeToggle />
          </div>

          {/* Spacer to push mobile menu to right */}
          <div className="flex-1 lg:hidden" />

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-ink/5 dark:hover:bg-gold/10 rounded transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-ink" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-ink" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-ink/10 dark:border-gold/20">
                <div className="flex flex-col">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-3 font-accent text-xs uppercase tracking-wider 
                                 text-ink/60 dark:text-ink/50 hover:text-accent dark:hover:text-gold 
                                 hover:bg-accent/5 dark:hover:bg-gold/5 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.label}
                      {item.isAI && (
                        <span className="inline-flex items-center relative">
                          <Sparkles className="w-3 h-3 text-accent dark:text-gold" />
                          <span className="absolute inset-0 animate-pulse">
                            <Sparkles className="w-3 h-3 text-accent/40 dark:text-gold/40 blur-sm" />
                          </span>
                        </span>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Bottom decorative border when scrolled */}
      <div className={`h-px bg-gradient-to-r from-transparent via-ink/10 dark:via-gold/20 to-transparent 
                       transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
    </motion.nav>
  );
}
