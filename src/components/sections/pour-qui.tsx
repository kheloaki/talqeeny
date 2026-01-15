import React from 'react';
import { BookOpen, Headphones, Trophy } from 'lucide-react';

const targets = [
  {
    icon: BookOpen,
    title: "Débutant (Lecture)",
    description: "Apprendre à lire le Coran en partant de zéro. Nous utilisons la méthode Talqeen (Nourania adaptée) pour une progression fluide et rapide tout en introduisant des règles de base du Tajwid."
  },
  {
    icon: Headphones,
    title: "Intermédiaire (Tajwid)",
    description: "Maîtrisez les règles de tajwid pour une récitation du Coran fluide et correcte. Idéal pour ceux qui lisent déjà mais veulent se perfectionner."
  },
  {
    icon: Trophy,
    title: "Mémorisation (Hifz)",
    description: "Mémoriser le Coran avec une méthodologie structurée. Progressez dans votre hifz avec un suivi rigoureux et des révisions constantes."
  }
];

export default function PourQui() {
  return (
    <section id="pour-qui" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="bg-[#F0FAFB] rounded-[40px] md:rounded-[60px] p-8 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
              À qui s'adressent nos cours de Coran en ligne ?
            </h2>
            <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
              Une pédagogie adaptée à chaque profil pour garantir une progression optimale et sereine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targets.map((target, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[30px] border border-transparent hover:border-[#29ABE2] transition-all duration-300 group shadow-sm">
                <div className="bg-[#F0FAFB] w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <target.icon className="w-8 h-8 text-[#29ABE2]" />
                </div>
                <h3 className="text-[#003049] text-[24px] font-bold mb-4 font-poppins">{target.title}</h3>
                <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                  {target.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="bg-[#003049] text-white inline-block px-6 py-2 rounded-full text-[15px] font-semibold font-inter">
              Tous niveaux bienvenus, groupes homogènes par compétences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
