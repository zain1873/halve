import React from 'react';

const BeautyHomeSections = () => {
  const beautyCategories = [
    {
      name: "Makeup",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Skincare",
      image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Electronic beauty tools",
      image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Hair care",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Hairstyling tools",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Men's care",
      image: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Bath & body essentials",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center"
    }
  ];

  const homeKitchenCategories = [
    {
      name: "Cookware",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "organisation",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Dinnerware & serveware",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Bedding essentials",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Lighting",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Power & hand tools",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center"
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
      {/* Beauty Section */}
      <section className="mb-16 md:mb-20">
        <SectionHeader 
          title="Beauty" 
          onViewAll={() => console.log('View all beauty products')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {beautyCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Home & Kitchen Section */}
      <section>
        <SectionHeader 
          title="Home & kitchen favourites" 
          onViewAll={() => console.log('View all home & kitchen products')}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {homeKitchenCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BeautyHomeSections;