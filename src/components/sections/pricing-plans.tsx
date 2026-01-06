import React from 'react';
import { Check, Info, HelpCircle } from 'lucide-react';

interface PricingPlanProps {
  title: string;
  price: string;
  equivalent: string;
  type: 'Groupe' | 'Individuel';
  sessionsPerWeek: number;
  paymentInstallments?: boolean;
  schedules: string[];
}

const PricingCard: React.FC<PricingPlanProps> = ({
  title,
  price,
  equivalent,
  type,
  sessionsPerWeek,
  paymentInstallments,
  schedules,
}) => {
  return (
    <div className="flex flex-col h-full bg-[#E6F7F5] rounded-[30px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-[#29BDAD]/30">
      <div className="p-[30px] flex-grow">
        <h6 className="text-[#0B414C] font-bold text-[22px] leading-[1.2] mb-4">
          {title}
        </h6>
        
        <div className="mb-4">
          <span className="text-[#0B414C] font-extrabold text-[32px] block">
            {price}
          </span>
          <small className="block text-[#6C757D] text-[14px] mt-1">
            Soit l&apos;équivalent de {equivalent}
          </small>
        </div>

        <div className="text-[#0B414C] text-[16px] mb-3 leading-[1.4]">
          Apprentissage en <strong>{type}</strong><br />
          {sessionsPerWeek} Séance{sessionsPerWeek > 1 ? 's' : ''} par semaine
        </div>

        {paymentInstallments && (
          <div className="mb-4">
            <span className="inline-block bg-[#17A2B8] text-white text-[12px] font-semibold px-2 py-1 rounded-[4px]">
              Paiement en 2 fois Disponible
            </span>
          </div>
        )}

        <hr className="border-t border-[#0B414C]/10 my-4" />

        <h6 className="text-[#6C757D] text-[14px] font-semibold mb-3 uppercase tracking-wider">
          Séances de la Classe
        </h6>
        
        <ul className="space-y-2">
          {schedules.map((schedule, index) => {
            const [day, time] = schedule.split(' | ');
            return (
              <li key={index} className="text-[#0B414C] text-[14px] flex items-start">
                <span className="mr-2 text-[#29BDAD]">•</span>
                <span>
                  <strong>{day}</strong> | {time}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="px-[30px] pb-[30px]">
        <a 
          href="https://www.talqeeny.com/login" 
          className="block w-full text-center bg-[#29BDAD] text-white font-bold py-4 px-6 rounded-[20px] transition-all duration-300 hover:bg-[#23a598] text-[16px] shadow-md hover:shadow-lg"
        >
          Choisir ce plan
        </a>
      </div>
    </div>
  );
};

const PricingPlans: React.FC = () => {
  const plans: PricingPlanProps[] = [
    {
      title: 'Abou Bakr Assidiq',
      price: '41 € / mois',
      equivalent: '489 € / an',
      type: 'Groupe',
      sessionsPerWeek: 2,
      paymentInstallments: true,
      schedules: [
        'Mercredi | 07/01/2026 15:00 (UTC+1)',
        'Samedi | 10/01/2026 09:00 (UTC+1)'
      ]
    },
    {
      title: 'Omar Al Farouq',
      price: '26 € / mois',
      equivalent: '309 € / an',
      type: 'Groupe',
      sessionsPerWeek: 1,
      paymentInstallments: true,
      schedules: [
        'Vendredi | 09/01/2026 18:00 (UTC+1)'
      ]
    },
    {
      title: 'Othmane Ibn Affane',
      price: '59 € / mois',
      equivalent: '355 € / 6 mois',
      type: 'Individuel',
      sessionsPerWeek: 1,
      paymentInstallments: true,
      schedules: [
        'Dimanche | 11/01/2026 18:30 (UTC+1)'
      ]
    },
    {
      title: 'Imame Nafii',
      price: '59 € / mois',
      equivalent: '355 € / 6 mois',
      type: 'Individuel',
      sessionsPerWeek: 1,
      paymentInstallments: true,
      schedules: [
        'Mercredi | 07/01/2026 10:00 (UTC+1)'
      ]
    }
  ];

  const inclusions = [
    "Cours en direct interactifs",
    "Corrections personnalisées",
    "Suivi de progression rigoureux",
    "Conseils de révision exclusifs",
    "Support et accompagnement dédié"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Choisissez votre formule
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Selon votre objectif : lecture, tajwîd ou mémorisation. Trouvez le plan qui vous correspond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div key={index}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          <div className="bg-[#0B414C] p-8 rounded-[30px] text-white h-fit lg:sticky lg:top-24">
            <h3 className="text-[22px] font-bold mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-[#29BDAD]" />
              Ce qui est inclus
            </h3>
            <ul className="space-y-4 mb-8">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px]">
                  <Check className="w-5 h-5 text-[#29BDAD] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white/10 p-4 rounded-[20px] text-[14px] leading-[1.5]">
              <p className="font-bold mb-1">Satisfait ou repositionné</p>
              <p className="opacity-80">Si le groupe ne vous convient pas, nous trouvons une solution ensemble.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#f0fafb] p-8 rounded-[30px] text-center border-2 border-dashed border-[#29BDAD]/30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-[#29BDAD]" />
              <p className="text-[#0B414C] font-bold text-[18px]">
                Besoin d'aide pour choisir ?
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#pricing"
                className="text-[#29BDAD] font-bold hover:underline"
              >
                Réserver une séance gratuite
              </a>
              <span className="text-[#6C757D]">ou</span>
              <a 
                href="#test"
                className="text-[#29BDAD] font-bold hover:underline"
              >
                Faites le test de niveau
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
