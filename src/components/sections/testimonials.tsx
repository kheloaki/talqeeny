import React from 'react';
import { Quote, Star } from 'lucide-react';

const allTestimonials = [
  {
    name: "Adrien",
    role: "Adulte",
    content: "En moins d'un an avec Cheikh Abdallah, nous sommes passés de débutants complets à une lecture fluide du Coran. Sa pédagogie rigoureuse et bienveillante, adaptée aussi bien aux adultes qu'aux enfants, permet d'assimiler rapidement la théorie et la pratique du Tajwid. Un enseignement d'excellence que nous recommandons vivement !",
    rating: 5
  },
  {
    name: "Rim",
    role: "Parent",
    content: "Pour sa deuxième année de Coran avec Madame Hind, Safwan bénéficie d'un accompagnement de grande qualité. Sa méthodologie pertinente, centrée sur la prononciation correcte et des encouragements constants, offre un cadre d'apprentissage idéal. Une enseignante que je recommande vivement !",
    rating: 5
  },
  {
    name: "Abdollah",
    role: "Étudiant",
    content: "J'aime vraiment beaucoup les cours que je fais avec Moualima Ihsane, que ce soit pour le Coran, l'arabe ou l'éducation Islamique. Elle est toujours très souriante avec moi et elle me donne beaucoup de motivation pour apprendre. C'est un plaisir de suivre ses leçons parce qu'elle est super gentille et qu'on avance bien ensemble.",
    rating: 5
  }
];

export default function Testimonials() {
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
