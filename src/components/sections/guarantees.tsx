import React from 'react';
import { ShieldCheck, Lock, Headphones, RefreshCw } from 'lucide-react';

const guarantees = [
  { icon: ShieldCheck, text: "Placement au bon niveau" },
  { icon: Lock, text: "Paiement sécurisé" },
  { icon: Headphones, text: "Support rapide" },
  { icon: RefreshCw, text: "Flexibilité garantie" }
];

export default function Guarantees() {
  return (
    <section id="reassurance" className="py-12 bg-[#003049]">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-8 gap-x-12">
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="bg-[#29ABE2] p-3 rounded-full group-hover:scale-110 transition-transform shadow-md">
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
