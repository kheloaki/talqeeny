"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Est-ce adapté aux adultes débutants ?",
    answer: "Absolument. Nos cours d'arabe en ligne sont conçus pour les adultes qui partent de zéro. La méthode est progressive et bienveillante, sans pression."
  },
  {
    question: "Comment apprendre l'arabe quand on part de zéro ?",
    answer: "Nous commençons par l'alphabet arabe : chaque lettre, chaque son, avec des exercices pratiques. Vous progressez à votre rythme jusqu'à lire vos premiers mots et phrases."
  },
  {
    question: "Apprend-on l'alphabet arabe au début ?",
    answer: "Oui, c'est la base de notre programme. Vous apprendrez à reconnaître, prononcer et écrire chaque lettre de l'alphabet arabe avant de passer à la lecture."
  },
  {
    question: "Cours d'arabe en ligne : comment se passent les cours en direct ?",
    answer: "Vous vous connectez à l'heure prévue en visioconférence. Le professeur guide la séance avec des exercices interactifs et corrige votre prononciation en temps réel."
  },
  {
    question: "Combien de temps pour lire correctement ?",
    answer: "Cela dépend de votre régularité. En général, nos élèves commencent à lire des mots simples après quelques semaines et des phrases après 2-3 mois de pratique régulière."
  },
  {
    question: "Arabe classique ou dialecte ?",
    answer: "Nous enseignons l'arabe classique (littéraire), qui est la base pour lire le Coran, les textes classiques et comprendre les médias arabes. Les dialectes ne sont pas abordés."
  },
  {
    question: "Proposez-vous de l'arabe coranique ?",
    answer: "Oui, notre parcours inclut une option arabe coranique pour ceux qui souhaitent comprendre le vocabulaire et les structures fréquentes dans le Coran."
  },
  {
    question: "Groupe ou individuel : que choisir ?",
    answer: "Le groupe est idéal pour la motivation et le budget. L'individuel convient si vous avez des objectifs précis ou un emploi du temps particulier. Les deux formats offrent un suivi personnalisé."
  },
  {
    question: "Quels horaires (soir / week-end) ?",
    answer: "Nous proposons des créneaux en semaine (soir) et le week-end pour s'adapter à tous les emplois du temps. Contactez-nous pour connaître les disponibilités."
  },
  {
    question: "Quel matériel faut-il ?",
    answer: "Une connexion internet stable, un ordinateur ou une tablette, et un casque avec micro. C'est tout ce dont vous avez besoin pour suivre nos cours d'arabe en ligne."
  },
  {
    question: "Comment réserver la séance gratuite ?",
    answer: "Cliquez sur 'Réserver une séance gratuite' et remplissez le formulaire. Nous vous contacterons pour fixer un créneau et faire connaissance."
  },
  {
    question: "Comment se passe le suivi et la progression ?",
    answer: "Votre professeur suit vos progrès à chaque séance. Vous recevez des bilans réguliers et des conseils de révision pour consolider vos acquis."
  },
  {
    question: "Puis-je changer de formule en cours de route ?",
    answer: "Oui, vous pouvez passer du groupe à l'individuel ou inversement selon vos besoins. Nous nous adaptons à votre évolution."
  },
  {
    question: "Y a-t-il des devoirs entre les séances ?",
    answer: "Nous proposons des mini-exercices simples (optionnels) pour renforcer vos acquis. Ils sont corrigés lors de la séance suivante."
  },
  {
    question: "Comment fonctionne le test de niveau ?",
    answer: "Le test dure environ 2 minutes. Il nous permet de vous orienter vers le groupe le plus adapté à vos compétences actuelles."
  }
];

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={cn(
          "w-full flex items-center justify-between py-[12px] px-[20px] text-left transition-all duration-300",
          "bg-[#F0FAFB] hover:bg-[#E1F5F7] rounded-[12px]",
          "border-none shadow-none group"
        )}
      >
        <span className="text-[#003049] font-display font-semibold text-[16px] leading-[1.4]">
          {question}
        </span>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-[#29ABE2] transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )} 
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-[20px] pb-[10px] text-[#5E6266] font-sans text-[15px] leading-[1.6]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ArabicFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midpoint);
  const rightColumn = faqData.slice(midpoint);

  return (
    <section className="relative py-[100px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/faq-21.jpg"
          alt="Personnes en train d'apprendre"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-[50px] mx-4 md:mx-8 xl:mx-auto max-w-[1320px] border border-white/20"></div>
      </div>

      <div className="container relative z-10">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center mb-[50px]">
              <h2 className="font-display font-bold text-[32px] md:text-[40px] text-[#003049] mb-4 tracking-tight">
                FAQ
              </h2>
            </div>

          <div className="row flex flex-wrap -mx-4">
            <div className="w-full xl:w-1/2 px-4">
              {leftColumn.map((item, idx) => (
                <AccordionItem
                  key={`left-${idx}`}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === idx}
                  onClick={() => toggleAccordion(idx)}
                />
              ))}
            </div>

            <div className="w-full xl:w-1/2 px-4">
              {rightColumn.map((item, idx) => {
                const globalIndex = idx + midpoint;
                return (
                  <AccordionItem
                    key={`right-${idx}`}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === globalIndex}
                    onClick={() => toggleAccordion(globalIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      </section>
    );
}
