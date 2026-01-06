import React from 'react';

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
    <div className="flex flex-col h-full bg-[#E6F7F5] rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
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

        <hr className="border-t border-[#dee2e6] my-4" />

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
          className="block w-full text-center bg-[#29BDAD] text-white font-bold py-3 px-6 rounded-[20px] transition-all duration-300 hover:bg-[#23a598] text-[16px]"
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

  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={index === 3 ? "lg:col-start-1" : ""}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;