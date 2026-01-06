import React from 'react';

interface PricingPlan {
  title: string;
  price: string;
  totalEquivalent: string;
  type: string;
  sessionsPerWeek: number;
  paymentPlan?: string;
  sessions: { day: string; date: string; time: string }[];
}

const CourseDescription = () => {
  const plans: PricingPlan[] = [
    {
      title: "Abou Bakr Assidiq",
      price: "41 € / mois",
      totalEquivalent: "Soit l’équivalent de 489 € / an",
      type: "Groupe",
      sessionsPerWeek: 2,
      paymentPlan: "Paiement en 2 fois Disponible",
      sessions: [
        { day: "Mercredi", date: "07/01/2026", time: "15:00 (UTC+1)" },
        { day: "Samedi", date: "10/01/2026", time: "09:00 (UTC+1)" }
      ]
    },
    {
      title: "Omar Al Farouq",
      price: "26 € / mois",
      totalEquivalent: "Soit l’équivalent de 309 € / an",
      type: "Groupe",
      sessionsPerWeek: 1,
      paymentPlan: "Paiement en 2 fois Disponible",
      sessions: [
        { day: "Vendredi", date: "09/01/2026", time: "18:00 (UTC+1)" }
      ]
    },
    {
      title: "Othmane Ibn Affane",
      price: "59 € / mois",
      totalEquivalent: "Soit l’équivalent de 355 € / 6 mois",
      type: "Individuel",
      sessionsPerWeek: 1,
      paymentPlan: "Paiement en 2 fois Disponible",
      sessions: [
        { day: "Dimanche", date: "11/01/2026", time: "18:30 (UTC+1)" }
      ]
    },
    {
      title: "Imame Nafii",
      price: "59 € / mois",
      totalEquivalent: "Soit l’équivalent de 355 € / 6 mois",
      type: "Individuel",
      sessionsPerWeek: 1,
      paymentPlan: "Paiement en 2 fois Disponible",
      sessions: [
        { day: "Mercredi", date: "07/01/2026", time: "10:00 (UTC+1)" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Course Info Section */}
        <div className="mb-12">
          <h2 className="text-[36px] font-bold text-[#0B485B] mb-2">
            Cursus Talqeen Coran (Mémorisation)
          </h2>
          <p className="invisible h-4">{" "}</p>
          <h4 className="text-[20px] font-bold text-[#0B485B] mb-6">
            On gère la mémorisation, vous retrouvez la sérénité !
          </h4>
          <p className="invisible h-2">{" "}</p>

          <div className="space-y-10">
            <div>
              <h3 className="text-[28px] font-semibold text-[#0B485B] mb-4">
                Ambition
              </h3>
              <p className="text-[#6B7280] leading-[1.6] max-w-4xl">
                Mémoriser durablement avec une charge parentale minimale. Nous plaçons la mémorisation et sa consolidation au cœur de la séance live, puis nous prolongeons par des rituels simples à la maison.
              </p>
            </div>

            <div>
              <h3 className="text-[28px] font-semibold text-[#0B485B] mb-4">
                Différenciation
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[#6B7280]">
                <li>L’essentiel se fait en classe : l’enfant apprend et mémorise en séance.</li>
                <li>Répétitions guidées par le professeur, posture positive et motivante.</li>
                <li>Ancrage par petites écritures/visualisations selon l’âge (sans devoirs lourds).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[28px] font-semibold text-[#0B485B] mb-4">
                Notre méthode
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[#6B7280]">
                <li>Révision d’entrée (séance précédente), puis nouvel apprentissage structuré.</li>
                <li>Répétitions collectives et individuelles sous guidance, preuves de progression.</li>
                <li>
                  <span className="font-bold text-[#0B485B]">Intégration progressive du tajwid (règle du jour),</span> focus sur 1–2 règles par passage
                </li>
                <li>Activités ludiques d’ancrage & d’attachement</li>
                <li>Audios standardisés remis aux familles, fiche « règle du jour » simplifiée, rituels quotidiens simples (10 répétitions/jour).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[28px] font-semibold text-[#0B485B] mb-4">
                Progression type
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[#6B7280]">
                <li><span className="font-bold text-[#0B485B]">Niveau 1 :</span> 10 dernières sourates (Al-Fîl → An-Nâs).</li>
                <li><span className="font-bold text-[#0B485B]">Niveau 2 :</span> Juz ‘Amma complet.</li>
                <li><span className="font-bold text-[#0B485B]">Niveau 3 :</span> élargissement progressif selon profil et assiduité.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[28px] font-semibold text-[#0B485B] mb-4">
                Formats & suivi
              </h3>
              <div className="space-y-4">
                <div className="text-[#6B7280]">
                  <p className="font-bold text-[#0B485B] mb-2">Groupes :</p>
                  <p className="mb-2">Groupes de 5 élèves, 90 minutes par séance, deux séances par semaine.</p>
                  <p>Cours particuliers 1 élève – 1 Professeur, 60 minutes par séance, deux séances par semaine.</p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-[#6B7280]">
                  <li>Rappels parents concis, preuve audio en fin de séance si requis.</li>
                  <li>Tableau parent synthétique (régularité, jalons, conseils).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 pb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="pricing-card flex flex-col h-full bg-[#E0F5F4] rounded-[20px] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="pricing-card-content flex-grow bg-white m-[15px] p-[30px] pb-5 rounded-b-[20px] rounded-t-none">
                <h6 className="text-[20px] font-bold text-[#0B485B] mb-4">{plan.title}</h6>
                
                <div className="mb-4">
                  <span className="text-[24px] font-bold text-[#0B485B]">
                    {plan.price}
                  </span>
                  <div className="text-[14px] text-muted-foreground mt-1">
                    {plan.totalEquivalent}
                  </div>
                </div>

                <div className="text-[16px] text-[#0B485B] mb-3">
                  Apprentissage en <span className="font-bold">{plan.type}</span><br />
                  {plan.sessionsPerWeek} Séance{plan.sessionsPerWeek > 1 ? 's' : ''} par semaine
                </div>

                {plan.paymentPlan && (
                  <div className="mb-6">
                    <span className="bg-[#0DCAF0] text-white text-[12px] px-2 py-1 rounded-sm font-medium">
                      {plan.paymentPlan}
                    </span>
                  </div>
                )}

                <hr className="border-[#DEE2E6] mb-4" />

                <div>
                  <h6 className="text-[#6B7280] text-[14px] font-bold uppercase tracking-wider mb-3">
                    Séances de la Classe
                  </h6>
                  <ul className="space-y-2">
                    {plan.sessions.map((session, sIdx) => (
                      <li key={sIdx} className="text-[14px] text-[#6B7280] leading-relaxed">
                        <span className="font-bold">{session.day}</span> | {session.date} {session.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-[15px] pt-0">
                <a 
                  href="https://www.talqeeny.com/login" 
                  className="block w-full text-center py-3 bg-[#2DB9B0] text-white font-semibold rounded-b-[20px] transition-all hover:brightness-95"
                >
                  Choisir ce plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;