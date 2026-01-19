import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

const NouraniaPricingPlans = () => {
    const plans = [
      {
        title: "Ali Ibn Abi Talib",
        price: "110 €",
        period: "/ mois",
        yearlyInfo: "Soit l'équivalent de 329 € / 3 mois",
        features: [
          "Apprentissage en Individuel",
          "1 Séance par semaine",
          "Paiement en 2 fois Disponible"
        ],
        sessionInfo: "Samedi | 24/01/2026 11:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg"
      },
      {
        title: "Azobair Ibn Lawame",
        price: "110 €",
        period: "/ mois",
        yearlyInfo: "Soit l'équivalent de 329 € / 3 mois",
        features: [
          "Apprentissage en Individuel",
          "1 Séance par semaine",
          "Paiement en 2 fois Disponible"
        ],
        sessionInfo: "Mercredi | 21/01/2026 10:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg"
      },
      {
        title: "Al Jorjani",
        price: "110 €",
        period: "/ mois",
        yearlyInfo: "Soit l'équivalent de 329 € / 3 mois",
        features: [
          "Apprentissage en Individuel",
          "1 Séance par semaine",
          "Paiement en 2 fois Disponible"
        ],
        sessionInfo: "Samedi | 24/01/2026 10:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg"
      }
    ];

    const formatInfo = [
      "Groupe de 5-7 élèves, 60 ou 90 minutes par séance en fonction de l'âge, une séance par semaine.",
      "Cours particuliers 1 élève – 1 Professeur, 60 minutes par séance, une séance par semaine.",
      "Révisions systématiques en début de séance, consolidation en fin de séance.",
      "Devoirs maison courts : écoute d'audios, 10 lectures à voix haute/jour (guidées).",
      "Feedback parent clair (jalons de lecture, régularité)."
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
          <div className="bg-[#F0FAFB] rounded-[40px] pt-[60px] pb-[60px] relative px-6 md:px-12">
            
            <div className="max-w-[800px] mx-auto mb-[40px]">
              <h2 className="text-[#003049] font-display text-[1.5rem] md:text-[1.75rem] font-bold leading-[1.2] mb-6">
                Formats & suivi
              </h2>
              <div className="space-y-2">
                <p className="text-[#5E6266] font-semibold">Groupes :</p>
                {formatInfo.map((info, idx) => (
                  <p key={idx} className="text-[#5E6266] text-[15px]">{info}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`${plan.bgColor} rounded-[30px] overflow-hidden flex flex-col shadow-soft-ui transition-transform duration-300 hover:-translate-y-2 text-left`}
                >
                  <div className="p-6 pb-4">
                    <h4 className="text-[#29ABE2] font-display text-xl font-bold mb-4">
                      {plan.title}
                    </h4>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className={`${plan.textColor} text-[2.5rem] font-bold leading-none font-display`}>
                        {plan.price}
                      </span>
                      <span className="text-[#5E6266] text-lg font-sans">{plan.period}</span>
                    </div>
                    <p className="text-[#5E6266] text-sm font-sans mb-4">
                      {plan.yearlyInfo}
                    </p>
                    <p className="text-[#5E6266] text-sm font-sans mb-2">
                      Apprentissage en <span className="font-bold">Individuel</span>
                    </p>
                    <p className="text-[#5E6266] text-sm font-sans mb-3">
                      1 Séance par semaine
                    </p>
                    <span className="inline-block bg-[#29ABE2] text-white text-xs font-bold px-3 py-1 rounded-md">
                      Paiement en 2 fois Disponible
                    </span>
                  </div>

                  <div className="px-6 flex-grow border-t border-black/5 pt-4">
                    <h5 className="text-[#003049] font-bold text-base mb-3">Séances de la Classe</h5>
                    <div className="flex items-center gap-2 text-[#5E6266] text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#29ABE2]"></span>
                      <span><span className="font-semibold">{plan.sessionInfo.split(' | ')[0]}</span> | {plan.sessionInfo.split(' | ')[1]}</span>
                    </div>
                  </div>

                  <div className="px-5 pb-5 mt-6">
                    <a 
                      href="https://www.talqeeny.com/register"
                      className={`block w-full py-4 rounded-[15px] text-white font-sans font-bold text-center transition-opacity hover:opacity-90`}
                      style={{ backgroundColor: plan.buttonBg }}
                    >
                      Choisir ce plan
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[800px] mx-auto mt-16">
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
