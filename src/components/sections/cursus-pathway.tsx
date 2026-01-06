import React from 'react';
import Image from 'next/image';

/**
 * CursusPathway Component
 * 
 * This component visualizes the three educational paths (Arabe, Nourania, Coran)
 * using a decorative curved pathway design as seen in the Talqeeny website.
 */
const CursusPathway = () => {
  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#003049] font-poppins mb-4">
            Les 3 cursus Talqeeny
          </h2>
        </div>

        {/* Pathway Visualization */}
        <div className="relative max-w-[1100px] mx-auto">
          
          {/* Decorative Background Curve */}
          <div className="absolute top-[35%] left-0 w-full h-auto z-0 transform -translate-y-1/2 hidden md:block">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/curve-6-12.png" 
              alt="Decorative curve" 
              className="w-full h-auto opacity-40"
            />
          </div>

          {/* Three Cursus Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative z-10">
            
            {/* 1. Arabe */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-8 pt-12">
                {/* Capsule Image Container */}
                <div className="w-[140px] h-[220px] rounded-full overflow-hidden border-[6px] border-[#29ABE2] shadow-soft-ui bg-white">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/arabe-6.png" 
                    alt="Arabe cursus"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Connecting Dot */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#29ABE2] hidden md:block"></div>
              </div>
              <div className="max-w-[240px]">
                <h4 className="text-[22px] font-bold text-[#003049] font-poppins mb-3">Arabe</h4>
                <p className="text-[15px] text-[#5E6266] font-inter leading-relaxed">
                  Apprendre à lire et écrire facilement. S'exprimer avec confiance au quotidien.
                </p>
              </div>
            </div>

            {/* 2. Nourania (Elevated center) */}
            <div className="flex flex-col items-center text-center md:-mt-24">
              <div className="max-w-[240px] mb-8 order-2 md:order-1">
                <h4 className="text-[22px] font-bold text-[#003049] font-poppins mb-3">Nourania</h4>
                <p className="text-[15px] text-[#5E6266] font-inter leading-relaxed">
                  Construire une lecture correcte avec voyelles, shadda/sukûn, introduction au tajwîd.
                </p>
              </div>
              <div className="relative mb-8 order-1 md:order-2">
                {/* Capsule Image Container */}
                <div className="w-[140px] h-[220px] rounded-full overflow-hidden border-[6px] border-[#F9BE2F] shadow-soft-ui bg-white">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/nouraniya-5.png" 
                    alt="Nourania cursus"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Connecting Dot */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F9BE2F] hidden md:block"></div>
              </div>
            </div>

            {/* 3. Coran */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-8 pt-12">
                {/* Capsule Image Container */}
                <div className="w-[140px] h-[220px] rounded-full overflow-hidden border-[6px] border-[#29ABE2] shadow-soft-ui bg-white">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/icons/coran-7.png" 
                    alt="Coran cursus"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Connecting Dot */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#29ABE2] hidden md:block"></div>
              </div>
              <div className="max-w-[240px]">
                <h4 className="text-[22px] font-bold text-[#003049] font-poppins mb-3">Coran</h4>
                <p className="text-[15px] text-[#5E6266] font-inter leading-relaxed">
                  Apprendre par cœur en séance en appliquant les règles du Tajwid, consolider à la maison par des rituels simples.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Small floating decorative elements (blobs/curves) */}
        <div className="absolute right-10 bottom-20 opacity-40 z-0 hidden lg:block">
           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#29ABE2]">
              <path d="M50.414 14.586C57.861 22.033 57.861 34.098 50.414 41.545C42.967 48.992 30.902 48.992 23.455 41.545C20.672 38.762 18.257 32.548 15.343 29.634C12.429 26.72 6.215 24.305 3.432 21.522C-4.015 14.075 -4.015 2.01 3.432 -5.437C10.879 -12.884 22.944 -12.884 30.391 -5.437C33.174 -2.654 35.589 3.56 38.503 6.474C41.417 9.388 47.631 11.803 50.414 14.586Z" fill="#29ABE2" fillOpacity="0.2"/>
           </svg>
        </div>
        <div className="absolute left-10 top-40 opacity-40 z-0 hidden lg:block">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F9BE2F]">
              <circle cx="20" cy="20" r="15" fill="#F9BE2F" fillOpacity="0.2" />
           </svg>
        </div>
      </div>

      <style jsx global>{`
        .shadow-soft-ui {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
};

export default CursusPathway;