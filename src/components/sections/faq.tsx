"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Qu’est-ce que le Cursus Talqeen Coran ?",
    answer: "C'est un programme de mémorisation en direct où l'élève apprend et révise ses sourates pendant la séance live avec le professeur, minimisant ainsi le travail solitaire à la maison."
  },
  {
    question: "Est-ce adapté aux enfants et aux adultes ?",
    answer: "Oui, nous avons des groupes séparés pour les enfants (à partir de 5 ans) et pour les adultes. La pédagogie est adaptée à chaque public."
  },
  {
    question: "Quel est le nombre d'élèves par groupe ?",
    answer: "Nous limitons nos groupes à 5 élèves maximum pour garantir un temps de parole et une correction individuelle optimale pour chacun."
  },
  {
    question: "Faut-il déjà savoir lire l'arabe ?",
    answer: "Il est préférable d'avoir des bases en lecture, mais nous proposons aussi le cursus Nourania pour ceux qui souhaitent apprendre à lire avant de mémoriser."
  },
  {
    question: "Comment se déroule une séance type ?",
    answer: "Une séance de 90 min (groupe) comprend : révision des acquis, apprentissage du nouveau passage, application du Tajwid et activités d'ancrage."
  },
  {
    question: "Proposez-vous des cours particuliers ?",
    answer: "Oui, les plans Othmane Ibn Affane et Imame Nafii sont des formats individuels (1 élève / 1 professeur) pour une progression sur mesure."
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midpoint);
  const rightColumn = faqData.slice(midpoint);

  return (
    <section className="relative py-[100px] overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/faq-21.jpg"
          alt="Enfants en train d'apprendre"
          fill
          className="object-cover"
          priority
        />
        {/* Soft UI Rounded Corners Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-[50px] mx-4 md:mx-8 xl:mx-auto max-w-[1320px] border border-white/20"></div>
      </div>

      <div className="container relative z-10">
          <div className="max-w-[1240px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-[50px]">
              <h2 className="font-display font-bold text-[32px] md:text-[40px] text-[#003049] mb-4 tracking-tight">
                FAQ
              </h2>
            </div>

          {/* Accordion Grid */}
          <div className="row flex flex-wrap -mx-4">
            {/* Left Column */}
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

            {/* Right Column */}
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