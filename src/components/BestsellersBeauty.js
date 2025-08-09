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
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft >= maxScroll - 10) {
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
      title: "Lattafa Khamrah Unisex Eau De Parfum by Lattafa 100ml",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.5,
      reviews: "3.7K",
      price: "750",
      originalPrice: "1,299",
      discount: "41%",
      badge: "Best Seller",
      delivery: "4300+ sold recently",
      express: true,
      ranking: "#11 in Face Serums"
    },
    {
      id: 2,
      title: "PharmaHealth Eventone C Cream 30g Skin lightening and brightening sunscreen with L...",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.3,
      reviews: "166",
      price: "109",
      originalPrice: null,
      discount: null,
      badge: "Best Seller",
      delivery: "#11 in Face Serums",
      express: false,
      superMall: false
    },
    {
      id: 3,
      title: "Beauty of Joseon Relief Sun Rice + Probiotics Sunscreen for face moisturizing sunblock with SPF...",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 3.9,
      reviews: "4.3K",
      price: "32.95",
      originalPrice: "55",
      discount: "61%",
      badge: "Best Seller",
      delivery: "3700+ sold recently",
      express: true,
      superMall: false
    },
    {
      id: 4,
      title: "The Ordinary Niacinamide 10% And Zinc 1% Clear 30ml",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 3.8,
      reviews: "14.1K",
      price: "32.15",
      originalPrice: "55",
      discount: "41%",
      badge: "Best Seller",
      delivery: "2400+ sold recently",
      express: false,
      ranking: null,
      superMall: true
    },
    {
      id: 5,
      title: "BARE ANATOMY Bare Anatomy Nature x Science Rosemary Water Spray for Hair Growth &...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.3,
      reviews: "51",
      price: "29.95",
      originalPrice: null,
      discount: null,
      badge: "Best Seller",
      delivery: "70+ sold recently",
      express: false,
      ranking: null,
      superMall: true,
      featured: true
    },
    {
      id: 6,
      title: "Nizoral Anti-Dandruff Treatment Shampoo, 100 Ml, Effective Dandruff Treatment, Works Pro...",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.5,
      reviews: "928",
      price: "47.05",
      originalPrice: null,
      discount: null,
      badge: "Best Seller",
      delivery: "1500+ sold recently",
      express: true,
      ranking: null
    },
    {
      id: 7,
      title: "CeraVe Foaming Facial Cleanser for Normal to Oily Skin 473ml",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.7,
      reviews: "15.8K",
      price: "899",
      originalPrice: "1,249",
      discount: "28%",
      badge: "Best Seller",
      delivery: "Free Delivery",
      express: true,
      ranking: "#1 in Face Cleansers"
    },
    {
      id: 8,
      title: "Olay Regenerist Micro-Sculpting Cream Face Moisturizer 50g",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.4,
      reviews: "8.9K",
      price: "629",
      originalPrice: "899",
      discount: "30%",
      badge: "Best Seller",
      delivery: null,
      express: false,
      ranking: "#4 in Face Moisturizers",
      superMall: true
    },
    {
      id: 9,
      title: "Maybelline New York Fit Me Matte + Poreless Foundation 30ml",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.8,
      reviews: "45.2K",
      price: "899",
      originalPrice: "1,199",
      discount: "25%",
      badge: "Best Seller",
      delivery: "Free Delivery",
      express: true,
      ranking: "#1 in Foundation"
    },
    {
      id: 10,
      title: "L'Oréal Paris Revitalift Crystal Micro-Essence 130ml Anti-Aging Serum",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&auto=format&q=80",
      rating: 4.6,
      reviews: "32.1K",
      price: "1,299",
      originalPrice: "1,599",
      discount: "19%",
      badge: "Best Seller",
      delivery: null,
      express: false,
      ranking: "#3 in Anti-Aging Serums",
      superMall: true
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Bestsellers in Beauty
            </h2>
          </div>
          <p className="text-gray-600 text-sm ml-7">Discover our most loved beauty essentials</p>
        </div>

        {/* Enhanced Slider Container */}
        <div className="relative">
          {/* Enhanced Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200/50"
            style={{ marginLeft: '-24px' }}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Enhanced Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200/50"
            style={{ marginRight: '-24px' }}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Enhanced Products Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
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
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-80 group border border-gray-100/50 hover:scale-[1.02] hover:-translate-y-1">
      {/* Enhanced Image Container */}
      <div className="relative p-5 bg-gradient-to-br from-gray-50 to-white">
        {/* Enhanced Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-xs px-3 py-1.5 rounded-full z-10 font-medium shadow-lg">
          {product.badge}
        </div>
        
        {/* Enhanced Wishlist Button */}
        <button 
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 p-2.5 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-300 z-10 shadow-lg hover:scale-110 group/heart"
        >
          <svg 
            className={`w-5 h-5 transition-all duration-300 ${
              favorites.has(product.id) 
                ? 'text-red-500 fill-current scale-110' 
                : 'text-gray-400 hover:text-red-400 group-hover/heart:scale-110'
            }`} 
            fill={favorites.has(product.id) ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Enhanced Featured Star */}
        {product.featured && (
          <div className="absolute top-14 right-3 z-10 animate-pulse">
            <div className="relative">
              <svg className="w-7 h-7 text-amber-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div className="absolute inset-0 bg-amber-300/30 rounded-full animate-ping"></div>
            </div>
          </div>
        )}

        {/* Enhanced Product Image */}
        <div className="relative overflow-hidden rounded-xl bg-white">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Enhanced Add to Cart Button */}
        <button className="w-full mt-4 border-2 border-gray-200 rounded-xl py-3 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 group/cart">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-gray-600 group-hover/cart:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5m4.5-1.5h6" />
            </svg>
            <span className="text-sm font-medium text-gray-600 group-hover/cart:text-purple-600 transition-colors duration-300">Add to Cart</span>
          </div>
        </button>
      </div>

      {/* Enhanced Product Details */}
      <div className="px-5 pb-5">
        {/* Enhanced Title */}
        <h3 className="text-sm text-gray-800 mb-3 line-clamp-2 leading-relaxed h-10 font-medium">
          {product.title}
        </h3>

        {/* Enhanced Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg mr-2">
            <span className="text-sm font-semibold text-green-700 mr-1">{product.rating}</span>
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">({product.reviews})</span>
        </div>

        {/* Enhanced Price */}
        <div className="flex items-center mb-3 flex-wrap gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">₹ {product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">₹ {product.originalPrice}</span>
              <span className="text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full font-medium shadow-sm">{product.discount}</span>
            </>
          )}
        </div>

        {/* Enhanced Delivery Info */}
        {product.delivery && (
          <div className="flex items-center mb-3 bg-green-50 px-3 py-2 rounded-lg">
            <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-green-700 font-medium">{product.delivery}</span>
          </div>
        )}

        {/* Enhanced Ranking */}
        {product.ranking && (
          <div className="flex items-center mb-3 bg-amber-50 px-3 py-2 rounded-lg">
            <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-amber-700 font-medium">{product.ranking}</span>
          </div>
        )}

        {/* Enhanced Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.express && (
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm">
              ⚡ Express
            </span>
          )}
          {product.superMall && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="font-semibold">super</span>
              <span className="bg-white text-blue-600 px-1.5 py-0.5 rounded-full text-xs font-bold">mall</span>
            </div>
          )}
        </div>

        {/* Enhanced Super Mall Delivery Time */}
        {product.superMall && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-2 rounded-lg flex items-center justify-between shadow-lg">
            <span className="font-semibold">🚀 GET IN 1 HR 18 MINS</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedProducts;