"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MoveRight } from "lucide-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "https://www.talqeeny.com" },
    { name: "Arabe", href: "/course/arabic" },
    { name: "Nourania", href: "/course/nouraniya" },
    { name: "Coran", href: "/course/coran" },
    { name: "Contactez-nous", href: "https://www.talqeeny.com/contact-us" },
  ];

  return (
    <>
      {/* Header Section */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          isSticky ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="https://www.talqeeny.com">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo-1.png"
                  alt="Talqeeny Logo"
                  width={180}
                  height={50}
                  className="h-auto w-[150px] md:w-[180px]"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-medium text-[#0b414c] hover:text-[#29bdad] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA and Hamburger */}
            <div className="flex items-center">
              <div className="hidden md:block">
                <Link
                  href="https://www.talqeeny.com/login"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#29bdad] text-white rounded-[20px] font-semibold text-[16px] hover:bg-[#17a2b8] transition-all group"
                >
                  Se connecter
                  <MoveRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Hamburger Button */}
              <button
                className="xl:hidden ml-6 text-[#0b414c]"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[2000] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-[#17a2b8] z-[2001] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <Link href="https://www.talqeeny.com" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo_blanc-2.png"
                alt="Talqeeny Logo White"
                width={120}
                height={34}
              />
            </Link>
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-white/10 pb-2">
                  <Link
                    href={link.href}
                    className="text-white text-[18px] font-medium block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10">
            <Link
              href="https://www.talqeeny.com/login"
              className="flex items-center justify-center w-full py-3 bg-white text-[#17a2b8] rounded-[20px] font-semibold hover:bg-[#e6f7f5] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Se connecter
              <MoveRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump due to fixed header */}
      <div className="h-[80px]" />
    </>
  );
};

export default Header;