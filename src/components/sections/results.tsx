import React from 'react';
import { TrendingUp, Award, Clock } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    title: "Lecture plus fluide",
    description: "La majorité de nos élèves constatent une amélioration nette de leur fluidité en seulement quelques semaines."
  },
  {
    icon: Award,
    title: "Moins d'erreurs",
    description: "Grâce à la correction immédiate, les erreurs de prononciation récurrentes s'effacent progressivement."
  },
  {
    icon: Clock,
    title: "Routine stabilisée",
    description: "Nos élèves parviennent à instaurer une routine de mémorisation et de révision régulière et durable."
  }
];

export default function Results() {
  return (
    <section id="resultats" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Ce que nos élèves constatent
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Des progrès visibles et une motivation renouvelée au fil des séances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, idx) => (
            <div key={idx} className="bg-[#f0fafb] p-10 rounded-[30px] text-center flex flex-col items-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <result.icon className="w-8 h-8 text-[#29BDAD]" />
              </div>
              <h3 className="text-[#0B414C] text-[22px] font-bold mb-4">{result.title}</h3>
              <p className="text-[#6C757D] text-[16px] leading-[1.6]">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
