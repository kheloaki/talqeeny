import React from 'react';
import { Quote, Star } from 'lucide-react';

const allTestimonials = [
  {
    name: "Fatima",
    role: "Adulte",
    content: "J'ai enfin compris les voyelles et je lis plus facilement. La méthode Nourania est expliquée simplement, parfaite pour les francophones.",
    rating: 5
  },
  {
    name: "Ahmed",
    role: "Parent",
    content: "La méthode Nourania est expliquée simplement, idéal pour francophones. Mon fils progresse chaque semaine et gagne en confiance.",
    rating: 5
  },
  {
    name: "Sophie",
    role: "Adulte",
    content: "Même adulte débutant, j'ai progressé sans stress. La méthode Nourania m'a permis d'apprendre à lire le Coran progressivement.",
    rating: 5
  }
];

export default function NouraniaTestimonials() {
  return (
    <section id="avis" className="py-20 bg-[#f0fafb]">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Ce que disent nos élèves
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Découvrez les retours d'expérience de notre communauté de francophones qui apprennent avec la méthode Nourania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {allTestimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-[#29BDAD] opacity-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>
              <p className="text-[#0B414C] text-[16px] leading-[1.6] mb-6 font-medium italic">
                "{t.content}"
              </p>
              <div className="flex flex-col">
                <span className="text-[#0B414C] font-bold text-[16px]">{t.name}</span>
                <span className="text-[#6C757D] text-[14px]">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
