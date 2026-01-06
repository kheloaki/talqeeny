"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navLinks = [
      { name: 'Pour qui ?', href: '#pour-qui' },
      { name: 'Programme', href: '#programme' },
      { name: 'Niveaux', href: '#niveaux' },
      { name: 'Tarifs', href: '#pricing-plans' },
      { name: 'FAQ', href: '#faq' },
    ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          isSticky ? 'bg-white shadow-soft-ui py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="https://www.talqeeny.com" className="block">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo-1.png" 
                  alt="Talqeeny Logo" 
                  width={180} 
                  height={50}
                  className="w-[140px] md:w-[180px] h-auto object-contain"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-[#003049] font-inter font-medium text-[15px] hover:text-[#29ABE2] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button & Hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <a 
                  href="https://www.talqeeny.com/login" 
                  className="bg-[#29ABE2] text-white px-8 py-3 rounded-full font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#29ABE2]/20"
                >
                  Se connecter
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 text-[#003049]"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[2000] transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <aside 
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#29ABE2] z-[2001] transition-transform duration-300 ease-in-out xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-12">
            <a href="https://www.talqeeny.com">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo_blanc-2.png" 
                alt="Talqeeny Logo White" 
                width={90} 
                height={30}
                className="object-contain"
              />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-grow">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white font-poppins font-semibold text-lg hover:translate-x-2 transition-transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 pt-8 border-t border-white/20">
            <a 
              href="https://www.talqeeny.com/login" 
              className="bg-white text-[#29ABE2] w-full text-center py-4 rounded-full font-inter font-bold text-[16px] flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              Se connecter
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;