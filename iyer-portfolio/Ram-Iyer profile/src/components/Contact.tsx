import React from 'react';
import RamIyer1 from '../assets/Ram-iyer1.png';
import RamIyer2 from '../assets/ram-iyer2.png';

const Contact: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Side */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="w-[130px] md:w-[168px] h-[15px] md:h-[21px] bg-white transition-all duration-500 ease-out"></div>
            <div className="w-[100px] md:w-[131px] h-[15px] md:h-[21px] bg-white transition-all duration-500 ease-out"></div>
          </div>
          <p className="text-sm leading-relaxed text-white/80 max-w-md">
            This passion led me to embark on a creative expedition as a photographer and retoucher, fueled by endless books and research. Balancing my job with my passion was challenging, yet every moment was filled with joy. Throughout this roller-coaster exploration, one thing remains constant—the road ahead is long, and I am just getting started!
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white">#Contact Me</h2>
        </div>

        {/* Right Image Side */}
        <div className="relative w-full h-[500px]">
          <img
            src={RamIyer1}
            alt="Main Portrait"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute -bottom-16 -left-16 w-40 h-52 border-4 border-white shadow-xl">
            <img
              src={RamIyer2}
              alt="Overlay Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact;
