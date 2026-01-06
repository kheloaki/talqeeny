import React from 'react';
import { Ear, Music, Wind, Zap, Target, BookOpen, Sun, LineChart } from 'lucide-react';

const items = [
  { icon: Ear, text: "Makhârij (prononciation précise)" },
  { icon: Zap, text: "Règles de tajwîd (application pratique)" },
  { icon: Wind, text: "Fluidité, rythme et arrêts" },
  { icon: Target, text: "Correction en direct des erreurs fréquentes" },
  { icon: BookOpen, text: "Plan de mémorisation + révisions" },
  { icon: Sun, text: "Autonomie (routine simple et efficace)" },
  { icon: Music, text: "Motivation et régularité" },
  { icon: LineChart, text: "Suivi rigoureux des progrès" }
];

export default function Programme() {
  return (
    <section id="programme" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Ce que vous allez apprendre
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Un programme complet pour transformer votre relation avec le Coran.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-[30px] bg-[#f0fafb] hover:bg-[#e6f7f9] transition-colors group">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-[#29BDAD]" />
              </div>
              <p className="text-[#0B414C] font-bold text-[18px] leading-[1.4]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
