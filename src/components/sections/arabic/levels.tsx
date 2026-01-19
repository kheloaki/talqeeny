import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    level: "Niveau 1",
    title: "Alphabet & Lecture (arabe débutant)",
    outcomes: [
      "Reconnaître et écrire les lettres arabes",
      "Lire syllabes et mots simples",
      "Maîtriser les sons de base"
    ]
  },
  {
    level: "Niveau 2",
    title: "Lecture fluide + vocabulaire",
    outcomes: [
      "Fluidité et compréhension simple",
      "Vocabulaire essentiel au quotidien",
      "Règles de grammaire basiques"
    ]
  },
  {
    level: "Niveau 3",
    title: "Consolidation & Arabe coranique (option)",
    outcomes: [
      "Lecture stable et autonome",
      "Vocabulaire coranique fréquent",
      "Consolidation et autonomie"
    ]
  }
];

export default function ArabicLevels() {
  return (
    <section id="niveaux" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Un parcours adapté à tous les niveaux
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Progressez étape par étape vers une maîtrise complète de la langue arabe.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-[#29ABE2] opacity-20 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-[90px] h-[90px] rounded-full bg-[#29ABE2] text-white flex items-center justify-center text-[24px] font-bold mb-8 border-[8px] border-white shadow-md font-poppins">
                  {idx + 1}
                </div>
                
                <div className="bg-[#F0FAFB] p-8 rounded-[30px] shadow-sm w-full hover:shadow-lg transition-all duration-300 flex-grow border border-transparent hover:border-[#29ABE2]/30 group">
                  <span className="text-[#29ABE2] font-bold text-[14px] uppercase tracking-widest mb-2 block font-inter">
                    {step.level}
                  </span>
                  <h3 className="text-[#003049] text-[22px] font-bold mb-6 font-poppins">
                    {step.title}
                  </h3>
                  <ul className="space-y-4">
                    {step.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#5E6266] text-[15px] font-inter">
                        <Check className="w-5 h-5 text-[#29ABE2] flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href="#pricing-plans"
            className="bg-[#29ABE2] text-white hover:bg-[#003049] px-10 py-5 rounded-full font-bold transition-all text-center flex items-center justify-center gap-3 font-inter shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Voir les tarifs <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
