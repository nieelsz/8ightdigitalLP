import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'Provas', href: '#projetos' },
  { name: 'Soluções', href: '#servicos' },
  { name: 'Quem Executa', href: '#sobre' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isOpen 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent py-4'
      )}
    >
      <Container className={cn(
        "flex items-center justify-between transition-all duration-300",
        isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
      )}>
        <a href="#" className="flex items-center gap-3 group" onClick={closeMenu}>
          <img 
            src="/projects/favicon.svg" 
            alt="Eight Digital" 
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          />
          <span className={cn(
            "text-xl font-bold tracking-tight leading-none transition-colors",
            isScrolled || isOpen ? "text-gray-900 group-hover:text-violet-700" : "text-white group-hover:text-violet-300"
          )}>
            Eight Digital
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <div className={cn(
            "flex items-center rounded-full px-6 py-2 backdrop-blur-sm mr-4 transition-colors",
            isScrolled ? "bg-gray-100/50 border border-gray-200" : "bg-white/10 border border-white/15"
          )}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors text-sm font-medium px-4 py-1",
                  isScrolled ? "text-gray-600 hover:text-violet-700" : "text-gray-200 hover:text-violet-300"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button 
            variant="primary" 
            size="sm" 
            href="#contato"
            className="rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-950/30 border-0"
          >
            Quero destravar
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled || isOpen ? "text-gray-900 hover:text-violet-700" : "text-white hover:text-violet-300"
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          'fixed inset-x-0 top-[64px] bottom-0 bg-gray-950 z-40 md:hidden transition-transform duration-300 ease-in-out border-t border-gray-900',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-6 space-y-6 h-full overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-gray-100 hover:text-violet-300 border-b border-gray-900 pb-4"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg shadow-violet-950/30" size="lg" onClick={closeMenu} href="#contato">
              Quero destravar
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
