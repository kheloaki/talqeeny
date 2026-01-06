import React from 'react';
import Image from 'next/image';

const ProblemStatement = () => {
  return (
    <section className="about-section fix relative pt-[100px] pb-[100px] bg-white overflow-hidden">
      <div className="container px-[1.5rem] mx-auto max-w-[1320px]">
        <div className="about-wrapper style1">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-[60px]">
            {/* Image / Thumbs Left */}
            <div className="w-full lg:w-1/2 wow fadeInUp" data-wow-delay=".2s">
              <div className="about-thumb relative">
                <div className="main-thumb overflow-hidden rounded-[40px]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/aboutThumb1_1-6.png"
                    alt="Père et fils frustrés"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="w-full lg:w-1/2">
              <div className="about-content">
                <div className="section-title mb-[30px]">
                  <h2 className="text-[#003049] font-display text-[32px] md:text-[40px] font-bold leading-[1.3] mb-6 wow fadeInUp" data-wow-delay=".4s">
                    Le vrai problème des parents
                  </h2>

                  <p className="text-[#5E6266] font-sans text-[16px] md:text-[18px] leading-[1.6] mb-8 wow fadeInUp" data-wow-delay=".6s">
                    Talqeeny déplace l’effort au cœur de la séance : l’enfant apprend et mémorise en direct, sous la guidance du professeur.
                  </p>
                </div>

                {/* Checklist */}
                <ul className="checklist space-y-5 mb-10 wow fadeInUp" data-wow-delay=".2s">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/svgs/checkmarkIcon2-1.svg" 
                        alt="check blue" 
                        width={24} 
                        height={24} 
                      />
                    </div>
                    <span className="text-[#003049] font-inter font-medium text-[16px]">Manque de temps et d’outils pour accompagner chaque jour.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/svgs/checkmarkIcon1-2.svg" 
                        alt="check yellow" 
                        width={24} 
                        height={24} 
                      />
                    </div>
                    <span className="text-[#003049] font-inter font-medium text-[16px]">Enfants distraits, motivation qui chute rapidement.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/svgs/checkmarkIcon3-3.svg" 
                        alt="check orange" 
                        width={24} 
                        height={24} 
                      />
                    </div>
                    <span className="text-[#003049] font-inter font-medium text-[16px]">Progression lente malgré de gros efforts à la maison.</span>
                  </li>
                </ul>

                {/* Button */}
                <div className="about_more_info">
                  <a 
                    className="inline-flex items-center justify-center bg-[#29ABE2] hover:bg-[#2599cb] text-white font-inter font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 wow fadeInUp" 
                    data-wow-delay=".2s" 
                    href="https://www.talqeeny.com/about-us"
                  >
                    Lire plus
                    <svg className="ml-3 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Curves */}
      <div className="absolute top-[15%] left-[5%] pointer-events-none animate-bounce duration-[3000ms] ease-in-out infinite hidden lg:block">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/curve-1-7.png" 
          alt="curve decoration" 
          width={60} 
          height={60} 
          className="opacity-60"
        />
      </div>
      <div className="absolute bottom-[20%] right-[10%] pointer-events-none animate-pulse hidden lg:block">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/curve-5-8.png" 
          alt="curve decoration" 
          width={180} 
          height={60} 
          className="opacity-70"
        />
      </div>
      <div className="absolute top-[10%] right-[5%] pointer-events-none hidden lg:block">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/curve-4-9.png" 
          alt="curve decoration" 
          width={150} 
          height={80} 
          className="opacity-50"
        />
      </div>
      <div className="absolute bottom-[10%] left-[8%] pointer-events-none hidden lg:block">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/curve-2-10.png" 
          alt="curve decoration" 
          width={100} 
          height={50} 
          className="opacity-60"
        />
      </div>
    </section>
  );
};

export default ProblemStatement;