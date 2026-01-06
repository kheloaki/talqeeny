import React from 'react';
import Image from 'next/image';

const Breadcrumb = () => {
  return (
    <section className="relative overflow-hidden pt-[115px] pb-[75px] md:pt-[140px] md:pb-[100px] bg-[#f0fafb]">
      {/* Background shapes */}
      <div className="absolute left-0 top-0 pointer-events-none select-none z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_1-3.png"
          alt="shape"
          width={300}
          height={300}
          className="w-[200px] md:w-auto"
        />
      </div>
      <div className="absolute right-0 top-0 pointer-events-none select-none z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_2-4.png"
          alt="shape"
          width={350}
          height={350}
          className="w-[200px] md:w-auto"
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <h1 
              className="text-[#0B414C] text-[36px] md:text-[48px] font-extrabold leading-[1.2] tracking-[-0.02em] font-inter mb-4"
            >
              Cursus coran
            </h1>
          </div>
          
          <nav className="flex items-center justify-center space-x-2 text-[16px] font-medium text-[#0B414C]">
            <a 
              href="https://www.talqeeny.com" 
              className="hover:text-[#29bdad] transition-colors duration-300 flex items-center"
            >
              Accueil
              <span className="mx-2 text-[#6c757d] font-normal">/</span>
            </a>
            <span className="text-[#29bdad]">Cursus coran</span>
          </nav>
        </div>
      </div>

      </section>
    );
  };
  
  export default Breadcrumb;