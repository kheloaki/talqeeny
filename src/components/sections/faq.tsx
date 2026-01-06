"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Est-ce adapté aux adultes débutants ?",
    answer: "Absolument. Nous avons des groupes spécifiquement dédiés aux adultes qui souhaitent commencer ou reprendre les bases de la lecture arabe en toute sérénité."
  },
  {
    question: "Faut-il déjà savoir lire l’arabe ?",
    answer: "Non, pas du tout. Le niveau 1 est conçu pour ceux qui ne connaissent pas l'alphabet ou qui ont de grandes difficultés à déchiffrer les lettres."
  },
  {
    question: "Combien de temps pour améliorer ma récitation ?",
    answer: "Cela dépend de votre point de départ et de votre régularité. En général, les élèves constatent une amélioration de la fluidité après 4 à 8 semaines de cours réguliers."
  },
  {
    question: "Tajwîd : c’est pratique ou théorique ?",
    answer: "Nous privilégions l'approche pratique. Vous apprenez les règles à travers la récitation directe, avec des explications théoriques simplifiées pour comprendre le 'pourquoi'."
  },
  {
    question: "Comment se déroule la correction ?",
    answer: "Le professeur vous écoute réciter en direct et vous arrête avec bienveillance pour corriger la prononciation ou l'application d'une règle de tajwîd."
  },
  {
    question: "Comment fonctionne la mémorisation et les révisions ?",
    answer: "Nous suivons un plan structuré : mémorisation de nouvelles portions, révision des portions récentes et consolidation des anciennes (le 'vieux' hifz)."
  },
  {
    question: "Groupe ou individuel : que choisir ?",
    answer: "Le groupe favorise l'émulation et la motivation. L'individuel permet d'avancer à son propre rythme et de cibler des besoins très spécifiques. Le test de niveau peut vous aider à choisir."
  },
  {
    question: "Quels horaires (soir / week-end) ?",
    answer: "Nous proposons des créneaux variés, incluant les soirées et les week-ends, pour s'adapter aux emplois du temps des étudiants et des professionnels."
  },
  {
    question: "Combien d’élèves par groupe ?",
    answer: "Nos groupes sont restreints (généralement entre 4 et 8 élèves) pour garantir un temps de parole et de correction suffisant pour chacun."
  },
  {
    question: "Quel matériel faut-il ?",
    answer: "Une connexion internet stable, un ordinateur ou une tablette, ainsi qu'un micro-casque de bonne qualité pour bien entendre et être entendu."
  },
  {
    question: "Cours en direct : sur quelle plateforme ?",
    answer: "Les cours se déroulent via une plateforme de visioconférence dédiée, accessible facilement depuis votre navigateur ou une application."
  },
  {
    question: "Est-ce que je peux changer de groupe/niveau ?",
    answer: "Oui, si après quelques séances nous constatons que le niveau ne correspond pas à votre progression, nous effectuons un réajustement vers un groupe plus adapté."
  },
  {
    question: "Comment réserver la séance gratuite ?",
    answer: "Il vous suffit de cliquer sur le bouton 'Réserver une séance gratuite' et de remplir le court formulaire. Nous vous recontacterons rapidement."
  },
  {
    question: "Puis-je arrêter / reprendre plus tard ?",
    answer: "Nous offrons une certaine flexibilité. Vous pouvez suspendre votre abonnement selon nos conditions générales de vente consultables lors de l'inscription."
  },
  {
    question: "Peut-on faire seulement tajwîd / seulement mémorisation ?",
    answer: "Oui, nos plans sont flexibles. Vous pouvez choisir de vous concentrer sur la correction de la lecture (tajwîd) ou sur l'accompagnement à la mémorisation."
  },
  {
    question: "Est-ce adapté aux francophones (explications en français) ?",
    answer: "Oui, c'est notre spécialité. Toutes les explications techniques sont données en français clair pour faciliter la compréhension immédiate des concepts."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#f0fafb]">
      <div className="container px-6 mx-auto max-w-[900px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-[#6C757D] text-[18px]">
            Tout ce que vous devez savoir pour commencer sereinement.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-transparent hover:border-[#29BDAD]/20 transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-[#0B414C] font-bold text-[18px] leading-[1.4]">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-6 h-6 text-[#29BDAD] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#6C757D] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === idx && (
                <div className="px-8 pb-6 text-[#6C757D] text-[16px] leading-[1.6]">
                  <hr className="border-t border-[#f0fafb] mb-6" />
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
