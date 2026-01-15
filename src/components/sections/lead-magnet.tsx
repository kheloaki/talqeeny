"use client";

import React from 'react';
import { Download, Send, Play } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-[1240px] space-y-12">
        
        {/* Video Banner - Surat Al-Fatiha */}
        <div className="bg-[#29ABE2] rounded-[40px] md:rounded-[60px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 blur-3xl -ml-16 -mt-16 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 blur-3xl -mr-20 -mb-20 rounded-full"></div>
          
          <div className="lg:max-w-[500px] relative z-10">
            <div className="bg-white text-[#29ABE2] px-4 py-1 rounded-full text-[14px] font-bold inline-block mb-6 uppercase tracking-wider font-inter">
              Vidéo Gratuite
            </div>
            <h2 className="text-white text-[32px] md:text-[42px] font-bold mb-6 leading-[1.2] font-poppins">
              Apprenez Sourate Al-Fatiha
            </h2>
            <p className="text-white/90 text-[18px] mb-8 leading-[1.6] font-inter">
              Recevez gratuitement notre vidéo complète pour apprendre à réciter Sourate Al-Fatiha avec le Tajwid correct. Un premier pas vers la mémorisation du Coran.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <p className="font-bold font-inter">Vidéo HD complète</p>
                <p className="text-white/80 text-sm font-inter">Avec explication du Tajwid</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-[450px] bg-white p-8 md:p-10 rounded-[40px] shadow-xl relative z-10">
            <h3 className="text-[#003049] text-[22px] font-bold mb-6 font-poppins">Recevoir la vidéo par email</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-6 py-4 rounded-full bg-[#f8f9fa] border border-transparent focus:border-[#29ABE2] focus:bg-white outline-none transition-all text-[#003049] font-medium font-inter"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#29ABE2] hover:bg-[#2399cc] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105 font-inter"
              >
                Recevoir la vidéo <Send className="w-5 h-5" />
              </button>
              <p className="text-[12px] text-[#5E6266] text-center mt-4 font-inter">
                Nous respectons votre vie privée. Pas de spam.
              </p>
            </form>
          </div>
        </div>

        {/* PDF Planner Banner */}
        <div className="bg-[#F0FAFB] rounded-[40px] md:rounded-[60px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border-2 border-dashed border-[#29ABE2]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#29ABE2]/5 blur-3xl -ml-16 -mt-16 rounded-full"></div>
          
            <div className="lg:max-w-[500px] relative z-10">
              <div className="bg-[#29ABE2] text-white px-4 py-1 rounded-full text-[14px] font-bold inline-block mb-6 uppercase tracking-wider font-inter">
                Gratuit
              </div>
              <h2 className="text-[#003049] text-[32px] md:text-[42px] font-bold mb-6 leading-[1.2] font-poppins">
                Planner de mémorisation PDF
              </h2>
              <p className="text-[#5E6266] text-[18px] mb-8 leading-[1.6] font-inter">
                Téléchargez votre guide offert pour organiser vos révisions et ne plus oublier ce que vous avez appris. Une méthode simple pour mémoriser le Coran sereinement.
              </p>
                <ul className="space-y-3 mb-8">
                  {["Exemple de planning", "Astuces de concentration", "Tableau de suivi Hifz"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#003049] font-bold font-inter">
                      <Download className="w-5 h-5 text-[#29ABE2]" />
                      {item}
                    </li>
                  ))}
                </ul>
            </div>

          <div className="w-full lg:max-w-[450px] bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-[#29ABE2]/10 relative z-10">
            <h3 className="text-[#003049] text-[22px] font-bold mb-6 font-poppins">Recevoir le PDF par email</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-6 py-4 rounded-full bg-[#f8f9fa] border border-transparent focus:border-[#29ABE2] focus:bg-white outline-none transition-all text-[#003049] font-medium font-inter"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#29ABE2] hover:bg-[#2399cc] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105 font-inter"
              >
                Recevoir le PDF <Send className="w-5 h-5" />
              </button>
              <p className="text-[12px] text-[#5E6266] text-center mt-4 font-inter">
                Nous respectons votre vie privée. Pas de spam.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
