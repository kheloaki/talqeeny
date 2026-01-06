"use client";

import React from "react";
import Image from "next/image";

/**
 * WhyItWorksSection Component
 * 
 * Featuring:
 * - A large golden yellow container with rounded corners (40px)
 * - Central video player with custom poster
 * - Four feature cards with specific icons and layout
 * - Fully responsive mapping as per design instructions
 */
const WhyItWorksSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1320px]">
        {/* Main Golden Container */}
        <div className="bg-[#F9BE2F] rounded-[40px] px-8 py-12 md:px-16 md:py-20 relative overflow-hidden">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#003049] font-display">
              Pourquoi Talqeeny fonctionne
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Left Features */}
            <div className="flex flex-col gap-12 order-2 md:order-1">
              {/* Méthode live */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right group">
                  <div className="mb-4">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/live_1-1.png" 
                      alt="Icône méthode live" 
                      width={80} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-[#003049] mb-3 font-display">
                      Méthode live
                    </h4>
                    <p className="text-[#003049]/80 text-[16px] leading-[1.6] max-w-[280px]">
                      Apprentissage/mémorisation réalisés pendant le cours (pas seulement à la maison).
                    </p>
                  </div>
                </div>

                {/* Programme */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right group">
                  <div className="mb-4">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/programme_1-2.png" 
                      alt="Icône programme" 
                      width={80} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-[#003049] mb-3 font-display">
                      Programme
                    </h4>
                    <p className="text-[#003049]/80 text-[16px] leading-[1.6] max-w-[280px]">
                      À la fois immersif et bilingue FR–AR en fonction du niveau de l’étudiant, progression spiralaire et communicative.
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Video Player */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-[4/3.5] bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <video 
                    className="w-full h-full object-cover"
                    poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/poster_vdjs-11.png"
                    controls
                    playsInline
                  >
                      <source src="https://www.talqeeny.com/assets/talqeeny.mp4" type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                </div>
              </div>

              {/* Right Features */}
              <div className="flex flex-col gap-12 order-3">
                {/* Outils */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <div className="mb-4">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/outils_1-3.png" 
                      alt="Icône outils" 
                      width={80} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-[#003049] mb-3 font-display">
                      Outils
                    </h4>
                    <p className="text-[#003049]/80 text-[16px] leading-[1.6] max-w-[280px]">
                      Classes en direct, rappels/sons via la plateforme Talqeeny et WhatsApp, quiz & cartes pour la pratique.
                    </p>
                  </div>
                </div>

                {/* Approche */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <div className="mb-4">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/approche_1-4.png" 
                      alt="Icône approche" 
                      width={80} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                <div>
                  <h4 className="text-2xl font-semibold text-[#003049] mb-3 font-display">
                    Approche
                  </h4>
                  <p className="text-[#003049]/80 text-[16px] leading-[1.6] max-w-[280px]">
                    Culturelle et coranique progressive, adaptée à tous les profils de francophones.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Shapes - Decorative (as seen in screenshots) */}
        <div className="absolute left-[5%] bottom-[5%] pointer-events-none opacity-20">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
            <path d="M10 50 Q 50 10 90 50 Q 50 90 10 50" stroke="#F9BE2F" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <div className="absolute right-[5%] top-[10%] pointer-events-none opacity-20 transform rotate-45">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" rx="12" fill="#29ABE2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;