import React, { useState, useEffect, useRef } from 'react';

const CategorySlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Categories matching the image you shared
  const categories = [
    {
      id: 1,
      name: 'Tools & Home',
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

  // Auto-scroll functionality - same as RecommendedProducts
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        scroll('right');
      }, 2500); // Auto-scroll every 2.5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 150; // Scroll amount for categories
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (direction === 'left') {
        if (container.scrollLeft <= 0) {
          // If at start, go to end
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft >= maxScroll - 10) {
          // If at end, go to start
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="w-full bg-gray-50 py-4 category-slider">
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border"
          style={{ marginLeft: '-20px' }}
          aria-label="Previous"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border"
          style={{ marginRight: '-20px' }}
          aria-label="Next"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Categories Container - Now using scroll like RecommendedProducts */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth mx-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex-shrink-0"
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

        {/* CSS to hide scrollbar */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CategorySlider;