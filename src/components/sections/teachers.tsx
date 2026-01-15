import React from 'react';
import Image from 'next/image';

const teachers = [
  {
    name: "Pr. Abdellah",
    expertise: "CORAN & ÉDUCATION ISLAMIQUE",
    description: "Certifié dans la narration de Hafs, il accompagne ses élèves francophones avec rigueur et bienveillance pour passer de l'initiation à une lecture fluide et correcte du Coran."
  },
  {
    name: "Pr. Ihsane",
    expertise: "SCIENCES ISLAMIQUES & ARABE",
    description: "Diplômée d'un Master en Études Islamiques et certifiée en Qaïda Nourania, elle enseigne l'arabe et le Coran avec une pédagogie adaptée aux enfants et aux adultes."
  },
  {
    name: "Pr. Doae",
    expertise: "LECTURES & VARIANTES (QIRA'AT)",
    description: "Experte certifiée dans les lectures de référence (Ash-Shatibiyyah) et la narration de Abi Amr Al-Basri, elle accompagne les élèves vers une maîtrise avancée du Tajwid et de la mémorisation durable avec une approche simplifiée."
  }
];

export default function Teachers() {
  return (
    <section id="professeurs" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="bg-[#F0FAFB] rounded-[40px] md:rounded-[60px] p-8 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-4 font-poppins">
                Vos Professeurs
              </h2>
              <p className="text-[#5E6266] text-[18px] max-w-[700px] mx-auto font-inter">
                Nos enseignants sont sélectionnés pour leur pédagogie, leur maîtrise du tajwid et leur expérience dans l'enseignement aux francophones.
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[30px] shadow-sm hover:shadow-lg transition-all text-center group border border-transparent hover:border-[#29ABE2]/30">
                <div className="w-[120px] h-[120px] rounded-full bg-[#29ABE2]/10 mx-auto mb-6 overflow-hidden border-4 border-white shadow-sm group-hover:scale-110 transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center text-[#29ABE2] text-[40px] font-bold font-poppins">
                    {teacher.name.split(' ').pop()?.[0]}
                  </div>
                </div>
                <h3 className="text-[#003049] text-[22px] font-bold mb-2 font-poppins">{teacher.name}</h3>
                <p className="text-[#29ABE2] font-bold text-[14px] uppercase tracking-wider mb-4 font-inter">{teacher.expertise}</p>
                <p className="text-[#5E6266] text-[16px] leading-[1.6] font-inter">
                  {teacher.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
