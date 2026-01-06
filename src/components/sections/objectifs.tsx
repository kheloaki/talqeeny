import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const objectives = [
  { title: "Lire le Coran avec fluidité", outcome: "Finissez-en avec les hésitations et les blocages grâce à la méthode Nourania." },
  { title: "Maîtriser les règles de tajwid", outcome: "Apprenez et appliquez les règles de tajwid essentielles pour une récitation conforme." },
  { title: "Prononciation (Makharij)", outcome: "Prononcez chaque lettre correctement pour préserver le sens sacré des versets." },
  { title: "Mémoriser le Coran (Hifz)", outcome: "Instaurez une routine solide pour avancer pas à pas dans votre mémorisation." },
  { title: "Réviser sans oublier", outcome: "Utilisez des méthodes d'ancrage pour stabiliser vos acquis durablement." },
  { title: "Arabe coranique", outcome: "Commencez à comprendre le sens des mots que vous récitez au quotidien." }
];

export default function Objectifs() {
  return (
    <section id="objectifs" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Vos Objectifs de Progression
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Nous vous accompagnons pour atteindre des résultats concrets et durables dans votre apprentissage du Coran en ligne.
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
      </div>
    </section>
  );
}
