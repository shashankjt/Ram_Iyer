import React from 'react';
import Frame1 from '../assets/Frame 1.png';
import Frame2 from '../assets/Frame 2.png';
import Frame3 from '../assets/Frame 3.png';
import Frame4 from '../assets/Frame 4.png';
import Frame5 from '../assets/Frame 5.png';
import Frame6 from '../assets/Frame 6.png';

interface PortfolioItem {
  title: string;
  year: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'RAM IYER PHOTOGRAPHY',
    year: '2025',
    image: Frame1,
  },
  {
    title: 'BEAUTY & FASHION RETOUCH',
    year: '2025',
    image: Frame2,
  },
  {
    title: 'WILDLIFE | NATURE | MACRO',
    year: '2025',
    image: Frame3,
  },
  {
    title: 'MONOCHROME STORIES',
    year: '2025',
    image: Frame4,
  },
  {
    title: 'SHARP & DEFINED',
    year: '2025',
    image: Frame5,
  },
  {
    title: 'AQUATIC REALMS',
    year: '2025',
    image: Frame6,
  },
];

export default function Portfolio() {
  return (
    <section className="w-full bg-black text-white px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className={`bg-black border border-neutral-800 p-3 ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full mb-4"
            />
            <div className="text-sm text-gray-400">{item.year} ↗</div>
            <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
