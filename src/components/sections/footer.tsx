import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#F0FAFB] overflow-hidden">
      {/* Decorative Wave Shapes */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_1-18.png" 
          alt="shape" 
          className="w-auto h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_2-19.png" 
          alt="shape" 
          className="w-auto h-auto"
        />
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/footerShape1_3-20.png" 
          alt="shape" 
          className="w-auto h-auto opacity-50"
        />
      </div>

      <div className="container relative z-10 pt-[100px] pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/logo-1.png" 
                alt="Talqeeny Logo" 
                width={180} 
                height={50}
                className="h-auto"
              />
            </div>
            <p className="text-[#5E6266] text-[15px] leading-[1.8] font-medium font-inter">
              La seule plateforme où vos enfants apprennent et mémorisent réellement en direct, pendant la séance avec le professeur. Plus besoin de batailles à la maison : Talqeeny transforme l&apos;apprentissage de l&apos;arabe et du Coran en un moment efficace, ludique et serein.
            </p>
          </div>

          {/* Pages Links */}
          <div className="lg:pl-12">
            <h4 className="text-[20px] font-bold text-[#003049] mb-8 font-display relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-[2px] after:bg-[#29ABE2]">
              Pages
            </h4>
            <ul className="space-y-4">
              {['Accueil', 'Arabe', 'Nourania', 'Coran', 'Qui Sommes-Nous', 'Contactez-Nous'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#5E6266] hover:text-[#29ABE2] transition-colors font-medium text-[15px] font-inter">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Util Links */}
          <div className="lg:pl-8">
            <h4 className="text-[20px] font-bold text-[#003049] mb-8 font-display relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-[2px] after:bg-[#29ABE2]">
              Liens Utiles
            </h4>
            <ul className="space-y-4">
              {['Politique De Confidentialité', 'Conditions Générales D\'utilisation', 'Conditions Générales De Ventes'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#5E6266] hover:text-[#29ABE2] transition-colors font-medium text-[15px] font-inter">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:pl-8">
            <h4 className="text-[20px] font-bold text-[#003049] mb-8 font-display relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-[2px] after:bg-[#29ABE2]">
              Suivez-Nous
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-[#5E6266] hover:text-[#29ABE2] transition-colors font-medium text-[15px] font-inter">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#5E6266] hover:text-[#29ABE2] transition-colors font-medium text-[15px] font-inter">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#5E6266] hover:text-[#29ABE2] transition-colors font-medium text-[15px] font-inter">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#5E6266] hover:text-[#29ABE2] transition-colors font-medium text-[15px] font-inter">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-[80px] pt-8 border-t border-[#E5E7EB] flex flex-col md:row items-center justify-between gap-6">
          <p className="text-[#5E6266] text-[14px]">
            © 2025 Talqeeny.
          </p>
          <p className="text-[#003049] font-semibold text-[15px] font-display">
            Talqeeny : Apprendre comme hier avec les outils d&apos;aujourd&apos;hui
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#003049] hover:text-[#29ABE2] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-[#003049] hover:text-[#29ABE2] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-[#003049] hover:text-[#29ABE2] transition-colors">
              <Send size={18} className="rotate-[-20deg]" />
            </a>
            <a href="#" className="text-[#003049] hover:text-[#29ABE2] transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[999] w-[60px] h-[60px] flex items-center justify-center bg-[#25D366] rounded-full shadow-[0px_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300"
      >
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/whatsapp_icon-8.png" 
          alt="WhatsApp" 
          className="w-10 h-10"
        />
      </a>
    </footer>
  );
};

export default Footer;