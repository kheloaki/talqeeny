import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

const NouraniaPricingPlans = () => {
    const plans = [
      {
        title: "Nourania Individuel",
        price: "110€",
        period: "/ mois",
        yearlyInfo: "Soit 329 € / 3 mois",
        features: [
          "Cours individuel 1:1",
          "1 séance / semaine (60 min)",
          "100% personnalisé"
        ],
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg",
        popular: true
      },
      {
        title: "Nourania Groupe",
        price: "Sur demande",
        period: "",
        yearlyInfo: "Groupe de 5-7 élèves",
        features: [
          "Apprentissage en groupe",
          "1 séance / semaine (60-90 min)",
          "Motivation collective"
        ],
        bgColor: "bg-[#FFF4E0]",
        buttonBg: "#F9BE2F",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon1.svg"
      }
    ];

    const included = [
      "Cours en direct",
      "Correction en temps réel",
      "Progression Nourania structurée",
      "Suivi de progression",
      "Conseils de révision"
    ];

    return (
      <section id="pricing-plans" className="pricing-section py-[100px] relative overflow-hidden">
        <div className="container px-4">
          <div className="bg-[#29ABE2] rounded-[40px] pt-[80px] pb-[150px] md:pb-[200px] relative px-6 md:px-12 text-center text-white shadow-xl">
            
            <div className="max-w-[800px] mx-auto mb-[60px]">
              <h2 className="text-white font-display text-[2.5rem] md:text-[3rem] font-bold leading-[1.2] mb-6">
                Tarifs de nos cours de Nourania en ligne
              </h2>
              <p className="text-white/90 font-sans text-lg opacity-90 mb-4">
                Choisissez votre formule selon votre niveau et votre objectif (lecture du Coran, bases du tajwîd, fluidité).
              </p>
              <p className="text-white font-bold text-xl">
                À partir de 110 €/mois (soit l'équivalent de 329 € / 3 mois)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto translate-y-[10%] md:translate-y-[15%]">

            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`${plan.bgColor} rounded-[30px] overflow-hidden flex flex-col shadow-soft-ui transition-transform duration-300 hover:-translate-y-2 text-left relative`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-[#29ABE2] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Populaire
                  </div>
                )}
                <div className="p-6 pb-0">
                  <h4 className={`${plan.textColor} font-display text-lg font-bold mb-3`}>
                    {plan.title}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`${plan.textColor} text-[2rem] font-bold leading-none font-display`}>
                      {plan.price}
                    </span>
                    <span className="text-[#5E6266] text-base font-sans">{plan.period}</span>
                  </div>
                  <p className="text-[#5E6266] text-xs font-sans mb-6">
                    {plan.yearlyInfo}
                  </p>
                </div>

                  <div className="px-6 flex-grow">
                    <ul className="space-y-3 text-left border-t border-black/5 pt-6 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <img src={plan.checkIcon} alt="crochet" className="w-4 h-4 flex-shrink-0" />
                          <span className="text-[#003049] text-sm font-sans font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-5 pb-5 mt-auto">
                    <a 
                      href="https://www.talqeeny.com/register"
                      className={`block w-full py-3 rounded-[15px] text-white font-sans font-bold text-center transition-opacity hover:opacity-90 text-sm`}
                      style={{ backgroundColor: plan.buttonBg }}
                    >
                      Choisir ce plan
                    </a>
                  </div>
                </div>
              ))}
              </div>
            </div>

            <div className="max-w-[800px] mx-auto mt-32 md:mt-40">
              <div className="bg-[#F0FAFB] rounded-[30px] p-8 md:p-10">
                <h3 className="text-[#003049] text-[24px] font-bold mb-6 font-poppins text-center">Ce qui est inclus</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {included.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#29ABE2] flex-shrink-0" />
                      <span className="text-[#003049] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-[#5E6266] mb-6">
                  Besoin d'aide ? Faites le test de niveau (2 min) ou réservez une séance gratuite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#pricing-plans"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#29ABE2] text-[#29ABE2] hover:bg-[#29ABE2] hover:text-white px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    Faire le test de niveau (2 min)
                  </a>
                  <a 
                    href="#pricing-plans"
                    className="inline-flex items-center justify-center gap-2 bg-[#29ABE2] hover:bg-[#2399cc] text-white px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    Réserver une séance gratuite <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[20%] left-[-50px] opacity-20 pointer-events-none">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/workProcessShape1_1-13.png"
              alt="décoration"
              width={250}
              height={250}
              className="animate-pulse"
            />
          </div>
      </section>
    );
};

export default NouraniaPricingPlans;
