import React from 'react';
import { CheckCircle } from 'lucide-react';

const points = [
  "Cours de Coran en ligne en direct",
  "Correction immédiate des règles de tajwid",
  "Pédagogie adaptée aux francophones",
  "Suivi continu de votre mémorisation (Hifz)",
  "Apprentissage interactif et bienveillant"
];

export default function Method() {
  return (
    <section id="methode" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Notre Méthode d'Enseignement
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Une approche moderne et efficace pour apprendre le Coran en ligne sereinement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#F0FAFB] p-10 md:p-12 rounded-[40px] md:rounded-[60px] border border-[#29ABE2]/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#29ABE2]/5 blur-2xl rounded-full -mr-12 -mt-12"></div>
            <h3 className="text-[#003049] text-[28px] font-bold mb-6 font-poppins relative z-10">Pourquoi ça marche ?</h3>
            <p className="text-[#5E6266] text-[18px] leading-[1.7] mb-6 font-inter relative z-10">
              Nous privilégions l'interaction directe et la <strong>correction en temps réel</strong>. Pas de vidéos passives : ici, vous pratiquez la récitation du Coran à chaque séance sous l'œil bienveillant d'un professeur qualifié.
            </p>
            <p className="text-[#5E6266] text-[18px] leading-[1.7] font-inter relative z-10">
              Notre pédagogie est spécifiquement pensée pour le public francophone, facilitant la maîtrise des règles de tajwid et de la méthode Nourania.
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
      </div>
    </section>
  );
}
