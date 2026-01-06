import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[115px] pb-[75px] md:pt-[160px] md:pb-[120px] bg-[#f0fafb]">
      {/* Background shapes */}
      <div className="absolute left-0 top-0 pointer-events-none select-none z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_1-3.png"
          alt="shape"
          width={300}
          height={300}
          className="w-[200px] md:w-auto"
        />
      </div>
      <div className="absolute right-0 top-0 pointer-events-none select-none z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_2-4.png"
          alt="shape"
          width={350}
          height={350}
          className="w-[200px] md:w-auto"
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[#0B414C] text-[36px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] font-inter mb-6 max-w-[900px]">
            Cours de Coran en ligne pour francophones (enfants & adultes)
          </h1>
          
          <p className="text-[#6C757D] text-[18px] md:text-[22px] leading-[1.5] max-w-[800px] mb-10">
            Apprenez à lire avec tajwîd, corrigez votre récitation et progressez en mémorisation en direct avec un professeur.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#pricing"
              className="bg-[#29BDAD] hover:bg-[#23a294] text-white px-8 py-4 rounded-[20px] text-[18px] font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              Réserver une séance gratuite
            </a>
            <a 
              href="#test"
              className="bg-white border-2 border-[#29BDAD] text-[#29BDAD] hover:bg-[#f0fafb] px-8 py-4 rounded-[20px] text-[18px] font-bold transition-all duration-300 w-full sm:w-auto text-center"
            >
              Faire le test de niveau (2 min)
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            {[
              "Cours en direct (pas de vidéos pré-enregistrées)",
              "Petits groupes ou cours particuliers",
              "Corrections et suivi personnalisés"
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#0B414C] font-semibold">
                <div className="bg-[#29BDAD] rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <p className="text-[#6C757D] text-[15px] font-medium mb-12">
            On vous place dans le bon niveau, sans pression.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] font-bold text-[#29BDAD] uppercase tracking-wider">
            {["Programme", "Niveaux", "Tarifs", "Avis", "FAQ"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#0B414C] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
