import React, { useRef, useEffect, useState } from 'react';
import RamIyer1 from '../assets/Ram-iyer1.png';
import RamIyer2 from '../assets/ram-iyer2.png';

const Contact: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Contact component mounted'); // Debug log
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection observed:', entry.isIntersecting); // Debug log
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  console.log('Contact component rendering, inView:', inView); // Debug log

  return (
    <section className="w-full h-auto bg-black text-white px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Side */}
        <div ref={ref} className="space-y-8">
          <div className="space-y-2">
            <div className={`h-4 md:h-5 bg-white transition-all duration-500 ease-out ${inView ? 'w-32 md:w-40' : 'w-0'}`}></div>
            <div className={`h-4 md:h-5 bg-white transition-all duration-500 ease-out ${inView ? 'w-24 md:w-32' : 'w-0'}`}></div>
          </div>
          <p className="text-sm leading-relaxed text-white/80 max-w-md">
            This passion led me to embark on a creative expedition as a photographer and retoucher, fueled by endless books and research. Balancing my job with my passion was challenging, yet every moment was filled with joy. Throughout this roller-coaster exploration, one thing remains constant—the road ahead is long, and I am just getting started!
          </p>
          <h2 className="text-3xl font-extrabold uppercase text-white">#Contact Me</h2>
        </div>

        {/* Right Image Side */}
        <div className="relative w-full h-auto md:h-[500px]">
          <img
            src={RamIyer1}
            alt="Main Portrait"
            className="w-full h-full object-cover rounded-md"
            onError={() => console.log('Main image failed to load')} // Debug
            onLoad={() => console.log('Main image loaded successfully')} // Debug
          />
          <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 md:-bottom-12 md:-left-12 w-32 h-40 sm:w-36 sm:h-48 md:w-40 md:h-52 border-2 md:border-4 border-white shadow-xl">
            <img
              src={RamIyer2}
              alt="Overlay Portrait"
              className="w-full h-full object-cover"
              onError={() => console.log('Overlay image failed to load')} // Debug
              onLoad={() => console.log('Overlay image loaded successfully')} // Debug
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;