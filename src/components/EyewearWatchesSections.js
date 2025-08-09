import React from 'react';

const EyewearWatchesSections = () => {
  const eyewearCategories = [
    {
      name: "Ray-Ban",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Lacoste",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Carrera",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Guess",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Calvin Klein",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Contact lenses",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Frames",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const watchesCategories = [
    {
      name: "Casio",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Tommy Hilfiger",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Fossil",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Hugo Boss",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Guess",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Police",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Lacoste",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const CategoryCard = ({ category, index }) => (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4 transition-transform duration-300 group-hover:scale-105">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <h3 className="text-lg font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">
        {category.name}
      </h3>
    </div>
  );

  const SectionHeader = ({ title, onViewAll }) => (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      <button 
        onClick={onViewAll}
        className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-sm md:text-base"
      >
        VIEW ALL
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Eyewear Section */}
      <section className="mb-16 md:mb-20">
        <SectionHeader 
          title="Eyewear" 
          onViewAll={() => console.log('View all eyewear')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {eyewearCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Watches Section */}
      <section>
        <SectionHeader 
          title="Watches" 
          onViewAll={() => console.log('View all watches')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {watchesCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EyewearWatchesSections;