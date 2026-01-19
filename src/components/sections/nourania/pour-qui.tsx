import React from 'react';
import { BookOpen, Headphones, Trophy } from 'lucide-react';

const targets = [
  {
    icon: BookOpen,
    title: "Débutant total",
    description: "Vous ne lisez pas l'arabe ou vous confondez les lettres. La méthode Nourania vous guide pas à pas."
  },
  {
    icon: Headphones,
    title: "Lecture hésitante",
    description: "Vous lisez mais lentement, avec des erreurs. Consolidez vos bases avec la Qaida Nourania."
  },
  {
    icon: Trophy,
    title: "Préparation Tajwîd / Coran",
    description: "Vous voulez une base solide pour la lecture du Coran. La méthode Nourania est la première étape idéale."
  }
];

export default function NouraniaPourQui() {
  return (
    <section id="pour-qui" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="bg-[#F0FAFB] rounded-[40px] md:rounded-[60px] p-8 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
              À qui s'adressent nos cours de Nourania ?
            </h2>
            <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
              Une pédagogie adaptée à chaque profil pour apprendre à lire le Coran progressivement.
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
              Enfants & adultes — groupes par niveau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
