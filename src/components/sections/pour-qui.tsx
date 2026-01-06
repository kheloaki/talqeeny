import React from 'react';
import { BookOpen, Headphones, Trophy } from 'lucide-react';

const targets = [
  {
    icon: BookOpen,
    title: "Débutant (Lecture)",
    description: "Vous commencez de zéro, ou vous bloquez encore en lisant les mots simples. Nous reprenons les bases ensemble."
  },
  {
    icon: Headphones,
    title: "Intermédiaire (Tajwîd)",
    description: "Vous lisez déjà, mais avec des erreurs à corriger. Apprenez à appliquer les règles pour une récitation parfaite."
  },
  {
    icon: Trophy,
    title: "Mémorisation (Hifz)",
    description: "Vous voulez mémoriser de nouvelles sourates et réviser les anciennes avec une méthode structurée et motivante."
  }
];

export default function PourQui() {
  return (
    <section id="pour-qui" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Pour qui est ce cursus ?
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Que vous soyez au début de votre apprentissage ou en phase de perfectionnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, idx) => (
            <div key={idx} className="bg-[#f0fafb] p-10 rounded-[30px] border border-transparent hover:border-[#29BDAD] transition-all duration-300 group">
              <div className="bg-white w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <target.icon className="w-8 h-8 text-[#29BDAD]" />
              </div>
              <h3 className="text-[#0B414C] text-[24px] font-bold mb-4">{target.title}</h3>
              <p className="text-[#6C757D] text-[16px] leading-[1.6]">
                {target.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="bg-[#0B414C] text-white inline-block px-6 py-2 rounded-full text-[15px] font-semibold">
            Enfants & adultes, groupes par niveau.
          </p>
        </div>
      </div>
    </section>
  );
}
