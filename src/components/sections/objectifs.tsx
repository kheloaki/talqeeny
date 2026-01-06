import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const objectives = [
  { title: "Lire avec fluidité", outcome: "Finissez-en avec les hésitations et les blocages lors de la lecture." },
  { title: "Appliquer les règles de tajwîd", outcome: "Maîtrisez les règles essentielles pour une récitation conforme." },
  { title: "Améliorer la prononciation (makhârij)", outcome: "Prononcez chaque lettre correctement pour préserver le sens." },
  { title: "Rendre la mémorisation régulière", outcome: "Instaurez une routine solide pour avancer pas à pas." },
  { title: "Réviser sans oublier", outcome: "Apprenez des méthodes pour stabiliser vos acquis durablement." },
  { title: "Gagner en confiance", outcome: "Sentez-vous à l'aise lors de votre récitation, seul ou devant les autres." }
];

export default function Objectifs() {
  return (
    <section id="objectifs" className="py-20 bg-[#f0fafb]">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Vos Objectifs de Progression
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Nous vous accompagnons pour atteindre des résultats concrets et durables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {objectives.map((obj, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-white rounded-[20px] shadow-sm items-start">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-[#29BDAD]" />
              </div>
              <div>
                <h3 className="text-[#0B414C] text-[20px] font-bold mb-2">{obj.title}</h3>
                <p className="text-[#6C757D] text-[16px] leading-[1.5]">
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
