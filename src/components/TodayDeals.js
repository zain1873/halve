import React from 'react';
import { Star, ChevronRight, Award, Zap, Gift } from 'lucide-react';

const TodaysDeals = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="theme-padding px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Today's deals
        </h1>
        
        {/* Three Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Bestsellers Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bestsellers</h2>
              <div className="flex items-center gap-2 text-orange-600">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Top price & quality picks</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </div>
            </div>
            
            {/* Products Side by Side */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product 1 */}
                <div className="text-center">
                  <div className="relative mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1588508065123-287b28e013da?w=300&h=200&fit=crop" 
                      alt="Solar Camera"
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
                    V380 Dual Lens 4G Camera Solar PIR...
                  </h3>
                  <div className="text-red-600 font-bold text-lg mb-1">PKR21,647</div>
                  <div className="text-gray-400 line-through text-xs mb-2">PKR32,952</div>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>4.5</span>
                    </div>
                    <span>5,000+ sold</span>
                  </div>
                </div>
                
                {/* Product 2 */}
                <div className="text-center">
                  <div className="relative mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" 
                      alt="Hair Treatment"
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
                    Karseell Collagen Hair Treatment Dee...
                  </h3>
                  <div className="text-red-600 font-bold text-lg mb-1">PKR22,063</div>
                  <div className="text-gray-400 line-through text-xs mb-2">PKR25,000</div>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                    </div>
                    <span>3,000+ sold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SuperDeals Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">SuperDeals</h2>
              <div className="flex items-center gap-2 text-red-600">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Up to 70% off</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </div>
            </div>
            
            {/* Products Side by Side */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product 1 */}
                <div className="text-center">
                  <div className="relative mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=200&fit=crop" 
                      alt="Drone"
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      -50%
                    </span>
                  </div>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
                    Professional Drone E88 4K Wide-Angle...
                  </h3>
                  <div className="text-red-600 font-bold text-lg mb-1">PKR11,170</div>
                  <div className="text-gray-400 line-through text-xs">PKR22,340</div>
                </div>
                
                {/* Product 2 */}
                <div className="text-center">
                  <div className="relative mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop" 
                      alt="Tools"
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      -63%
                    </span>
                  </div>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
                    1/4" 3/8" 1/2" 3/4" 1" DN8/10/15/20/25/...
                  </h3>
                  <div className="text-red-600 font-bold text-lg mb-1">PKR9,641</div>
                  <div className="text-gray-400 line-through text-xs">PKR26,363</div>
                </div>
              </div>
            </div>
          </div>

          {/* Big Save Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Big Save</h2>
              <div className="flex items-center gap-2 text-red-600">
                <Gift className="w-5 h-5" />
                <span className="text-sm font-medium">500+ Brands</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </div>
            </div>
            
            {/* Products Side by Side */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product 1 */}
                <div className="text-center">
                  <div className="relative mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=300&h=200&fit=crop" 
                      alt="Milk Machine"
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
                    DEVISIB 4-in-1 Automatic Milk...
                  </h3>
                  <div className="text-red-600 font-bold text-lg mb-1">PKR21,108</div>
                  <div className="text-gray-400 line-through text-xs mb-1">PKR57,050</div>
                  <div className="text-red-500 text-xs font-medium">You save</div>
                  <div className="text-red-500 text-sm font-bold">PKR35,941</div>
                </div>
                
                {/* Product 2 */}
                <div className="text-center">
                  <div className="relative mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop" 
                      alt="Recording Equipment"
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
                    Ambltul Phone and DSLR Recording Mi...
                  </h3>
                  <div className="text-red-600 font-bold text-lg mb-1">PKR15,847</div>
                  <div className="text-gray-400 line-through text-xs mb-1">PKR39,617</div>
                  <div className="text-red-500 text-xs font-medium">You save</div>
                  <div className="text-red-500 text-sm font-bold">PKR23,770</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TodaysDeals;