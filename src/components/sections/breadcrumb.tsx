import React from 'react';
import Image from 'next/image';

const Breadcrumb = () => {
  return (
    <div className="breadcumb-section fix overflow-hidden relative">
      <div 
        className="breadcumb-container-wrapper" 
        style={{ 
          background: 'linear-gradient(135deg, #e0f5f4 0%, #ffffff 100%)',
          padding: '80px 0',
          position: 'relative'
        }}
      >
        <div className="container mx-auto max-w-[1200px] px-6 relative">
          {/* Decorative Shape 1 - Left */}
          <div className="shape1 absolute left-[-5%] top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_1-3.png" 
              alt="shape" 
              width={150} 
              height={150}
              className="animate-pulse"
            />
          </div>

          {/* Decorative Shape 2 - Right */}
          <div className="shape2 absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/introShape1_2-4.png" 
              alt="shape" 
              width={180} 
              height={180}
              className="animate-pulse"
            />
          </div>

          <div className="breadcumb-wrapper relative z-10 text-center">
            <div className="page-heading">
              <h1 
                className="text-[#0b485b] font-bold mb-4"
                style={{ 
                  fontSize: '48px', 
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Cursus coran
              </h1>
              <div 
                className="links flex justify-center items-center gap-2 text-[#6b7280]"
                style={{ 
                  fontSize: '15px', 
                  fontWeight: '500' 
                }}
              >
                <a 
                  href="https://www.talqeeny.com" 
                  className="hover:text-[#2db9b0] transition-colors flex items-center"
                >
                  Accueil
                  <span className="slash mx-2 text-[#dee2e6]">/</span>
                </a> 
                <span className="text-[#2db9b0]">Cursus coran</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;