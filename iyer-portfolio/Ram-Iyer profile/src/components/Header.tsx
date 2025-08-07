import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-black text-white">
      <div className="text-lg md:text-xl font-bold">
        {/* Ram-<br />Iyer */}
      </div>
      <button className="text-base md:text-lg px-4 py-2">
        ☰ Menu
      </button>
    </header>
  );
};

export default Header;
