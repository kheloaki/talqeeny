"use client";

import React from 'react';
import { Download, Send } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px]">
        <div className="bg-[#f0fafb] rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border-2 border-dashed border-[#29BDAD]/20">
          <div className="lg:max-w-[500px]">
            <div className="bg-[#29BDAD] text-white px-4 py-1 rounded-full text-[14px] font-bold inline-block mb-6 uppercase tracking-wider">
              Gratuit
            </div>
            <h2 className="text-[#0B414C] text-[32px] md:text-[42px] font-extrabold mb-6 leading-[1.2]">
              Planner de mémorisation (PDF)
            </h2>
            <p className="text-[#6C757D] text-[18px] mb-8 leading-[1.6]">
              Téléchargez notre guide exclusif : une méthode simple et efficace pour mémoriser et réviser vos sourates sans oublier.
            </p>
            <ul className="space-y-3 mb-8">
              {["Planning type", "Astuces de concentration", "Tableau de suivi"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0B414C] font-semibold">
                  <Download className="w-5 h-5 text-[#29BDAD]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:max-w-[450px] bg-white p-8 md:p-10 rounded-[30px] shadow-xl border border-[#29BDAD]/10">
            <h3 className="text-[#0B414C] text-[22px] font-bold mb-6">Recevoir le PDF par email</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-6 py-4 rounded-[20px] bg-[#f8f9fa] border border-transparent focus:border-[#29BDAD] focus:bg-white outline-none transition-all text-[#0B414C] font-medium"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#29BDAD] hover:bg-[#23a294] text-white px-8 py-4 rounded-[20px] font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Recevoir le PDF <Send className="w-5 h-5" />
              </button>
              <p className="text-[12px] text-[#6C757D] text-center mt-4">
                Nous respectons votre vie privée. Pas de spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
