import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    level: "Niveau 1",
    title: "Lecture & bases",
    outcomes: [
      "Maîtriser l'alphabet et les voyelles",
      "Lire des mots et phrases simples",
      "Apprendre les règles de base du tajwîd"
    ]
  },
  {
    level: "Niveau 2",
    title: "Lecture continue & tajwîd essentiel",
    outcomes: [
      "Lire avec fluidité sans hésitation",
      "Appliquer les règles de prolongement (moudoud)",
      "Améliorer le rythme et la respiration"
    ]
  },
  {
    level: "Niveau 3",
    title: "Perfectionnement & mémorisation",
    outcomes: [
      "Maîtriser les nuances fines du tajwîd",
      "Corriger sa récitation en autonomie",
      "Mémoriser avec une méthode de révision solide"
    ]
  }
];

export default function Levels() {
  return (
    <section id="niveaux" className="py-20 bg-[#f0fafb]">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Votre progression par niveaux
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Un parcours structuré pour vous amener vers l'excellence, étape par étape.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-[#29BDAD] opacity-20 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-[90px] h-[90px] rounded-full bg-[#29BDAD] text-white flex items-center justify-center text-[24px] font-bold mb-8 border-[8px] border-white shadow-md">
                  {idx + 1}
                </div>
                
                <div className="bg-white p-8 rounded-[30px] shadow-sm w-full hover:shadow-lg transition-shadow duration-300 flex-grow border border-transparent hover:border-[#29BDAD]/30">
                  <span className="text-[#29BDAD] font-bold text-[14px] uppercase tracking-widest mb-2 block">
                    {step.level}
                  </span>
                  <h3 className="text-[#0B414C] text-[22px] font-bold mb-6">
                    {step.title}
                  </h3>
                  <ul className="space-y-4">
                    {step.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#6C757D] text-[15px]">
                        <Check className="w-5 h-5 text-[#29BDAD] flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#0B414C] p-8 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h4 className="text-[20px] font-bold mb-2">Vous ne connaissez pas votre niveau ?</h4>
            <p className="text-white/80">Le test de niveau vous place automatiquement dans le bon groupe.</p>
          </div>
          <a 
            href="#test" 
            className="bg-[#29BDAD] hover:bg-[#23a294] text-white px-8 py-4 rounded-[20px] font-bold transition-all flex items-center gap-2 whitespace-nowrap"
          >
            Faire le test de niveau <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
