import React from 'react';
import Image from 'next/image';

const teachers = [
  {
    name: "Pr. Ahmed",
    expertise: "Spécialiste du Tajwîd",
    description: "Expert en makhârij et en correction de la lecture pour les francophones."
  },
  {
    name: "Pr. Maryam",
    expertise: "Accompagnement Mémorisation",
    description: "Spécialisée dans les méthodes de mémorisation durable et efficace."
  },
  {
    name: "Pr. Youssef",
    expertise: "Pédagogie Francophone",
    description: "Expert en transmission des bases de la lecture avec une approche simplifiée."
  }
];

export default function Teachers() {
  return (
    <section id="professeurs" className="py-20 bg-[#f0fafb]">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-4">
            Vos Professeurs
          </h2>
          <p className="text-[#6C757D] text-[18px] max-w-[700px] mx-auto">
            Une équipe passionnée et qualifiée pour vous guider vers vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[30px] shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="w-[120px] h-[120px] rounded-full bg-[#29BDAD]/10 mx-auto mb-6 overflow-hidden border-4 border-white shadow-sm group-hover:border-[#29BDAD] transition-colors">
                <div className="w-full h-full flex items-center justify-center text-[#29BDAD] text-[40px] font-bold">
                  {teacher.name.charAt(4)}
                </div>
              </div>
              <h3 className="text-[#0B414C] text-[22px] font-bold mb-2">{teacher.name}</h3>
              <p className="text-[#29BDAD] font-bold text-[14px] uppercase tracking-wider mb-4">{teacher.expertise}</p>
              <p className="text-[#6C757D] text-[16px] leading-[1.6]">
                {teacher.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
