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
                    Cursus Talqeen Coran (Mémorisation)
                  </h1>
                  <p className="text-[16px] md:text-[18px] text-[#5E6266] leading-[1.7] font-inter">
                    On gère la mémorisation, vous retrouvez la sérénité ! Nous plaçons la mémorisation et sa consolidation au cœur de la séance live. Idéal pour enfants et adultes.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#pricing-plans" 
                    className="inline-flex items-center justify-center gap-3 bg-[#29ABE2] hover:bg-[#2399cc] text-white px-8 py-4 rounded-full font-semibold text-[16px] transition-all duration-300 transform hover:scale-105 shadow-md font-inter group"
                  >
                      Réserver une séance gratuite
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
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