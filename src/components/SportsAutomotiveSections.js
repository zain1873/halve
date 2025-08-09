import React from 'react';

const SportsAutomotiveSections = () => {
  const sportsOutdoorCategories = [
    {
      name: "Fitness & training",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Sports nutrition",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Yoga essentials",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Combat sports",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Water sports",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Scooters",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Cycling essentials",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const automotiveCategories = [
    {
      name: "Interior Accessories",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Replacement parts",
      image: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Car care",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Car electronics",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Tools & equipment",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Oils & Fluids",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Protective gear",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
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
      {/* Sports & Outdoor Essentials Section */}
      <section className="mb-16 md:mb-20">
        <SectionHeader 
          title="Sports & outdoor essentials" 
          onViewAll={() => console.log('View all sports & outdoor essentials')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {sportsOutdoorCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Automotive Section */}
      <section>
        <SectionHeader 
          title="Automotive" 
          onViewAll={() => console.log('View all automotive products')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {automotiveCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SportsAutomotiveSections;