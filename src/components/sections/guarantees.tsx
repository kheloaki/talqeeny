import React from 'react';
import { ShieldCheck, Lock, Headphones, RefreshCw } from 'lucide-react';

const guarantees = [
  { icon: ShieldCheck, text: "Groupes par niveau pour ne jamais se sentir perdu." },
  { icon: RefreshCw, text: "Un compte rendu après chaque étape importante." },
  { icon: Lock, text: "Transactions 100% sécurisées." },
  { icon: Headphones, text: "Une équipe à votre écoute 6j/7." }
];

export default function Guarantees() {
  return (
    <section id="rassurance" className="py-12 bg-[#003049]">
      <div className="container px-6 mx-auto max-w-[1240px]">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="bg-[#29ABE2] p-3 rounded-full group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-[16px] md:text-[18px] font-inter">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
