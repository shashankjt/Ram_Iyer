import React from 'react';
import BirdImage from '../assets/Bird.png'; // Import the image
import Logo from '../assets/Logo.png'; // Import the logo

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col bg-black text-white min-h-screen w-full p-4 md:p-8 overflow-x-hidden">
      {/* Logo in the top-left corner */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <img src={Logo} alt="Logo" className="w-16 md:w-24 h-auto" />
      </div>

      {/* PHOTOGRAPHER text - elongated */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-4">
        PHOTOGRAPHER
      </h1>

      {/* Container for RAM IYER and Image (aligned horizontally) */}
      <div className="flex flex-col md:flex-row items-start mb-8 w-full"> {/* mb-8 for spacing before description */}
        <div className="flex flex-col w-full md:w-auto md:mr-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
            RAM IYER
          </h1>
          {/* Descriptive text and lines */}
          <div className="relative mt-8 md:mt-48 pl-8">
            {/* Line connecting the squares */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-white transform -translate-x-1/2"></div>
            {/* Small square element */}
            <div className="absolute left-0 top-0 w-3 h-3 md:w-4 md:h-4 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md">
              My journey began with a simple passion, capturing moments of family and friends. However, a transformative
              trip to Africa ignited a profound change within me, one that words alone cannot fully express. The desire to convey
              the spirit and essence of my vision became overwhelming, driving me to immerse myself in the art of creation.
            </p>
            {/* The three lines/bars */}
            <div className="space-y-2 mb-8">
              <div className="w-[100px] md:w-[131px] h-[15px] md:h-[21px] bg-white transition-all duration-500 ease-out"></div>
              <div className="w-[130px] md:w-[168px] h-[15px] md:h-[21px] bg-white transition-all duration-500 ease-out"></div>
              <div className="w-[130px] md:w-[168px] h-[15px] md:h-[21px] bg-white transition-all duration-500 ease-out"></div>
            </div>
            {/* Second small square element */}
            <div className="absolute left-0 bottom-0 w-3 h-3 md:w-4 md:h-4 bg-white transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
        {/* Image with specified dimensions and hover effect */}
        <div className="w-full md:flex-1 mt-8 md:mt-0 md:ml-12 lg:ml-24 overflow-hidden">
          <img
            src={BirdImage}
            alt="Bird Image"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <footer className="p-4 md:p-8 bg-black text-white text-xs sm:text-sm">
        RAM IYER/<br />PHOTOGRAPHER
      </footer>
    </section>
  );
};

export default HeroSection;