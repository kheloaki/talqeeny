import React from 'react';
import { Quote, Star } from 'lucide-react';

const allTestimonials = [
  {
    name: "Rim",
    role: "Parent",
    content: "Expérience merveilleuse avec Madame Hind. Grâce à la méthode Al-Qaida An-Nouraniyya, ma fille a mémorisé 3 Hizb et adore la langue arabe. L'atmosphère est excellente, faite de patience et de compassion. Je recommande vivement !",
    rating: 5
  },
  {
    name: "Fareyal",
    role: "Adulte",
    content: "En tant que non-arabophone, j'apprécie énormément les cours de Moualima Maryem. Elle explique les règles avec une clarté remarquable et une grande douceur. Ses notes et ses explications sont un vrai plus chaque semaine.",
    rating: 5
  },
  {
    name: "Adrien",
    role: "Adulte",
    content: "Nous avons commencé sans aucune connaissance en janvier 2025 avec Oustad Abdallah. En novembre, mes enfants et moi savons déjà lire le Coran ! Sa pédagogie est excellente, très rigoureuse sur la prononciation et les prolongations. Une bénédiction pour notre famille.",
    rating: 5
  }
];

export default function ArabicTestimonials() {
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
