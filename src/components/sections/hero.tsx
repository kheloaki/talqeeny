import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * Hero component for Talqeeny.
 * Featuring the clear, playful aesthetic with rounded corners and organic shapes.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 md:pt-32 pb-0">
      {/* Soft rounded light blue background container */}
      <div className="container mx-auto px-6">
        <div className="relative bg-[#F0FAFB] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-20 overflow-hidden min-h-[550px] flex items-center">
          
            {/* Decorative Shapes */}
            <div className="absolute top-10 left-10 w-24 h-24 pointer-events-none hidden md:block">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_1-3.png" 
                alt="forme décorative"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
            <div className="absolute bottom-10 left-1/2 w-32 h-32 pointer-events-none hidden lg:block">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_2-4.png" 
                alt="forme décorative"
                className="w-full h-full object-contain opacity-60"
              />
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="max-w-2xl">
                  <h1 className="text-[40px] md:text-[54px] font-bold text-[#003049] leading-[1.1] mb-6 font-poppins">
                    Cours de Coran en ligne : Apprenez, Récitez et Mémorisez
                  </h1>
                  <p className="text-[16px] md:text-[18px] text-[#5E6266] leading-[1.7] font-inter mb-6">
                    Rejoignez une communauté passionnée et progressez sereinement dans votre apprentissage du Coran. Professeurs certifiés, pédagogie adaptée et suivi personnalisé pour tous les niveaux.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-[#5E6266] font-inter">
                      <div className="w-5 h-5 rounded-full bg-[#29ABE2]/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#29ABE2]"></div>
                      </div>
                      Professeurs certifiés et expérimentés
                    </li>
                    <li className="flex items-center gap-2 text-[#5E6266] font-inter">
                      <div className="w-5 h-5 rounded-full bg-[#29ABE2]/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#29ABE2]"></div>
                      </div>
                      Groupes ultra-réduits ou cours individuels
                    </li>
                    <li className="flex items-center gap-2 text-[#5E6266] font-inter">
                      <div className="w-5 h-5 rounded-full bg-[#29ABE2]/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#29ABE2]"></div>
                      </div>
                      Horaires flexibles adaptés à votre emploi du temps
                    </li>
                  </ul>
                </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="#pricing-plans" 
                        className="inline-flex items-center justify-center gap-3 bg-[#29ABE2] hover:bg-[#2399cc] text-white px-8 py-4 rounded-full font-semibold text-[16px] transition-all duration-300 transform hover:scale-105 shadow-md font-inter group whitespace-nowrap"
                      >
                          Réserver une séance gratuite
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href="#how-it-works" 
                        className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#29ABE2] text-[#29ABE2] hover:bg-[#F0FAFB] px-8 py-4 rounded-full font-semibold text-[16px] transition-all duration-300 transform hover:scale-105 font-inter whitespace-nowrap"
                      >
                          Faire le test de niveau (2 min)
                      </a>
                    </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="text-[#5E6266] text-sm md:text-base font-medium pl-2">
                      à partir de 26€ / mois
                    </p>
                    <p className="text-[#5E6266]/70 text-[13px] italic pl-2">
                      Idéal pour débutants : commencez votre voyage spirituel dès aujourd'hui.
                    </p>
                  </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[480px]">
                {/* Visual backdrop for the image to match the "abstract shapes" requirement */}
                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-110 -z-10"></div>
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/e45c9f35-e52b-4c3b-800c-6b6caddca86c/Untitled-design-57-1767718610959.png?width=8000&height=8000&resize=contain" 
                  alt="Famille heureuse avec un livre de Coran et logo Talqeeny"
                  width={550}
                  height={550}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Background Decor - matching the 'floating curves' mentioned in art direction */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,240C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}