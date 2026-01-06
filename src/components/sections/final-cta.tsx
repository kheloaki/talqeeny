import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#29BDAD]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-6 mx-auto max-w-[1000px]">
        <div className="bg-[#0B414C] rounded-[50px] p-10 md:p-20 text-center relative shadow-2xl overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-white text-[32px] md:text-[48px] font-extrabold mb-6 leading-[1.1]">
              Commencez sereinement votre progression
            </h2>
            <p className="text-white/80 text-[18px] md:text-[20px] mb-12 max-w-[700px] mx-auto leading-[1.6]">
              Test de niveau + placement dans le bon groupe, en direct avec un professeur. Rejoignez notre communauté dès aujourd'hui.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#pricing"
                className="bg-[#29BDAD] hover:bg-[#23a294] text-white px-10 py-5 rounded-[25px] text-[18px] font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Réserver une séance gratuite <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#test"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 px-10 py-5 rounded-[25px] text-[18px] font-bold transition-all duration-300 w-full sm:w-auto text-center"
              >
                Faire le test de niveau
              </a>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-white/60 text-[15px]">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#29BDAD]" />
                <span>Besoin d'aide ?</span>
              </div>
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white font-bold hover:text-[#29BDAD] transition-colors underline underline-offset-4"
              >
                Contactez-nous sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
