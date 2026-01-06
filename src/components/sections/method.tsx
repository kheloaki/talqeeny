import React from 'react';
import { CheckCircle } from 'lucide-react';

const points = [
  "Cours en direct centrés sur la pratique",
  "Correction immédiate + répétition guidée",
  "Exercices simples entre les séances",
  "Suivi continu et ajustement du rythme",
  "Approche adaptée aux francophones (explications claires)"
];

export default function Method() {
  return (
    <section id="methode" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Comment nous enseignons
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Une méthode éprouvée pour garantir une progression fluide et sereine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#f0fafb] p-10 md:p-12 rounded-[40px]">
            <h3 className="text-[#0B414C] text-[28px] font-bold mb-6">Notre Approche</h3>
            <p className="text-[#6C757D] text-[18px] leading-[1.7] mb-6">
              Nous privilégions l'interaction directe et la correction en temps réel. Pas de vidéos pré-enregistrées où vous restez passif : ici, vous pratiquez à chaque séance sous l'œil bienveillant d'un professeur qualifié.
            </p>
            <p className="text-[#6C757D] text-[18px] leading-[1.7]">
              Notre pédagogie est spécifiquement pensée pour le public francophone, en utilisant des comparaisons phonétiques simples pour maîtriser les sons de l'arabe.
            </p>
          </div>

          <div>
            <h3 className="text-[#0B414C] text-[24px] font-bold mb-8">Points clés de la méthode</h3>
            <ul className="space-y-6">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="bg-[#29BDAD]/10 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-[#29BDAD]" />
                  </div>
                  <span className="text-[#0B414C] text-[18px] font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
