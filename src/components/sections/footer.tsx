import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/33756882188"
        target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-widget"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/whatsapp_icon-1.png"
            alt="WhatsApp"
            width={60}
            height={60}
            className="w-full h-full object-contain"
          />
        </a>

        <footer className="footer-section bg-[#FFFFFF] pt-20 pb-0 relative overflow-hidden">
          {/* Background Decorative Shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <div className="absolute -left-[5%] bottom-[10%] opacity-100">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_1-5.png"
                alt="forme"
                width={450}
                height={450}
                className="object-contain"
              />
            </div>
            <div className="absolute -right-[5%] bottom-[5%] opacity-100">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_2-6.png"
                alt="forme"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          <div className="container relative z-10 px-6 mx-auto max-w-[1240px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Company Info Column */}
              <div className="space-y-6">
                <a href="/" className="inline-block">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo-1.png"
                    alt="Logo Talqeeny"
                  width={180}
                  height={50}
                  className="h-auto"
                />
              </a>
              <p className="text-[#6B7280] text-[16px] leading-[1.6] max-w-[320px]">
                La seule plateforme où vos enfants apprennent et mémorisent réellement en direct, pendant la séance avec le professeur. Plus besoin de batailles à la maison : Talqeeny transforme l'apprentissage de l'arabe et du Coran en un moment efficace, ludique et serein.
              </p>
            </div>

            {/* Pages Links Column */}
            <div>
              <h6 className="footer-header text-[#0B485B] font-bold text-[20px] mb-8 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#2DB9B0] pb-2">
                Pages
              </h6>
              <ul className="space-y-4">
                <li><a href="/" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Accueil</a></li>
                <li><a href="/course/arabic" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Arabe</a></li>
                <li><a href="/course/nouraniya" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Nourania</a></li>
                <li><a href="/course/coran" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Coran</a></li>
                <li><a href="#" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Qui Sommes-Nous</a></li>
                <li><a href="/contact-us" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Contactez-Nous</a></li>
              </ul>
            </div>

            {/* Useful Links Column */}
            <div>
              <h6 className="footer-header text-[#0B485B] font-bold text-[20px] mb-8 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#2DB9B0] pb-2">
                Liens Utiles
              </h6>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Politique De Confidentialité</a></li>
                <li><a href="#" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Conditions Générales D'utilisation</a></li>
                <li><a href="#" className="text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Conditions Générales De Ventes</a></li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div>
              <h6 className="footer-header text-[#0B485B] font-bold text-[20px] mb-8 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#2DB9B0] pb-2">
                Suivez-Nous
              </h6>
              <ul className="space-y-4">
                <li><a href="#" className="flex items-center gap-2 text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Facebook</a></li>
                <li><a href="#" className="flex items-center gap-2 text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">Instagram</a></li>
                <li><a href="#" className="flex items-center gap-2 text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">TikTok</a></li>
                <li><a href="#" className="flex items-center gap-2 text-[#6B7280] hover:text-[#2DB9B0] transition-colors text-[16px]">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#DEE2E6] py-8 relative z-10">
          <div className="container px-6 mx-auto flex flex-col md:row items-center justify-between text-[16px] text-[#6B7280] gap-4 md:flex-row">
            <p>© {currentYear} Talqeeny.</p>
            <p className="font-semibold text-[#0B485B]">
              Talqeeny : Apprendre comme hier avec les outils d’aujourd’hui
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#0B485B] hover:text-[#2DB9B0]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#0B485B] hover:text-[#2DB9B0]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#0B485B] hover:text-[#2DB9B0]" aria-label="TikTok">
                <Music2 size={20} />
              </a>
              <a href="#" className="text-[#0B485B] hover:text-[#2DB9B0]" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;