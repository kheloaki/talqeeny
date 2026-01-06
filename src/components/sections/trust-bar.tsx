import React from 'react';
import { Star, ShieldCheck, Users, MessageSquare } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-[#DEE2E6] py-6">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-8 gap-x-4">
          {/* Rating */}
          <div className="flex flex-col items-center lg:items-start gap-1 lg:border-r lg:border-[#DEE2E6] lg:pr-12 w-full sm:w-auto">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
              ))}
              <span className="ml-2 text-[#0B414C] font-bold text-lg">4,9/5</span>
            </div>
            <p className="text-[#6C757D] text-[10px] font-bold uppercase tracking-widest">Avis élèves vérifiés</p>
          </div>

          {/* Proof Items */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 flex-1">
            {[
              { icon: MessageSquare, text: "Cours en direct" },
              { icon: ShieldCheck, text: "Suivi personnalisé" },
              { icon: Users, text: "Spécial Francophones" },
              { icon: Star, text: "500+ élèves accompagnés" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 p-2 rounded-full bg-[#29BDAD]/10">
                  <item.icon className="w-4 h-4 text-[#29BDAD]" />
                </div>
                <span className="text-[#0B414C] font-bold text-sm whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
