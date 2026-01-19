import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

const NouraniaPricingPlans = () => {
    const plans = [
      {
        title: "Ali Ibn Abi Talib",
        price: "110 €",
        period: "/ mois",
        equivalent: "Soit l'équivalent de 329 € / 3 mois",
        type: "Individuel",
        seance: "1 Séance par semaine",
        badge: "Paiement en 2 fois Disponible",
        classeTitle: "Séances de la Classe",
        classeDay: "Samedi",
        classeDate: "24/01/2026 11:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        titleColor: "text-[#29ABE2]",
        badgeBg: "bg-[#29ABE2]",
        dotColor: "bg-[#29ABE2]"
      },
      {
        title: "Azobair Ibn Lawame",
        price: "110 €",
        period: "/ mois",
        equivalent: "Soit l'équivalent de 329 € / 3 mois",
        type: "Individuel",
        seance: "1 Séance par semaine",
        badge: "Paiement en 2 fois Disponible",
        classeTitle: "Séances de la Classe",
        classeDay: "Mercredi",
        classeDate: "21/01/2026 10:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        titleColor: "text-[#29ABE2]",
        badgeBg: "bg-[#2CBDB2]",
        dotColor: "bg-[#29ABE2]"
      },
      {
        title: "Al Jorjani",
        price: "110 €",
        period: "/ mois",
        equivalent: "Soit l'équivalent de 329 € / 3 mois",
        type: "Individuel",
        seance: "1 Séance par semaine",
        badge: "Paiement en 2 fois Disponible",
        classeTitle: "Séances de la Classe",
        classeDay: "Samedi",
        classeDate: "24/01/2026 10:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        titleColor: "text-[#29ABE2]",
        badgeBg: "bg-[#29ABE2]",
        dotColor: "bg-[#29ABE2]"
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
      <section id="pricing-plans" className="pricing-section py-[60px] relative overflow-hidden bg-[#E8F6F8]">
        <div className="container px-4 max-w-[1200px] mx-auto">
          
          <div className="mb-10">
            <h3 className="text-[#003049] font-bold text-xl mb-6">Formats & suivi</h3>
            <div className="text-[#5E6266] space-y-2 text-sm leading-relaxed">
              <p><span className="font-semibold text-[#003049]">Groupes :</span></p>
              <p>Groupe de 5-7 élèves, 60 ou 90 minutes par séance en fonction de l'âge, une séance par semaine.</p>
              <p>Cours particuliers 1 élève – 1 Professeur, 60 minutes par séance, une séance par semaine.</p>
              <p>Révisions systématiques en début de séance, consolidation en fin de séance.</p>
              <p>Devoirs maison courts : écoute d'audios, 10 lectures à voix haute/jour (guidées).</p>
              <p>Feedback parent clair (jalons de lecture, régularité).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`${plan.bgColor} rounded-[20px] overflow-hidden flex flex-col shadow-sm`}
              >
                <div className="p-6 pb-4">
                  <h4 className={`${plan.titleColor} font-bold text-xl mb-4`}>
                    {plan.title}
                  </h4>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[#003049] text-[2.5rem] font-bold leading-none">
                      {plan.price}
                    </span>
                    <span className="text-[#003049] text-[2.5rem] font-bold leading-none">
                      {plan.period}
                    </span>
                  </div>
                  
                  <p className="text-[#5E6266] text-sm mb-5">
                    {plan.equivalent}
                  </p>
                  
                  <p className="text-[#5E6266] text-sm mb-1">
                    Apprentissage en <span className="font-bold text-[#003049]">{plan.type}</span>
                  </p>
                  
                  <p className="text-[#5E6266] text-sm mb-4">
                    {plan.seance}
                  </p>
                  
                  <span className={`inline-block ${plan.badgeBg} text-white text-xs font-medium px-3 py-1.5 rounded-md`}>
                    {plan.badge}
                  </span>
                </div>

                <div className="px-6 pb-4 flex-grow border-t border-[#c5e8ed] mt-2 pt-4">
                  <h5 className="text-[#003049] font-bold text-lg mb-3">
                    {plan.classeTitle}
                  </h5>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${plan.dotColor}`}></span>
                    <span className="text-[#003049] text-sm">
                      <span className="font-semibold">{plan.classeDay}</span> | {plan.classeDate}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6 mt-auto">
                  <a 
                    href="https://www.talqeeny.com/register"
                    className="block w-full py-4 rounded-[15px] text-white font-bold text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: plan.buttonBg }}
                  >
                    Choisir ce plan
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[800px] mx-auto mt-16">
            <div className="bg-white rounded-[30px] p-8 md:p-10">
              <h3 className="text-[#003049] text-[24px] font-bold mb-6 text-center">Ce qui est inclus</h3>
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
                Besoin d'aide ? Réservez une séance gratuite pour en discuter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    );
};

export default NouraniaPricingPlans;
