import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const objectives = [
  { title: "Reconnaître les lettres arabes", outcome: "Maîtrisez chaque lettre de l'alphabet arabe avec la méthode Nourania." },
  { title: "Comprendre les voyelles et signes", outcome: "Apprenez les voyelles (harakat) et signes essentiels pour lire correctement." },
  { title: "Lire progressivement (syllabes → mots → phrases)", outcome: "Passez des syllabes simples à la lecture fluide de phrases complètes." },
  { title: "Améliorer la prononciation", outcome: "Travaillez les sons spécifiques de l'arabe pour une prononciation claire." },
  { title: "Gagner en fluidité", outcome: "Développez une lecture naturelle et confiante grâce à la pratique régulière." },
  { title: "Préparer la lecture du Coran", outcome: "La méthode Nourania vous prépare à aborder la lecture coranique sereinement." }
];

export default function NouraniaObjectifs() {
  return (
    <section id="objectifs" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Vos objectifs
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Nous vous accompagnons pour atteindre des résultats concrets avec la méthode Nourania.
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {objectives.map((obj, idx) => (
              <div key={idx} className="flex gap-4 p-8 bg-[#F0FAFB] rounded-[30px] border border-transparent hover:border-[#29ABE2] transition-all duration-300 shadow-sm items-start group">
                <div className="mt-1 bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-[#29ABE2]" />
                </div>
                <div>
                  <h3 className="text-[#003049] text-[20px] font-bold mb-2 font-poppins">{obj.title}</h3>
                  <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                    {obj.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex gap-4 p-8 bg-[#F0FAFB] rounded-[30px] border border-transparent hover:border-[#29ABE2] transition-all duration-300 shadow-sm items-start group">
              <div className="mt-1 bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-[#29ABE2]" />
              </div>
              <div>
                <h3 className="text-[#003049] text-[20px] font-bold mb-2 font-poppins">Exercices guidés & corrections</h3>
                <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                  Pratique en direct + petits exercices entre les séances pour consolider vos acquis.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
