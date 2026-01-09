"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navLinks = [
      { label: "Accueil", href: "/" },
      { label: "Arabe", href: "/course/arabic" },
      { label: "Nourania", href: "/course/nouraniya" },
      { label: "Coran", href: "/course/coran" },
      { label: "Clavier", href: "/clavier" },
      { label: "Contactez-nous", href: "https://www.talqeeny.com/contact-us" },
    ];

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo-1.png";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          isSticky ? "bg-white shadow-md py-2" : "bg-white lg:bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
                <a href="https://www.talqeeny.com" className="block">
                  <Image
                    src={logoUrl}
                    alt="Logo Talqeeny"
                    width={180}
                    height={50}
                    className="w-[140px] lg:w-[180px] h-auto"
                    priority
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:block">
                <ul className="flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#0B485B] font-medium text-[15px] hover:text-[#2DB9B0] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <a
                    href="https://www.talqeeny.com/login"
                    className="inline-flex items-center justify-center gap-2 bg-[#33C6E5] hover:bg-[#2DB9B0] text-white font-bold text-[16px] px-8 py-3 rounded-full transition-all duration-300 group"
                  >
                    Se connecter
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden ml-4 p-2 text-[#0B485B]"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-[2000] transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Sidebar Content */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-[#33C6E5] z-[2001] transform transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <a href="https://www.talqeeny.com">
                 <Image
                    src={logoUrl}
                    alt="Logo Talqeeny"
                  width={120}
                  height={40}
                  className="brightness-0 invert"
                />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="mb-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white text-lg font-semibold block py-2 hover:opacity-80 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-white/20">
            <a
              href="https://www.talqeeny.com/login"
              className="flex items-center justify-center gap-2 bg-white text-[#33C6E5] font-bold text-[16px] w-full py-4 rounded-full transition-all duration-300"
            >
              Se connecter
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;