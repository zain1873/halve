import React, { useState, useRef } from 'react';

const RecommendedProducts = () => {
  const [favorites, setFavorites] = useState(new Set());
  const scrollContainerRef = useRef(null);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 320;
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

  const products = [
    {
      id: 1,
      title: "Apple iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East Version",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: "24.2K",
      price: "4,469",
      originalPrice: "5,099",
      discount: "12%",
      badge: "Best Seller",
      delivery: "Free Delivery",
      express: true,
      ranking: null
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB - Middle East...",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: "22.9K",
      price: "2,749",
      originalPrice: "4,949",
      discount: "44%",
      badge: "Best Seller",
      delivery: null,
      express: true,
      ranking: "#6 in Smartphones"
    },
    {
      id: 3,
      title: "Apple iPhone 15 Pro 256GB Blue Titanium 5G With FaceTime - International Version",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: "24.2K",
      price: "4,549",
      originalPrice: "5,099",
      discount: "10%",
      badge: "Best Seller",
      delivery: "Selling out fast",
      express: false,
      superMall: true
    },
    {
      id: 4,
      title: "Samsung Galaxy S24 Ultra 5G Dual SIM Titanium Black 12GB RAM 256GB - Middle East...",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: "22.9K",
      price: "2,590",
      originalPrice: "4,949",
      discount: "47%",
      badge: "Best Seller",
      delivery: null,
      express: false,
      ranking: "#5 in Smartphones",
      superMall: true
    },
    {
      id: 5,
      title: "Samsung Galaxy S25 Ultra AI Dual SIM Titanium Black 12GB RAM 256GB 5G - Middle East...",
      image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: "3.2K",
      price: "3,225",
      originalPrice: "5,099",
      discount: "36%",
      badge: "Best Seller",
      delivery: null,
      express: false,
      ranking: "#3 in Smartphones",
      superMall: true,
      featured: true
    },
    {
      id: 6,
      title: "Sony PlayStation 5 Slim Console International Version Digital Edition With Controller",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: "2.1K",
      price: "1,599",
      originalPrice: "1,699",
      discount: null,
      badge: "Best Seller",
      delivery: null,
      express: true,
      ranking: "#2 in Gaming Consoles"
    },
    {
      id: 7,
      title: "Apple MacBook Pro 14-inch M3 Pro Chip 18GB RAM 512GB SSD - Space Black",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: "15.8K",
      price: "8,999",
      originalPrice: "12,499",
      discount: "28%",
      badge: "Best Seller",
      delivery: "Free Delivery",
      express: true,
      ranking: "#1 in Laptops"
    },
    {
      id: 8,
      title: "Dell XPS 13 Plus 13.4-inch Touch Laptop Intel Core i7 16GB RAM 1TB SSD",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: "8.9K",
      price: "6,299",
      originalPrice: "8,999",
      discount: "30%",
      badge: "Best Seller",
      delivery: null,
      express: false,
      ranking: "#4 in Laptops",
      superMall: true
    },
    {
      id: 9,
      title: "Apple AirPods Pro 2nd Generation with USB-C Charging Case",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: "45.2K",
      price: "899",
      originalPrice: "1,199",
      discount: "25%",
      badge: "Best Seller",
      delivery: "Free Delivery",
      express: true,
      ranking: "#1 in Headphones"
    },
    {
      id: 10,
      title: "Nintendo Switch OLED Model with White Joy-Con Controllers",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: "32.1K",
      price: "1,299",
      originalPrice: "1,599",
      discount: "19%",
      badge: "Best Seller",
      delivery: null,
      express: false,
      ranking: "#3 in Gaming Consoles",
      superMall: true
    }
  ];

  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended for you</h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            style={{ marginLeft: '-20px' }}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            style={{ marginRight: '-20px' }}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Products Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                favorites={favorites} 
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, favorites, toggleFavorite }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-72">
      {/* Image Container */}
      <div className="relative p-4">
        {/* Badge */}
        <div className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded z-10">
          {product.badge}
        </div>
        
        {/* Wishlist Button */}
        <button 
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-2 right-2 p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <svg 
            className={`w-5 h-5 ${
              favorites.has(product.id) 
                ? 'text-red-500 fill-current' 
                : 'text-gray-400 hover:text-red-400'
            }`} 
            fill={favorites.has(product.id) ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Featured Star */}
        {product.featured && (
          <div className="absolute top-12 right-2 z-10">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        )}

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-cover rounded mb-3"
        />

        {/* Add to Cart Button */}
        <button className="w-full border border-gray-300 rounded py-2 hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5m4.5-1.5h6" />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="px-4 pb-4">
        {/* Title */}
        <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight h-10">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-gray-700 mr-1">{product.rating}</span>
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center mb-2 flex-wrap">
          <span className="text-lg font-bold text-red-600 mr-2">₹ {product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through mr-2">₹ {product.originalPrice}</span>
              <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">{product.discount}</span>
            </>
          )}
        </div>

        {/* Delivery Info */}
        {product.delivery && (
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-600">{product.delivery}</span>
          </div>
        )}

        {/* Ranking */}
        {product.ranking && (
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-gray-600">{product.ranking}</span>
          </div>
        )}

        {/* Badges */}
        <div className="flex flex-wrap gap-1">
          {product.express && (
            <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-medium">
              express
            </span>
          )}
          {product.superMall && (
            <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <span>super</span>
              <span className="bg-white text-blue-600 px-1 rounded text-xs">mall</span>
            </div>
          )}
        </div>

        {/* Super Mall Delivery Time */}
        {product.superMall && (
          <div className="mt-2 bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <span>GET IN 1 HR 18 MINS</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedProducts;