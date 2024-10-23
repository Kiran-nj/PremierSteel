import React from 'react';

const projects = [
    { title: 'MS Joints',category: 'Energy / Tools', imageSrc: '/src/assets/steelangles.jpg' },
    { title: 'MS Channels',category: 'Energy / Tools', imageSrc: '/src/assets/channel.jpg' },
    { title: 'MS Plates',category: 'Energy / Tools', imageSrc: '/src/assets/sheet.jpg' },
    { title: 'MS Angles',category: 'Energy / Tools', imageSrc: '/src/assets/angles.jpg' },
    { title: 'MS Flats',category: 'Energy / Tools', imageSrc: '/src/assets/steelangles.jpg' },
    { title: 'MS Rounds',category: 'Energy / Tools', imageSrc: '/src/assets/round.jpg' },
    { title: 'MS Squares',category: 'Energy / Tools', imageSrc: '/src/assets/squareandround.jpg' },
    { title: 'MS Chequered Plates',category: 'Energy / Tools', imageSrc: '/src/assets/sheet2.jpg' },
    { title: 'GP/MS Tubes & Pipes',category: 'Energy / Tools', imageSrc: '/src/assets/squareandround.jpg' },
  ];
const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-4 py-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative group h-80 overflow-hidden rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${project.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white text-lg font-semibold leading-tight group-hover:text-xl transition-all duration-500">
              {project.title}
            </h3>
            <p className="text-white text-sm opacity-80 mt-2 group-hover:opacity-100 transition-all duration-500">
              {project.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
