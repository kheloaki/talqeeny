"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Qu’est-ce que Talqeeny ?",
    answer: "Talqeeny est une plateforme d'apprentissage en ligne innovante dédiée à l'enseignement du Coran et de la langue arabe pour les enfants. Notre approche unique se concentre sur l'apprentissage actif pendant les séances en direct."
  },
  {
    question: "Quelle est votre expérience dans l’enseignement ?",
    answer: "Nos enseignants sont sélectionnés pour leur expertise pédagogique et leur expérience avec le jeune public. Nous utilisons des méthodes modernes adaptées psychologiquement aux enfants."
  },
  {
    question: "À partir de quel âge mon enfant peut-il s’inscrire ?",
    answer: "Nos programmes sont conçus pour les enfants âgés de 4 à 15 ans, avec des cursus adaptés à chaque tranche d'âge et niveau de maturité."
  },
  {
    question: "Quelle est la différence entre Talqeeny et les autres instituts ?",
    answer: "Contrairement aux instituts classiques, Talqeeny déplace l'effort de mémorisation au cœur de la séance live. L'enfant n'est pas seul face à ses devoirs à la maison."
  },
  {
    question: "Comment se déroulent les cours ?",
    answer: "Les cours se déroulent en petits groupes via notre plateforme interactive. Chaque séance combine apprentissage théorique, pratique ludique et moments de mémorisation guidée."
  },
  {
    question: "Quels sont les cursus proposés ?",
    answer: "Nous proposons trois cursus principaux : Arabe (lecture et expression), Nourania (phonétique et règles de lecture) et Coran (mémorisation et Tajwid)."
  },
  {
    question: "Comment savoir si mon enfant progresse ?",
    answer: "Nous assurons un suivi régulier avec des évaluations continues. Les parents reçoivent des rapports de progression et peuvent visualiser les résultats via notre interface dédiée."
  },
  {
    question: "Dois-je aider mon enfant à la maison ?",
    answer: "L'objectif de Talqeeny est d'alléger la charge des parents. Un accompagnement très léger suffit, car l'essentiel du travail est réalisé avec le professeur."
  },
  {
    question: "Quels sont les tarifs ?",
    answer: "Nous proposons différentes formules adaptées à vos besoins, avec des options de paiement mensuelles ou annuelles très compétitives."
  },
  {
    question: "Qui sont les professeurs Talqeeny ?",
    answer: "Nos professeurs sont des experts bilingues passionnés par la transmission, formés spécifiquement à la méthode Talqeeny pour garantir une expérience bienveillante et efficace."
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
          alt="Children learning"
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
            <h2 className="font-display font-bold text-[40px] text-[#003049] mb-4 tracking-tight">
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

      {/* Responsive Styles for Rounded Section */}
      <style jsx global>{`
        .container {
          width: 100%;
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        @media (max-width: 1200px) {
          h2.font-display {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}