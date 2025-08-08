import React, { useState, useEffect } from 'react';
import slider4 from '../assets/images/banner-slider-1.avif';
import slider2 from '../assets/images/banner-slider-2.avif';
import slider3 from '../assets/images/banner-slider-3.avif';
import slider1 from '../assets/images/banner-slider-4.gif';
// Add your right side banner image import
import rightBanner from '../assets/images/banner-slider-2.avif'; 
import Catrgories from '../components/CategorySlider';
import CategorySlider from '../components/CategorySlider';
// import EcommerceLayout from '../components/EcommerceLayout';
import TodaysDeals from '../components/TodayDeals';
import RecommendedProducts from '../components/RecommendedProducts';
import Footer from '../components/Footer';
import LatestNews from '../components/LatestNews';


const CarouselSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fixed: Remove curly braces around imported image variables
  const slides = [
    {
      id: 1,
      image: slider1, // ✅ Correct - use the imported variable directly
      alt: 'Dubai Sellers Promotion'
    },
    {
      id: 2,
      image: slider2, // ✅ Correct
      alt: 'Backpack Store Fashion'
    },
    {
      id: 3,
      image: slider3, // ✅ Correct
      alt: 'Electronics Sale'
    },
    {
      id: 4,
      image: slider4, // ✅ Correct
      alt: 'Summer Collection'
    }
  ];

  // Auto-moving slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
    <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 banner-slider">
      {/* Main Carousel */}
      <div className="relative w-full rounded-lg overflow-hidden  flex-1">
        {/* Main slider container */}
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 relative banner-img">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Banner */}
      <div className="w-full lg:w-80 xl:w-96 mt-2 lg:mt-0">
        <div className="relative rounded-lg overflow-hidden banner-img">
          <img
            src={rightBanner || "/placeholder.svg"}
            alt="Side Banner Advertisement"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Optional overlay content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        

      </div>
    </div>

    {/* category slider */}

    {/* <CategorySlider/> */}

    {/* ecommerce layout */}

    {/* <EcommerceLayout/> */}

{/* products recommend */}
    {/* <RecommendedProducts/> */}

    {/* today deals */}
    
    <TodaysDeals/>
    {/* <RecommendedProducts/> */}

    {/* <LatestNews/> */}

    {/* <Footer/> */}

    </div>

  );
};

export default CarouselSlider;