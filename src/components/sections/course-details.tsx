import React from 'react';

const CourseDetails = () => {
  return (
    <section className="course-details-section py-12 md:py-20 font-sans">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-[32px] font-bold text-[#0B414C] mb-8 leading-tight">
            <strong>Cursus Talqeen Coran (Mémorisation)</strong>
          </h2>
          
          {/* Subheading/Tagline */}
          <h4 className="text-[20px] font-semibold text-[#0B414C] mb-10">
            On gère la mémorisation, vous retrouvez la sérénité !
          </h4>

          {/* Ambition Section */}
          <div className="mb-10">
            <h3 className="text-[24px] font-bold text-[#0B414C] mb-4">
              <strong>Ambition</strong>
            </h3>
            <p className="text-[16px] text-[#6C757D] leading-[1.6]">
              Mémoriser durablement avec une charge parentale minimale. Nous plaçons la mémorisation et sa consolidation au cœur de la séance live, puis nous prolongeons par des rituels simples à la maison.
            </p>
          </div>

          {/* Differentiation Section */}
          <div className="mb-10">
            <h3 className="text-[24px] font-bold text-[#0B414C] mb-4">
              <strong>Différenciation</strong>
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-[16px] text-[#6C757D]">
              <li>
                L’essentiel se fait en classe : l’enfant apprend et mémorise en séance.
              </li>
              <li>
                Répétitions guidées par le professeur, posture positive et motivante.
              </li>
              <li>
                Ancrage par petites écritures/visualisations selon l’âge (sans devoirs lourds).
              </li>
            </ul>
          </div>

          {/* Method Section */}
          <div className="mb-10">
            <h3 className="text-[24px] font-bold text-[#0B414C] mb-4">
              <strong>Notre méthode</strong>
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-[16px] text-[#6C757D]">
              <li>
                Révision d’entrée (séance précédente), puis nouvel apprentissage structuré.
              </li>
              <li>
                Répétitions collectives et individuelles sous guidance, preuves de progression.
              </li>
              <li>
                <strong className="text-[#0B414C]">Intégration progressive du tajwid (règle du jour), </strong>
                focus sur 1–2 règles par passage
              </li>
              <li>
                Activités ludiques d’ancrage & d’attachement
              </li>
              <li>
                Audios standardisés remis aux familles, fiche « règle du jour » simplifiée, rituels quotidiens simples (10 répétitions/jour).
              </li>
            </ul>
          </div>

          {/* Progression Type Section */}
          <div className="mb-10">
            <h3 className="text-[24px] font-bold text-[#0B414C] mb-4">
              <strong>Progression type</strong>
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-[16px] text-[#6C757D]">
              <li>
                <strong className="text-[#0B414C]">Niveau 1 :</strong> 10 dernières sourates (Al-Fîl → An-Nâs).
              </li>
              <li>
                <strong className="text-[#0B414C]">Niveau 2 :</strong> Juz ‘Amma complet.
              </li>
              <li>
                <strong className="text-[#0B414C]">Niveau 3 :</strong> élargissement progressif selon profil et assiduité.
              </li>
            </ul>
          </div>

          {/* Formats & Follow-up Section */}
          <div className="mb-12">
            <h3 className="text-[24px] font-bold text-[#0B414C] mb-4">
              <strong>Formats & suivi</strong>
            </h3>
            <div className="pl-5 space-y-6 text-[16px] text-[#6C757D]">
              <div>
                <strong className="text-[#0B414C] block mb-2">Groupes :</strong>
                <p className="mb-2">Groupes de 5 élèves, 90 minutes par séance, deux séances par semaine.</p>
                <p>Cours particuliers 1 élève / 1 Professeur, 60 minutes par séance, deux séances par semaine.</p>
              </div>
              <ul className="list-disc pl-0 space-y-4">
                <li>Rappels parents concis, preuve audio en fin de séance si requis.</li>
                <li>Tableau parent synthétique (régularité, jalons, conseils).</li>
              </ul>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-20">
            {/* Abu Bakr Card */}
            <PricingCard 
              name="Abou Bakr Assidiq"
              monthlyPrice="41 €"
              equivalentPrice="489 € / an"
              type="Groupe"
              frequency="2 Séances par semaine"
              schedules={[
                { day: 'Mercredi', time: '07/01/2026 15:00 (UTC+1)' },
                { day: 'Samedi', time: '10/01/2026 09:00 (UTC+1)' }
              ]}
            />

            {/* Omar Card */}
            <PricingCard 
              name="Omar Al Farouq"
              monthlyPrice="26 €"
              equivalentPrice="309 € / an"
              type="Groupe"
              frequency="1 Séance par semaine"
              schedules={[
                { day: 'Vendredi', time: '09/01/2026 18:00 (UTC+1)' }
              ]}
            />

            {/* Othmane Card */}
            <PricingCard 
              name="Othmane Ibn Affane"
              monthlyPrice="59 €"
              equivalentPrice="355 € / 6 mois"
              type="Individuel"
              frequency="1 Séance par semaine"
              schedules={[
                { day: 'Dimanche', time: '11/01/2026 18:30 (UTC+1)' }
              ]}
            />

            {/* Imame Nafii Card */}
            <PricingCard 
              name="Imame Nafii"
              monthlyPrice="59 €"
              equivalentPrice="355 € / 6 mois"
              type="Individuel"
              frequency="1 Séance par semaine"
              schedules={[
                { day: 'Mercredi', time: '07/01/2026 10:00 (UTC+1)' }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ name, monthlyPrice, equivalentPrice, type, frequency, schedules }: any) => {
  return (
    <div className="pricing-card bg-[#E6F7F5] rounded-[20px] p-[30px] flex flex-col h-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="pricing-card-header mb-auto">
        <h6 className="text-[20px] font-bold text-[#0B414C] mb-6">{name}</h6>
        <div className="price-wrapper mb-6">
          <span className="price text-[32px] font-bold text-[#0B414C] block mb-2">
            {monthlyPrice} / mois
          </span>
          <small className="block text-[#6C757D] text-[14px]">
            Soit l’équivalent de {equivalentPrice}
          </small>
          <div className="mt-4 text-[15px] text-[#0B414C] leading-normal">
            Apprentissage en <strong>{type}</strong><br />
            {frequency}
          </div>
          <div className="mt-4">
            <span className="inline-block bg-[#17A2B8] text-white text-[12px] px-3 py-1.5 rounded-full font-medium">
              Paiement en 2 fois Disponible
            </span>
          </div>
        </div>
        <hr className="border-[#DEE2E6] my-6" />
        <h6 className="text-[#6C757D] text-[14px] font-medium mb-4">
          Séances de la Classe
        </h6>
        <ul className="space-y-3 mb-8">
          {schedules.map((item: any, idx: number) => (
            <li key={idx} className="flex items-start text-[14px] text-[#6C757D]">
              <span className="w-2 h-2 rounded-full bg-[#29BDAD] mt-1.5 mr-3 shrink-0"></span>
              <span>
                <strong>{item.day}</strong> | {item.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a 
        href="https://www.talqeeny.com/login" 
        className="w-full bg-[#29BDAD] hover:bg-[#23a294] text-white font-semibold py-3.5 rounded-[20px] text-center transition-colors duration-300"
      >
        Choisir ce plan
      </a>
    </div>
  );
};

export default CourseDetails;