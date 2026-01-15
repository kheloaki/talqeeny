import React from 'react';

const steps = [
  {
    title: "Placement",
    description: "Nous vous intégrons dans un groupe homogène ou vous attribuons un professeur pour vos cours individuels."
  },
  {
    title: "Cours en direct",
    description: "Participez à vos séances interactives en ligne avec une correction immédiate de votre récitation du Coran."
  },
  {
    title: "Suivi personnalisé",
    description: "Suivez vos progrès en temps réel et recevez des bilans réguliers pour valider chaque étape de votre apprentissage."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
            Comment ça se passe ?
          </h2>
          <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
            Un processus simple et transparent pour commencer votre apprentissage du Coran en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-[1000px] mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group h-full">
              {/* Step number background */}
              <div className="absolute -top-4 -left-4 text-[100px] font-black text-[#29ABE2]/5 select-none leading-none group-hover:text-[#29ABE2]/10 transition-colors">
                0{idx + 1}
              </div>
              
              <div className="bg-[#F0FAFB] p-10 rounded-[40px] shadow-sm relative z-10 h-full border border-transparent group-hover:border-[#29ABE2]/20 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#29ABE2] text-white flex items-center justify-center font-bold text-[20px] mb-6 shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-[#003049] text-[20px] font-bold mb-4 font-poppins">{step.title}</h3>
                <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
