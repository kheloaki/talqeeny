import React from 'react';
import Image from 'next/image';

const PricingPlans = () => {
    const plans = [
      {
        title: "Abou Bakr Assidiq",
        price: "41€",
        period: "/ mois",
        yearlyInfo: "Soit l’équivalent de 489€ / an",
        features: [
          "Apprentissage en Groupe",
          "2 Séances par semaine",
          "Mercredi 15:00 & Samedi 09:00"
        ],
        bgColor: "bg-[#D9F2F7]", // Light Blue
        buttonBg: "#29ABE2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg"
      },
      {
        title: "Omar Al Farouq",
        price: "26€",
        period: "/ mois",
        yearlyInfo: "Soit l’équivalent de 309€ / an",
        features: [
          "Apprentissage en Groupe",
          "1 Séance par semaine",
          "Vendredi 18:00 (UTC+1)"
        ],
        bgColor: "bg-[#FFF4E0]", // Light Yellow/Beige
        buttonBg: "#F9BE2F",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon1.svg"
      },
      {
        title: "Othmane Ibn Affane",
        price: "59€",
        period: "/ mois",
        yearlyInfo: "Soit l’équivalent de 355€ / 6 mois",
        features: [
          "Apprentissage Individuel",
          "1 Séance par semaine",
          "Dimanche 18:30 (UTC+1)"
        ],
        bgColor: "bg-[#E0F2F1]", // Light Green/Teal
        buttonBg: "#2CBDB2",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon3.svg"
      },
      {
        title: "Imame Nafii",
        price: "59€",
        period: "/ mois",
        yearlyInfo: "Soit l’équivalent de 355€ / 6 mois",
        features: [
          "Apprentissage Individuel",
          "1 Séance par semaine",
          "Mercredi 10:00 (UTC+1)"
        ],
        bgColor: "bg-[#E3F2FD]", // Light Sky Blue
        buttonBg: "#33C6E5",
        textColor: "text-[#003049]",
        checkIcon: "https://www.talqeeny.com/assets/images/icon/checkmarkIcon2.svg"
      }
    ];

    return (
      <section id="pricing-plans" className="pricing-section py-[100px] relative overflow-hidden">
        <div className="container px-4">
          {/* Main Background Container */}
          <div className="bg-[#29ABE2] rounded-[40px] pt-[80px] pb-[150px] md:pb-[200px] relative px-6 md:px-12 text-center text-white shadow-xl">
            
            {/* Section Header */}
            <div className="max-w-[800px] mx-auto mb-[60px]">
              <h2 className="text-white font-display text-[2.5rem] md:text-[3rem] font-bold leading-[1.2] mb-6">
                Mémorisez le Coran à votre rythme !
              </h2>
              <p className="text-white/90 font-sans text-lg opacity-90">
                Choisissez le plan qui correspond à vos objectifs et rejoignez notre cursus dès aujourd'hui.
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto translate-y-[10%] md:translate-y-[15%]">

            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`${plan.bgColor} rounded-[30px] overflow-hidden flex flex-col shadow-soft-ui transition-transform duration-300 hover:-translate-y-2 text-left`}
              >
                {/* Card Header */}
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

                  {/* Features List */}
                  <div className="px-8 flex-grow">
                    <ul className="space-y-4 text-left border-t border-black/5 pt-8 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <img src={plan.checkIcon} alt="crochet" className="w-5 h-5 flex-shrink-0" />
                          <span className="text-[#003049] text-sm font-sans font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Button */}
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
          
          {/* Background Decorative Element */}
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

export default PricingPlans;
