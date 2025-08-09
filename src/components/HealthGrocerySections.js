import React from 'react';

const HealthGrocerySections = () => {
  const healthNutritionCategories = [
    {
      name: "Weighing scales",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Massage & relaxation",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Family planning",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Vitamins & nutrition",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Health monitors",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Mobility aids",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Braces & splints",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const groceryCategories = [
    {
      name: "Rice, pasta & canned food",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Cooking oils, ghees & vinegars",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Laundry & dishwashing",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Beverages",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Snack & sweets",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Breakfast & cereal",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Personal care",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center"
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
      {/* Health & Nutrition Section */}
      <section className="mb-16 md:mb-20">
        <SectionHeader 
          title="Health & nutrition" 
          onViewAll={() => console.log('View all health & nutrition')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {healthNutritionCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Grocery Section */}
      <section>
        <SectionHeader 
          title="Grocery" 
          onViewAll={() => console.log('View all grocery items')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {groceryCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HealthGrocerySections;