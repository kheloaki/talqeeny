import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const points = [
  "Cours d'arabe en ligne en direct",
  "Corrections immédiates",
  "Pédagogie adaptée à tout âge : une structure robuste pour les adultes et une approche ludique pour captiver les enfants",
  "Suivi continu de la progression",
  "Apprentissage interactif et bienveillant",
  "Intégration des valeurs et de l'éthique islamique (Al-Adab)"
];

export default function ArabicMethod() {
  return (
    <section id="methode" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Notre Méthode d'Enseignement
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Une approche moderne et efficace pour apprendre l'arabe sereinement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#F0FAFB] p-10 md:p-12 rounded-[40px] md:rounded-[60px] border border-[#29ABE2]/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#29ABE2]/5 blur-2xl rounded-full -mr-12 -mt-12"></div>
            <h3 className="text-[#003049] text-[28px] font-bold mb-6 font-poppins relative z-10">Pourquoi ça marche ?</h3>
            <p className="text-[#5E6266] text-[18px] leading-[1.7] mb-6 font-inter relative z-10">
              Cours en direct, pratique immédiate, corrections en temps réel, progression claire pour francophones. Pas de vidéos passives : ici, vous pratiquez la lecture et l'écriture à chaque séance.
            </p>
            <p className="text-[#5E6266] text-[18px] leading-[1.7] font-inter relative z-10">
              Notre pédagogie est spécifiquement pensée pour le public francophone, facilitant l'apprentissage de l'alphabet arabe et la compréhension des sons.
            </p>
          </div>

          <div>
            <h3 className="text-[#003049] text-[24px] font-bold mb-8 font-poppins">Points clés de notre réussite</h3>
            <ul className="space-y-6">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="bg-[#29ABE2]/10 p-2 rounded-full group-hover:bg-[#29ABE2]/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-[#29ABE2]" />
                  </div>
                  <span className="text-[#003049] text-[18px] font-semibold font-inter">{point}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <a 
              href="#pricing-plans"
              className="bg-[#29ABE2] text-white hover:bg-[#003049] px-10 py-5 rounded-full font-bold transition-all text-center flex items-center justify-center gap-3 font-inter shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Voir les tarifs <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    );
  }

