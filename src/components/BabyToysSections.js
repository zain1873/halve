import React from 'react';

const BabyToysSections = () => {
  const babyMustHavesCategories = [
    {
      name: "Strollers",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Diapers & wipes",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Feeding essentials",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Nursery",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Car seats",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Bathing & baby care",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Premium store",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const toysCategories = [
    {
      name: "Building toys",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Learning & education",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Arts & crafts",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Kids' scooters",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Baby & toddler toys",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Sports & outdoor play",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Pools & waterplay",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center"
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
      {/* Baby Must-Haves Section */}
      <section className="mb-16 md:mb-20">
        <SectionHeader 
          title="Baby must-haves" 
          onViewAll={() => console.log('View all baby must-haves')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {babyMustHavesCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Toys Section */}
      <section>
        <SectionHeader 
          title="Toys" 
          onViewAll={() => console.log('View all toys')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {toysCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BabyToysSections;