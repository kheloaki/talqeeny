import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#29ABE2]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-6 mx-auto max-w-[1100px]">
        <div className="bg-[#003049] rounded-[40px] md:rounded-[60px] p-10 md:p-20 text-center relative shadow-2xl overflow-hidden border-4 border-white/10">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#29ABE2]/10 blur-[100px] -mr-32 -mt-32 rounded-full"></div>
          
            <div className="relative z-10">
              <h2 className="text-white text-[32px] md:text-[54px] font-bold mb-6 leading-[1.1] font-poppins">
                Prêt à commencer votre apprentissage du Coran ?
              </h2>
              <p className="text-white/80 text-[18px] md:text-[20px] mb-12 max-w-[700px] mx-auto leading-[1.6] font-inter">
                Rejoignez notre plateforme et progressez sereinement avec des professeurs experts en tajwid et mémorisation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#pricing-plans"
                  className="bg-[#29ABE2] hover:bg-[#2399cc] text-white px-10 py-5 rounded-full text-[18px] font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 transform hover:scale-105 font-inter"
                >
                  Réserver une séance gratuite <ArrowRight className="w-5 h-5" />
                </a>

              </div>
              
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-white/60 text-[15px] font-inter">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#29ABE2]" />
                  <span>Une question ?</span>
                </div>
                <a 
                  href="https://wa.me/33612345678" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-bold hover:text-[#29ABE2] transition-colors underline underline-offset-4"
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
