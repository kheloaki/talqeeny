import React from 'react';
import { TrendingUp, Award, Clock } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    title: "Lecture plus fluide",
    description: "La majorité de nos élèves constatent une amélioration nette de leur fluidité en lecture dès les premières semaines."
  },
  {
    icon: Award,
    title: "Moins d'hésitations",
    description: "Grâce à la correction immédiate, les hésitations et les erreurs de prononciation diminuent progressivement."
  },
  {
    icon: Clock,
    title: "Vocabulaire en hausse",
    description: "Nos élèves acquièrent un vocabulaire essentiel et gagnent en confiance pour lire et comprendre des textes simples."
  }
];

export default function ArabicResults() {
  return (
    <section id="resultats" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Preuve de progression : Ce que nos élèves constatent
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Des progrès visibles et une motivation renouvelée au fil des séances d'arabe en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, idx) => (
            <div key={idx} className="bg-[#F0FAFB] p-10 rounded-[40px] text-center flex flex-col items-center border border-transparent hover:border-[#29ABE2]/30 transition-all group shadow-sm">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <result.icon className="w-8 h-8 text-[#29ABE2]" />
              </div>
              <h3 className="text-[#003049] text-[22px] font-bold mb-4 font-poppins">{result.title}</h3>
              <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
