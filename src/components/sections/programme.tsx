import React from 'react';
import { Ear, Music, Wind, Zap, Target, BookOpen, Sun, LineChart } from 'lucide-react';

const items = [
  { icon: Ear, text: "Articulations et traits des lettres (Makharij et Sifat)" },
  { icon: Zap, text: "Règles de tajwid (théorie & pratique)" },
  { icon: Wind, text: "Récitation du Coran fluide" },
  { icon: Target, text: "Correction immédiate des erreurs" },
  { icon: BookOpen, text: "Mémoriser le Coran (Hifz)" },
  { icon: Sun, text: "Qaida Nourania pas à pas" },
  { icon: Music, text: "Arabe coranique (Vocabulaire)" },
  { icon: LineChart, text: "Suivi rigoureux des progrès" }
];

export default function Programme() {
  return (
    <section id="programme" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="bg-[#003049] rounded-[40px] md:rounded-[60px] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#29ABE2]/10 blur-[100px] -mr-32 -mt-32 rounded-full"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-white text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
              Ce que vous allez apprendre
            </h2>
            <p className="text-white/80 text-[18px] max-w-[700px] mx-auto font-inter">
              Un programme complet pour maîtriser les règles de tajwid et la récitation du Coran en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 rounded-[30px] bg-white/5 hover:bg-white/10 border border-white/10 transition-all group backdrop-blur-sm">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-[#29ABE2]" />
                </div>
                <p className="text-white font-bold text-[18px] leading-[1.4] font-poppins">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
