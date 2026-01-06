import React from 'react';

/**
 * Pricing component for the Talqeeny website clone.
 * Features a 4-card grid for different Quran memorization plans.
 * 
 * Design Details:
 * - Theme: Light
 * - Palette: Teal (#2DB9B0), Soft Teal BG (#E0F5F4), Deep Navy-Teal (#0B485B)
 * - Typography: Inter (sans)
 * - Responsive: 3 columns on large screens, 1 column on mobile.
 */

interface Schedule {
  day: string;
  date: string;
  time: string;
}

interface PricingPlan {
  id: string;
  title: string;
  monthlyPrice: number;
  equivalentPrice: number;
  equivalentPeriod: string;
  type: 'Groupe' | 'Individuel';
  sessionsPerWeek: number;
  hasInstallments: boolean;
  schedule: Schedule[];
}

const PRICING_DATA: PricingPlan[] = [
  {
    id: 'abou-bakr',
    title: 'Abou Bakr Assidiq',
    monthlyPrice: 41,
    equivalentPrice: 489,
    equivalentPeriod: 'an',
    type: 'Groupe',
    sessionsPerWeek: 2,
    hasInstallments: true,
    schedule: [
      { day: 'Mercredi', date: '07/01/2026', time: '15:00 (UTC+1)' },
      { day: 'Samedi', date: '10/01/2026', time: '09:00 (UTC+1)' },
    ],
  },
  {
    id: 'omar-al-farouq',
    title: 'Omar Al Farouq',
    monthlyPrice: 26,
    equivalentPrice: 309,
    equivalentPeriod: 'an',
    type: 'Groupe',
    sessionsPerWeek: 1,
    hasInstallments: true,
    schedule: [
      { day: 'Vendredi', date: '09/01/2026', time: '18:00 (UTC+1)' },
    ],
  },
  {
    id: 'othmane-ibn-affane',
    title: 'Othmane Ibn Affane',
    monthlyPrice: 59,
    equivalentPrice: 355,
    equivalentPeriod: '6 mois',
    type: 'Individuel',
    sessionsPerWeek: 1,
    hasInstallments: true,
    schedule: [
      { day: 'Dimanche', date: '11/01/2026', time: '18:30 (UTC+1)' },
    ],
  },
  {
    id: 'imame-nafii',
    title: 'Imame Nafii',
    monthlyPrice: 59,
    equivalentPrice: 355,
    equivalentPeriod: '6 mois',
    type: 'Individuel',
    sessionsPerWeek: 1,
    hasInstallments: true,
    schedule: [
      { day: 'Mercredi', date: '07/01/2026', time: '10:00 (UTC+1)' },
    ],
  },
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div className="flex flex-col bg-[#E0F5F4] rounded-[20px] transition-transform duration-300 hover:-translate-y-1 overflow-hidden h-full">
      <div className="p-[30px] flex-grow">
        <h6 className="text-[20px] font-bold text-[#0B485B] mb-4 font-sans">
          {plan.title}
        </h6>
        
        <div className="mb-4">
          <div className="text-[24px] font-bold text-[#0B485B] font-sans">
            {plan.monthlyPrice} € / mois
          </div>
          <p className="text-[#6B7280] text-[14px] mt-1 mb-0 leading-tight">
            Soit l&apos;équivalent de {plan.equivalentPrice} € / {plan.equivalentPeriod}
          </p>
        </div>

        <div className="mb-4 text-[16px] text-[#0B485B]">
          Apprentissage en <strong>{plan.type}</strong>
          <br />
          {plan.sessionsPerWeek} Séance{plan.sessionsPerWeek > 1 ? 's' : ''} par semaine
        </div>

        {plan.hasInstallments && (
          <div className="mb-4">
            <span className="bg-[#0DCAF0] text-white text-[11px] font-bold px-2 py-1 rounded-[4px] inline-block uppercase tracking-wider">
              Paiement en 2 fois Disponible
            </span>
          </div>
        )}

        <hr className="border-[#DEE2E6] my-4" />

        <div className="mb-2">
          <h6 className="text-[#6B7280] text-[14px] font-bold uppercase tracking-wide mb-3">
            Séances de la Classe
          </h6>
          <ul className="space-y-2">
            {plan.schedule.map((item, idx) => (
              <li key={idx} className="text-[14px] text-[#6B7280] list-none relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#2DB9B0]">
                <strong className="text-[#0B485B]">{item.day}</strong> | {item.date} {item.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a 
        href="https://www.talqeeny.com/login" 
        className="block bg-[#2DB9B0] text-white text-center py-4 font-semibold text-[16px] hover:bg-[#25a39a] transition-colors duration-200"
      >
        Choisir ce plan
      </a>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Course Info Context (Referenced from HTML) */}
        <div className="mb-12">
          <h2 className="text-[36px] font-bold text-[#0B485B] mb-6">
            Cursus Talqeen Coran (Mémorisation)
          </h2>
          <h4 className="text-[20px] font-semibold text-[#0B485B] mb-6">
            On gère la mémorisation, vous retrouvez la sérénité !
          </h4>
          
          <div className="space-y-8 text-[#6B7280]">
            <div>
              <h3 className="text-[28px] font-bold text-[#0B485B] mb-3">Ambition</h3>
              <p>Mémoriser durablement avec une charge parentale minimale. Nous plaçons la mémorisation et sa consolidation au cœur de la séance live, puis nous prolongeons par des rituels simples à la maison.</p>
            </div>

            <div>
              <h3 className="text-[28px] font-bold text-[#0B485B] mb-3">Formats & suivi</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Groupes :</strong> 5 élèves, 90 minutes par séance, deux séances par semaine.
                </li>
                <li>
                  <strong>Cours particuliers :</strong> 1 élève – 1 Professeur, 60 minutes par séance, deux séances par semaine.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {/* First row of 3 */}
          {PRICING_DATA.slice(0, 3).map((plan) => (
            <div key={plan.id} className="w-full">
              <PricingCard plan={plan} />
            </div>
          ))}
          
          {/* Last item (Imame Nafii) starts on a new row but usually grids handle this.
              In the screenshot it's shown as a 4th card below. */}
          <div className="w-full">
            <PricingCard plan={PRICING_DATA[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}