import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { label } from 'framer-motion/client';
import { hrtime } from 'process';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Front Page', href: '#front-page' },
    { label: 'The Story', href: '#story' },
    { label: 'Special Report', href: '#expertise' },
    {label:'Professional Bylines', href:'#experience'},
    { label: 'Featured Stories', href: '#projects' },
    {label:'Resume', href:'#resume'},
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/95 border-b border-ink/10 backdrop-blur-sm">
      <div className="newspaper-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-display text-xl font-bold">The Portfolio Times</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-ink/80 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md hover:bg-ink/5"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-ink" />
              ) : (
                <Menu className="h-6 w-6 text-ink" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-ink/10">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-body text-ink/80 hover:text-accent hover:bg-ink/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}