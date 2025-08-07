// app/components/contactme.tsx
import { useState, useEffect } from "react";

const Footer = () => {

  return (
    <section className="bg-black text-white px-6 md:px-16 py-20 relative">
      {/* Top paragraph */}
      <div className="max-w-2xl mb-24">
        <p className="text-base leading-relaxed text-white/80">
          With numerous portfolios and stunning portrait images to my credit, I am now focusing on
          the Fashion & Glamour world. As an avid portrait retoucher, I have collaborated with many
          leading national and international fashion photographers on retouch assignments.
        </p>
      </div>

      {/* Email */}
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
        RAMIYER@RAMIYERPHOTOGRAPHY.COM
      </h2>

      {/* Divider Line */}
      <div className="border-t border-white/20 w-full h-[1px] mb-6"></div>

      {/* Bottom row */}
      <div className="flex justify-between items-end text-sm text-white/70">
        <p>© 2025 All rights reserved</p>

        
      </div>
    </section>
  );
};

export default Footer;
