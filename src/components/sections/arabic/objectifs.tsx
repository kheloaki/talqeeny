import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const objectives = [
  { title: "Lire l'alphabet arabe avec confiance", outcome: "Maîtrisez chaque lettre, chaque son, et lisez vos premiers mots en toute sérénité." },
  { title: "Améliorer la prononciation (sons difficiles)", outcome: "Travaillez les sons spécifiques de l'arabe pour une prononciation claire et précise." },
  { title: "Lire des mots puis des phrases", outcome: "Passez progressivement de la lecture de syllabes à des phrases complètes." },
  { title: "Écrire progressivement (lettres, mots)", outcome: "Apprenez à tracer les lettres arabes et à écrire vos premiers mots." },
  { title: "Comprendre un vocabulaire essentiel", outcome: "Acquérez le vocabulaire de base pour communiquer et comprendre des textes simples." },
  { title: "Arabe classique (bases utiles)", outcome: "Découvrez le vocabulaire et les structures fréquentes dans les textes sacrés du Coran et du Hadith Nabawi." }
];

export default function ArabicObjectifs() {
  return (
    <section id="objectifs" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Vos Objectifs de Progression
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Nous vous accompagnons pour atteindre des résultats concrets et durables dans votre apprentissage de l'arabe.
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {objectives.map((obj, idx) => (
              <div key={idx} className="flex gap-4 p-8 bg-[#F0FAFB] rounded-[30px] border border-transparent hover:border-[#29ABE2] transition-all duration-300 shadow-sm items-start group">
                <div className="mt-1 bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-[#29ABE2]" />
                </div>
                <div>
                  <h3 className="text-[#003049] text-[20px] font-bold mb-2 font-poppins">{obj.title}</h3>
                  <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                    {obj.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex gap-4 p-8 bg-[#F0FAFB] rounded-[30px] border border-transparent hover:border-[#29ABE2] transition-all duration-300 shadow-sm items-start group">
              <div className="mt-1 bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-[#29ABE2]" />
              </div>
              <div>
                <h3 className="text-[#003049] text-[20px] font-bold mb-2 font-poppins">Exercices pratiques & révisions guidées</h3>
                <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                  Mini-devoirs adaptés à tout âge : des exercices concrets pour les adultes et des activités ludiques pour les enfants, basés sur des exemples qui cultivent les bonnes manières (Al-Adab) et les valeurs éthiques de l'Islam.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
