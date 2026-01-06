import React from 'react';
import { Users, User, Check, ArrowRight } from 'lucide-react';

const formats = [
  {
    icon: Users,
    title: "Petit groupe",
    pros: ["Motivation collective", "Dynamique d'échange", "Budget optimisé"],
    description: "Apprenez avec d'autres élèves de même niveau. Une ambiance conviviale pour progresser ensemble."
  },
  {
    icon: User,
    title: "Cours particulier",
    pros: ["100% personnalisé", "Rythme flexible", "Objectif précis"],
    description: "Un professeur rien que pour vous. Idéal pour avancer plus vite ou travailler un point spécifique."
  }
];

export default function Formats() {
  return (
    <section id="formats" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Choisissez votre format
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Deux options pour s'adapter parfaitement à vos besoins et à votre emploi du temps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {formats.map((format, idx) => (
            <div key={idx} className="bg-[#f0fafb] p-10 rounded-[40px] border-2 border-transparent hover:border-[#29BDAD] transition-all group flex flex-col h-full">
              <div className="bg-white w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <format.icon className="w-8 h-8 text-[#29BDAD]" />
              </div>
              
              <h3 className="text-[#0B414C] text-[28px] font-bold mb-4">{format.title}</h3>
              <p className="text-[#6C757D] text-[16px] leading-[1.6] mb-8">
                {format.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {format.pros.map((pro, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0B414C] font-bold text-[16px]">
                    <div className="w-6 h-6 rounded-full bg-[#29BDAD]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#29BDAD]" />
                    </div>
                    {pro}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#pricing"
                className="bg-white text-[#0B414C] border-2 border-[#0B414C] hover:bg-[#0B414C] hover:text-white px-8 py-4 rounded-[20px] font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                Voir les tarifs <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#6C757D] text-[16px] italic">
            Vous hésitez ? <a href="#test" className="text-[#29BDAD] font-bold hover:underline">Faites le test de niveau</a> pour en discuter avec nous.
          </p>
        </div>
      </div>
    </section>
  );
}
