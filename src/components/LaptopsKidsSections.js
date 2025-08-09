import React from 'react';

const LaptopsKidsSections = () => {
  const laptopsAccessoriesCategories = [
    {
      name: "Laptops",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Monitors",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Printers",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "MacBooks",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Budget laptops",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Storage devices",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Laptop accessories",
      image: "https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const kidsFashionCategories = [
    {
      name: "T-shirts & Polos",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Pants",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Clothing sets",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Sportswear",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Footwear",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Backpacks",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center"
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
      {/* Laptops & Accessories Section */}
      <section className="mb-16 md:mb-20">
        <SectionHeader 
          title="Laptops & accessories" 
          onViewAll={() => console.log('View all laptops & accessories')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {laptopsAccessoriesCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Kids' Fashion Section */}
      <section>
        <SectionHeader 
          title="Kids' fashion" 
          onViewAll={() => console.log('View all kids\' fashion')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {kidsFashionCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LaptopsKidsSections;