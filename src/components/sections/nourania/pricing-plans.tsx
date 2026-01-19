import React from 'react';
import Image from 'next/image';

const NouraniaPricingPlans = () => {
    const plans = [
      {
        title: "Ali Ibn Abi Talib",
        price: "110€",
        period: "/ mois",
        yearlyInfo: "Soit l'équivalent de 329€ / 3 mois",
        features: [
          "Apprentissage en Individuel",
          "1 Séance par semaine",
          "Paiement en 2 fois Disponible"
        ],
        classeDay: "Samedi",
        classeDate: "24/01/2026 11:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg"
      },
      {
        title: "Azobair Ibn Lawame",
        price: "110€",
        period: "/ mois",
        yearlyInfo: "Soit l'équivalent de 329€ / 3 mois",
        features: [
          "Apprentissage en Individuel",
          "1 Séance par semaine",
          "Paiement en 2 fois Disponible"
        ],
        classeDay: "Mercredi",
        classeDate: "21/01/2026 10:00 (UTC+1)",
        bgColor: "bg-[#E0F2F1]",
        buttonBg: "#2CBDB2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon3.svg"
      },
      {
        title: "Al Jorjani",
        price: "110€",
        period: "/ mois",
        yearlyInfo: "Soit l'équivalent de 329€ / 3 mois",
        features: [
          "Apprentissage en Individuel",
          "1 Séance par semaine",
          "Paiement en 2 fois Disponible"
        ],
        classeDay: "Samedi",
        classeDate: "24/01/2026 10:00 (UTC+1)",
        bgColor: "bg-[#D9F2F7]",
        buttonBg: "#29ABE2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg"
      }
    ];

    return (
      <section id="pricing-plans" className="pricing-section py-[100px] relative overflow-hidden">
        <div className="container px-4">
          <div className="bg-[#29ABE2] rounded-[40px] pt-[80px] pb-[150px] md:pb-[200px] relative px-6 md:px-12 text-center text-white shadow-xl">
            
            <div className="max-w-[800px] mx-auto mb-[60px]">
              <h2 className="text-white font-display text-[2.5rem] md:text-[3rem] font-bold leading-[1.2] mb-6">
                Tarifs Méthode Nourania
              </h2>
              <p className="text-white/90 font-sans text-lg opacity-90">
                Des formules accessibles pour maîtriser la lecture du Coran avec la méthode Nourania. Sans engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto translate-y-[10%] md:translate-y-[15%]">

            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`${plan.bgColor} rounded-[30px] overflow-hidden flex flex-col shadow-soft-ui transition-transform duration-300 hover:-translate-y-2 text-left`}
              >
                <div className="p-8 pb-0">
                  <h4 className={`${plan.textColor} font-display text-xl font-bold mb-4`}>
                    {plan.title}
                  </h4>
                  <p className="text-[#5E6266] text-sm mb-1 font-sans">À partir de</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`${plan.textColor} text-[2.5rem] font-bold leading-none font-display`}>
                      {plan.price}
                    </span>
                    <span className="text-[#5E6266] text-lg font-sans">{plan.period}</span>
                  </div>
                  <p className="text-[#5E6266] text-xs font-sans mb-8">
                    {plan.yearlyInfo}
                  </p>
                </div>

                  <div className="px-8 flex-grow">
                    <ul className="space-y-4 text-left border-t border-black/5 pt-8 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <img src={plan.checkIcon} alt="crochet" className="w-5 h-5 flex-shrink-0" />
                          <span className="text-[#003049] text-sm font-sans font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-black/5 pt-6 mb-6">
                      <h5 className="text-[#003049] font-bold text-base mb-3">Séances de la Classe</h5>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: plan.buttonBg }}></span>
                        <span className="text-[#003049] text-sm">
                          <span className="font-semibold">{plan.classeDay}</span> | {plan.classeDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 mt-auto">
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
