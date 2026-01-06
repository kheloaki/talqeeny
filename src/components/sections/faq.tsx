"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Comment apprendre le Coran en ligne avec votre plateforme ?",
    answer: "Notre plateforme propose des cours en direct avec des professeurs expérimentés. Vous vous connectez à l'heure prévue, et la séance se déroule en visioconférence pour une interaction maximale et une correction immédiate."
  },
  {
    question: "Est-ce adapté aux adultes débutants ?",
    answer: "Absolument. Nous avons des programmes spécifiquement conçus pour les adultes qui souhaitent apprendre à lire le Coran ou mémoriser à leur rythme, sans pression et avec bienveillance."
  },
  {
    question: "Comment apprendre à lire le Coran ?",
    answer: "Nous utilisons principalement la méthode Nourania. C'est une approche progressive qui permet de maîtriser la prononciation correcte des lettres (Makharij) et d'entrer rapidement dans la lecture des mots et des versets."
  },
  {
    question: "Qu'est-ce que la Qaida Nourania ?",
    answer: "La Qaida Nourania est une méthode d'apprentissage de la lecture de l'arabe et du Coran. Elle est célèbre pour son efficacité à enseigner les règles de tajwid dès les premières étapes de l'apprentissage."
  },
  {
    question: "La méthode Nourania, c'est pour qui ?",
    answer: "Elle est universelle. Que vous soyez un enfant ou un adulte débutant, la méthode Nourania est idéale pour poser des bases de lecture solides et précises."
  },
  {
    question: "Comment corriger les règles de tajwid ?",
    answer: "Lors de chaque séance, le professeur écoute votre récitation du Coran et corrige en direct vos erreurs. Vous apprenez les règles de tajwid théoriques et leur application pratique simultanément."
  },
  {
    question: "Comment mémoriser le Coran et réviser sans oublier ?",
    answer: "Nous intégrons des techniques de mémorisation (Hifz) éprouvées et un planning de révision structuré. L'essentiel de l'ancrage se fait en direct avec le professeur pour garantir une mémorisation durable."
  },
  {
    question: "Quel est le nombre d'élèves par groupe ?",
    answer: "Nous limitons nos groupes à 5 élèves maximum pour garantir un temps de parole et une correction individuelle optimale pour chacun."
  },
  {
    question: "Proposez-vous des cours d'arabe coranique ?",
    answer: "Oui, notre cursus inclut des notions d'arabe coranique pour vous aider à comprendre le sens des versets que vous récitez et mémorisez."
  },
  {
    question: "Quels sont les horaires des cours ?",
    answer: "Nous proposons une large gamme d'horaires, en semaine et le week-end, pour s'adapter à votre emploi du temps professionnel ou scolaire."
  },
  {
    question: "De quel matériel ai-je besoin ?",
    answer: "Une simple connexion internet, un ordinateur ou une tablette, et un casque avec micro suffisent pour suivre vos cours de Coran en ligne dans de bonnes conditions."
  },
  {
    question: "Puis-je choisir entre groupe et individuel ?",
    answer: "Oui, nous proposons des formats en petits groupes pour l'émulation, ou des cours particuliers pour une attention 100% personnalisée."
  },
  {
    question: "Est-il possible de faire une séance d'essai ?",
    answer: "Oui, vous pouvez réserver une séance gratuite pour découvrir notre méthode, rencontrer un professeur et évaluer votre niveau."
  },
  {
    question: "Comment se déroule le test de niveau ?",
    answer: "Le test de niveau dure environ 2 minutes et permet de vous placer dans le groupe le plus adapté à vos compétences actuelles en récitation du Coran."
  },
  {
    question: "La lecture du Coran pendant le Ramadan est-elle abordée ?",
    answer: "Oui, nous proposons des accompagnements spécifiques pour vous préparer à la lecture du Coran lors du Ramadan et intensifier votre lien avec le Livre Sacré."
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