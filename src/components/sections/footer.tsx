import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

/**
 * FooterSection Component
 * Clones the footer section of Talqeeny with pixel-perfect accuracy.
 * Features: Company logo, description, categorized links, social icons, and floating WhatsApp.
 */

const FooterSection = () => {
  // Navigation categories based on the content and screenshots
  const categories = [
    {
      title: "Pages",
      links: [
        { label: "Accueil", href: "https://www.talqeeny.com" },
        { label: "Arabe", href: "/course/arabic" },
        { label: "Nourania", href: "/course/nouraniya" },
        { label: "Coran", href: "/course/coran" },
        { label: "Qui Sommes-Nous", href: "#" },
        { label: "Contactez-Nous", href: "https://www.talqeeny.com/contact-us" },
      ]
    },
    {
      title: "Liens Utiles",
      links: [
        { label: "Politique De Confidentialité", href: "#" },
        { label: "Conditions Générales D'utilisation", href: "#" },
        { label: "Conditions Générales De Ventes", href: "#" },
      ]
    },
    {
      title: "Suivez-Nous",
      links: [
        { label: "Facebook", href: "#", icon: <Facebook size={16} /> },
        { label: "Instagram", href: "#", icon: <Instagram size={16} /> },
        { label: "TikTok", href: "#", isTiktok: true },
        { label: "YouTube", href: "#", icon: <Youtube size={16} /> },
      ]
    }
  ];

  return (
    <footer className="relative bg-[#f0fafb] overflow-hidden pt-[80px] pb-0 font-sans">
      {/* Background Shapes as seen in assets and screenshots */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-40">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_1-5.png" 
          alt="shape" 
          className="w-auto h-auto max-w-full"
        />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none opacity-40">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_2-6.png" 
          alt="shape"
          className="w-auto h-auto max-w-full"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-20">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_3-7.png" 
          alt="shape"
          className="w-auto h-auto max-w-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-[60px]">
          
          {/* Company Info Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <a href="https://www.talqeeny.com">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo-1.png" 
                  alt="Talqeeny" 
                  width={180}
                  className="h-auto"
                />
              </a>
            </div>
            <p className="text-[#6c757d] text-[15px] leading-[1.6] max-w-[320px]">
              La seule plateforme où vos enfants apprennent et mémorisent réellement en direct, pendant la séance avec le professeur. Plus besoin de batailles à la maison : Talqeeny transforme l'apprentissage de l'arabe et du Coran en un moment efficace, ludique et serein.
            </p>
          </div>

          {/* Links Columns */}
          {categories.map((cat, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="text-[#0b414c] text-[20px] font-bold mb-[30px] relative inline-block">
                {cat.title}
                <span className="absolute left-0 -bottom-2 w-8 h-[2px] bg-[#29bdad]"></span>
                <span className="absolute left-10 -bottom-2 w-12 h-[2px] bg-[#dee2e6]"></span>
              </h4>
              <ul className="space-y-4">
                {cat.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={link.href} 
                      className="text-[#6c757d] hover:text-[#29bdad] text-[15px] transition-colors duration-300 flex items-center gap-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#dee2e6] py-8 flex flex-col md:flex-row justify-between items-center text-[14px]">
          <div className="text-[#6c757d] mb-4 md:mb-0">
            © 2025 Talqeeny.
          </div>
          <div className="text-[#0b414c] font-semibold text-center md:text-left mb-4 md:mb-0">
            Talqeeny : Apprendre comme hier avec les outils d'aujourd'hui
          </div>
          <div className="flex items-center space-x-5">
            <a href="#" className="text-[#0b414c] hover:text-[#29bdad] transition-colors">
              <Facebook size={18} fill="currentColor" />
            </a>
            <a href="#" className="text-[#0b414c] hover:text-[#29bdad] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-[#0b414c] hover:text-[#29bdad] transition-colors">
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.76-.56-1.32-1.35-1.78-2.14v6.52c.07 1.84-.46 3.73-1.66 5.13-1.4 1.64-3.64 2.55-5.78 2.4-2.58-.21-5-2.22-5.59-4.78-.69-2.92.79-6.19 3.51-7.24 1.05-.41 2.2-.5 3.32-.3v4.07c-1.12-.24-2.35.08-3.13.93-.84.92-.81 2.45-.04 3.42.86.96 2.37 1.15 3.38.45 1-.69 1.25-2.07 1.25-3.21V.02z"/>
              </svg>
            </a>
            <a href="#" className="text-[#0b414c] hover:text-[#29bdad] transition-colors">
              <Youtube size={18} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/33756882188" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[1000] hover:scale-110 transition-transform duration-300"
      >
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/whatsapp_icon-1.png" 
          alt="Contact us on WhatsApp" 
          width={60} 
          height={60}
          className="drop-shadow-lg"
        />
      </a>
    </footer>
  );
};

export default FooterSection;