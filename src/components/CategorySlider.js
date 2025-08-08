import React, { useState, useEffect } from 'react';

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Categories matching the image you shared
  const categories = [
    {
      id: 1,
      name: 'Tools & Home Improvement',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 2,
      name: 'Wearables',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 3,
      name: "Men's Care",
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 4,
      name: 'Mobile Accessories',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 5,
      name: 'Computer Accessories',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 6,
      name: 'Cameras',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 7,
      name: 'Haircare',
      image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 8,
      name: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {

    id: 9,
    name: "Kids' Fashion",
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=150&h=150&fit=crop&crop=center',
    hasSale: true
  },

    {
      id: 10,
      name: 'Pet Store',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 11,
      name: 'Books',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 12,
      name: 'Music & Media',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 13,
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 14,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=150&h=150&fit=crop&crop=center',
      hasSale: true
    },
    {
      id: 15,
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=center',
      hasSale: false
    },
    {
      id: 16,
      name: 'Health',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=center',
      hasSale: true
    }
  ];

  // Responsive items per view
  const getItemsPerView = () => {
    if (window.innerWidth >= 1536) return 10; // 2xl
    if (window.innerWidth >= 1280) return 8;  // xl
    if (window.innerWidth >= 1024) return 6;  // lg
    if (window.innerWidth >= 768) return 4;   // md
    if (window.innerWidth >= 640) return 3;   // sm
    return 2; // mobile
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-move continuously one by one like Owl Carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = categories.length - itemsPerView;
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, 2000); // Continuous movement every 2 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, categories.length, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = categories.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = categories.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Calculate visible items and scroll position - no extra space
  const itemWidth = 100 / itemsPerView;
  const translateX = -(currentIndex * itemWidth);

  return (
    <div className="w-full bg-gray-50 py-4 category-slider">
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border"
          aria-label="Previous"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border"
          aria-label="Next"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Categories Container */}
        <div 
          className="overflow-hidden mx-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(${translateX}%)`,
              width: `${categories.length * itemWidth}%`
            }}
          >
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className="flex-shrink-0 px-1 sm:px-2"
                style={{ width: `${itemWidth}%` }}
              >
                <div className="flex flex-col items-center cursor-pointer group">
                  {/* Category Image Circle with Sale Badge */}
                  <div className="relative mb-2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow border border-gray-100">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    {/* Sale Badge */}
                    {category.hasSale && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                        SALE
                      </div>
                    )}
                  </div>
                  
                  {/* Category Name */}
                  <span className="text-xs sm:text-sm text-center text-gray-700 font-medium leading-tight max-w-full">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Bar Indicator */}
        <div className="flex justify-center mt-4 px-8">
          <div className="w-full max-w-xs bg-gray-200 rounded-full h-1 relative">
            <div 
              className="bg-black h-1 rounded-full transition-all duration-500 ease-in-out"
              style={{ 
                width: `${(itemsPerView / categories.length) * 100}%`,
                transform: `translateX(${(currentIndex / (categories.length - itemsPerView)) * 100}%)`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;