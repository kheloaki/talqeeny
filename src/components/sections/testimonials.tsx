"use client";

import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';

const allTestimonials = [
  {
    name: "Sarah",
    role: "Maman d'élève",
    content: "Méthode claire pour francophones, j'ai enfin stabilisé ma lecture. Ma fille progresse chaque semaine avec plaisir.",
    rating: 5
  },
  {
    name: "Omar",
    role: "Adulte débutant",
    content: "Le tajwîd est corrigé en direct, ça change tout. Le professeur est très patient et pédagogue.",
    rating: 5
  },
  {
    name: "Khadija",
    role: "Étudiante",
    content: "Suivi de mémorisation très motivant. Les séances sont bien structurées et m'aident à rester régulière.",
    rating: 5
  },
  {
    name: "Yassine",
    role: "Parent",
    content: "Enfin une plateforme qui comprend les besoins des francophones. Le vocabulaire est adapté et les explications limpides.",
    rating: 5
  },
  {
    name: "Amira",
    role: "Adulte",
    content: "J'avais peur de commencer tard mais l'accompagnement est top. Je lis mes premières sourates avec fluidité maintenant.",
    rating: 5
  },
  {
    name: "Ibrahim",
    role: "Père de famille",
    content: "Mes enfants adorent leurs cours. Ils attendent le moment de la séance avec impatience. Je recommande vivement.",
    rating: 5
  }
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);

  return (
    <section id="avis" className="py-20 bg-[#f0fafb]">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Ce que disent nos élèves
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Découvrez les retours d'expérience de notre communauté de francophones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((t, idx) => (
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

        {!showAll && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="text-[#29BDAD] font-bold text-[18px] hover:underline transition-all"
            >
              Voir plus de témoignages
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
