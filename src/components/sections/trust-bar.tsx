import React from 'react';
import { Star, ShieldCheck, Users, MessageSquare } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-[#DEE2E6] py-10">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 items-center">
          {/* Rating */}
          <div className="flex flex-col items-center lg:items-start gap-1 lg:border-r lg:border-[#DEE2E6] lg:pr-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
              ))}
              <span className="ml-2 text-[#0B414C] font-bold text-lg">4,8/5</span>
            </div>
            <p className="text-[#6C757D] text-xs font-semibold uppercase tracking-widest whitespace-nowrap">Avis d'élèves satisfaits</p>
          </div>

          {/* Proof Items */}
          {[
            { icon: MessageSquare, text: "Cours en direct" },
            { icon: ShieldCheck, text: "Suivi personnalisé" },
            { icon: Users, text: "Spécial Francophones" },
            { icon: Star, text: "+1000 accompagnés" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="p-2 rounded-full bg-[#29BDAD]/10">
                <item.icon className="w-5 h-5 text-[#29BDAD]" />
              </div>
              <span className="text-[#0B414C] font-semibold text-[15px] text-center sm:text-left">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
