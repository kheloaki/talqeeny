import React from 'react';
import { Star, ShieldCheck, Users, MessageSquare } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-[#DEE2E6] py-8">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Rating */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
              ))}
              <span className="ml-2 text-[#0B414C] font-bold text-[20px]">4,8/5</span>
            </div>
            <p className="text-[#6C757D] text-[14px] font-medium uppercase tracking-wider">Avis d'élèves satisfaits</p>
          </div>

          {/* Proof Items */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 md:col-span-2">
            {[
              { icon: MessageSquare, text: "Cours en direct" },
              { icon: ShieldCheck, text: "Suivi personnalisé" },
              { icon: Users, text: "Spécial Francophones" },
              { icon: Star, text: "+1000 élèves accompagnés" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-[#29BDAD]" />
                <span className="text-[#0B414C] font-bold text-[16px] whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
