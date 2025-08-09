import React from 'react';

const FurnitureFragrancesSections = () => {
  const furnitureCategories = [
    {
      name: "Desks & chairs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Sofas & couches",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Bed frames",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Bean bags",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Tables & chairs",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "TV & media furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Outdoor furniture",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const fragrancesCategories = [
    {
      name: "Men's fragrances",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Women's fragrances",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Premium fragrances",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Bestsellers",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Ouds & Arabian fragrances",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Gift sets",
      image: "https://images.unsplash.com/photo-1549049950-48d5887197a0?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "New arrivals",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop&crop=center"
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
      {/* Furniture Section */}
      <section className="mb-16 md:mb-20">
        <SectionHeader 
          title="Furniture" 
          onViewAll={() => console.log('View all furniture')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {furnitureCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Fragrances Section */}
      <section>
        <SectionHeader 
          title="Fragrances" 
          onViewAll={() => console.log('View all fragrances')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {fragrancesCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FurnitureFragrancesSections;