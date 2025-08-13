import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="bg-black text-white flex items-center p-4 md:p-8 overflow-hidden relative">
      <div className="overflow-hidden w-full relative min-h-32">
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .scrolling-text {
              animation: scroll 20s linear infinite;
            }
          `}
        </style>
        <h2 className="font-sans font-black uppercase m-0 p-0 leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap scrolling-text absolute top-0 left-0">
          PROJECTS #PROJECTS #PROJECTS #PROJECTS #PROJECTS #PROJECTS #PROJECTS #PROJECTS #PROJECTS
        </h2>
      </div>
    </div>
  );
};

export default Projects;