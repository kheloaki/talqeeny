"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Qu'est-ce que la Qaida Nourania ?",
    answer: "La Qaida Nourania (ou Nouraniya) est une méthode pédagogique reconnue mondialement pour apprendre à lire l'arabe et le Coran. Elle enseigne progressivement les lettres, les voyelles et les règles de lecture."
  },
  {
    question: "La méthode Nourania, c'est pour qui ?",
    answer: "La méthode Nourania s'adresse à tous : enfants et adultes, débutants complets ou personnes souhaitant consolider leurs bases de lecture arabe avant d'aborder le Coran."
  },
  {
    question: "Est-ce adapté aux adultes débutants ?",
    answer: "Absolument. Nos cours de Nourania en ligne sont conçus pour les adultes qui partent de zéro. La méthode est progressive et bienveillante, sans pression."
  },
  {
    question: "Comment apprendre à lire le Coran quand on ne lit pas l'arabe ?",
    answer: "La Qaida Nourania est la première étape idéale. Elle vous apprend les lettres, les voyelles et les bases de lecture avant d'aborder les textes coraniques."
  },
  {
    question: "Après Nourania, je fais quoi (Coran / tajwîd / mémorisation) ?",
    answer: "Après avoir terminé la méthode Nourania, vous pouvez passer à la lecture du Coran, approfondir le tajwîd ou commencer la mémorisation (hifz). Nous proposons des parcours adaptés."
  },
  {
    question: "Comment se passent les cours en direct ?",
    answer: "Vous vous connectez à l'heure prévue en visioconférence. Le professeur guide la séance avec des exercices interactifs basés sur la Qaida Nourania et corrige votre prononciation en temps réel."
  },
  {
    question: "Combien de temps pour maîtriser la Nourania ?",
    answer: "Cela dépend de votre régularité. En général, avec 1-2 séances par semaine, nos élèves terminent le programme Nourania en 3 à 6 mois."
  },
  {
    question: "Quelle est la différence entre Nourania et Nouraniya ?",
    answer: "Ce sont deux orthographes de la même méthode (قاعدة نورانية). Les deux termes désignent la Qaida Nourania, une méthode d'apprentissage de la lecture arabe."
  },
  {
    question: "Groupe ou individuel : que choisir ?",
    answer: "Le groupe est idéal pour la motivation et le budget. L'individuel convient si vous avez des objectifs précis ou un emploi du temps particulier. Les deux formats offrent un suivi personnalisé."
  },
  {
    question: "Quels horaires sont disponibles (soir / week-end) ?",
    answer: "Nous proposons des créneaux en semaine (soir) et le week-end pour s'adapter à tous les emplois du temps. Contactez-nous pour connaître les disponibilités."
  },
  {
    question: "Quel matériel faut-il pour suivre les cours ?",
    answer: "Une connexion internet stable, un ordinateur ou une tablette, et un casque avec micro. C'est tout ce dont vous avez besoin pour suivre nos cours de Nourania en ligne."
  },
  {
    question: "Comment réserver la séance gratuite ?",
    answer: "Cliquez sur 'Réserver une séance gratuite' et remplissez le formulaire. Nous vous contacterons pour fixer un créneau et faire connaissance."
  },
  {
    question: "Comment se passe le suivi et la progression ?",
    answer: "Votre professeur suit vos progrès à chaque séance. Vous recevez des bilans réguliers et des conseils de révision pour consolider vos acquis avec la méthode Nourania."
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
    question: "Les cours sont-ils spécialement conçus pour les francophones ?",
    answer: "Oui, notre pédagogie est spécifiquement adaptée aux francophones. Les explications sont en français et nous prenons en compte les difficultés spécifiques des francophones."
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

export default function NouraniaFAQ() {
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
