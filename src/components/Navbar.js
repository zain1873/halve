import React, { useState } from 'react';
import marketPlaceLogo from '../assets/images/halve-off-logo (2).png';
import { 
  Home, 
  HelpCircle, 
  Tag, 
  Star, 
  GraduationCap,
  Wine,
  Menu,
  Search,
  Phone,
  BarChart3,
  Heart,
  User,
  ShoppingCart,
  X,
  Zap,
  Crown,
  Gift,
  ChevronDown, 
  Tags,
  Flame, 
  Percent 
} from 'lucide-react';

export default function NavbarReplica() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Top Menu Items */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">Navigation</h3>
              <div className="space-y-2">
                <a href="#home" className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg ">
                  <Home size={18} />
                  <span>Home</span>
                </a>
                <a href="#help" className="flex items-center space-x-3 p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <HelpCircle size={18} />
                  <span>Help Center</span>
                </a>
                <a href="#brands" className="flex items-center space-x-3 p-2 text-purple-600 hover:bg-purple-50 rounded-lg">
                  <Crown size={18} />
                  <span>Brands</span>
                </a>
                <a href="#promotions" className="flex items-center space-x-3 p-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                  <Zap size={18} />
                  <span>Promotions</span>
                </a>
                <a href="#offers" className="flex items-center space-x-3 p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Tag size={18} />
                  <span>Top Offers</span>
                </a>
                <a href="#half-price" className="flex items-center space-x-3 p-2 text-green-600 hover:bg-green-50 rounded-lg">
                  <Percent size={18} />
                  <span>Half Price</span>
                </a>
                <a href="#best-sellers" className="flex items-center space-x-3 p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg">
                  <Star size={18} />
                  <span>Best Sellers</span>
                </a>
                <a href="#best-deals" className="flex items-center space-x-3 p-2 text-pink-600 hover:bg-pink-50 rounded-lg">
                  <Gift size={18} />
                  <span>Best Deals</span>
                </a>
              </div>
            </div>

            {/* Shopping Categories */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">Shopping</h3>
              <div className="space-y-2">
                <a href="#browse" className="flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <span>Browse Shop</span>
                  <ChevronDown size={16} />
                </a>
                <a href="#recipes" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Recipes</a>
                <a href="#offers-page" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Offers</a>
                <a href="#coupons" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Coupons</a>
                <a href="#favourites" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Favourites</a>
                <a href="#shopping-lists" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Shopping Lists</a>
                <a href="#regulars" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Regulars</a>
                <a href="#reserved-orders" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Reserved Orders</a>
                <a href="#smart-pass" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Smart Pass</a>
                <a href="#brands-we-love" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg">Brands We Love</a>
              </div>
            </div>

            {/* Search Section */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Contact */}
            <div className="p-4 border-t border-gray-100">
              <a href="tel:+18007777777" className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Phone size={18} />
                <span>+1(800)777-7777</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Menu Bar - Always Visible */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="w-[100%] mx-auto px-4 sm:px-6 lg:px-8  mid-nav">
          <div className="flex items-center justify-between h-12">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} className="text-gray-600" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm  scrollbar-hide nav-top-items">
              <a href="#home" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer whitespace-nowrap nav-hover-item">
                <Home size={16} />
                <span>Home</span>
              </a>
              <a href="#help" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer whitespace-nowrap nav-hover-item">
                <HelpCircle size={16} />
                <span>Help Center</span>
              </a>
              <a href="#brands" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 cursor-pointer whitespace-nowrap nav-hover-item">
                <Crown size={16} />
                <span>Brands</span>
              </a>
              <a href="#promotions" className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 cursor-pointer whitespace-nowrap nav-hover-item">
                <Zap size={16} />
                <span>Promotions</span>
              </a>
           <a href="#offers" className="flex items-center space-x-2 text-red-600 hover:text-red-700 cursor-pointer whitespace-nowrap nav-hover-item">
            <div className="w-4 h-4 text-gray-600 rounded-full flex items-center justify-center">
                <Flame size={16} className="text-black" />
            </div>
            <span>Top Offers</span>
            </a>
            <a href="#half-price" className="flex items-center space-x-2 text-green-600 hover:text-green-700 cursor-pointer whitespace-nowrap nav-hover-item">
            <div className="w-4 h-4  rounded flex items-center justify-center">
                <Percent size={16} className="text-black" />
            </div>
            <span>Half Price</span>
            </a>
              <a href="#best-sellers" className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 cursor-pointer whitespace-nowrap nav-hover-item">
                <Star size={16} />
                <span>Best Sellers</span>
              </a>
              <a href="#best-deals" className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 cursor-pointer whitespace-nowrap nav-hover-item">
                <Gift size={16} />
                <span>Best Deals</span>
              </a>
            </div>

            {/* Mobile title (only visible on mobile) */}
            <div className="md:hidden">
               <a href="">
                {/* <img className='img_fluid' src={marketPlaceLogo} alt="" /> */}
                </a>
              
            </div>

            {/* Dropdown arrow */}
            <div className="flex items-center">
              <ChevronDown size={20} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Bar - Marketplace (Hidden on Mobile) */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="w-[100%] mx-auto px-4 sm:px-6 lg:px-8 mid-nav">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 ">
              <Menu size={20} className="text-gray-600" />
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium  theme-btn">
                  Marketplace
                </div>
                <div className="bg-black text-white px-2 py-1 rounded text-xs">
                  Beta
                </div>
              </div>
        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center theme-btn">
            <Tags size={16} className="mr-1" />
            Categories
            <ChevronDown size={16} className="ml-1" />
            </div>
            </div>

            <div className="hidden lg:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="For example PlayStation"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg :border-transparent"
                />
                <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4 icons-navbar">
              <div className="hidden xl:flex items-center space-x-1 text-gray-600">
                <Phone size={16} />
                <span className="text-sm number">+1(800)777-7777</span>
              </div>
              <a href="#analytics" className="text-gray-600 hover:text-gray-800">
                <BarChart3 size={20} />
              </a>
              <a href="#wishlist" className="text-gray-600 hover:text-gray-800">
                <Heart size={20} />
              </a>
              <a href="#profile" className="text-gray-600 hover:text-gray-800">
                <User size={20} />
              </a>
              <a href="#cart" className="text-gray-600 hover:text-gray-800">
                <ShoppingCart size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Search for second bar */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Third Bar - Navigation Menu (Hidden on Mobile) */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="w-[100%] mx-auto px-4 sm:px-6 lg:px-8 mid-nav">
          <div className="flex items-center justify-between h-12 ">
            <div className="flex items-center space-x-6 text-sm whitespace-nowrap nav-items">
              <a href="#browse" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                <span>Browse Shop</span>
                {/* <ChevronDown size={16} /> */}
              </a>
              <a href="#recipes" className="text-gray-700 hover:text-gray-900 cursor-pointer">Recipes</a>
              <a href="#offers-page" className="text-gray-700 hover:text-gray-900 cursor-pointer">Offers</a>
              <a href="#coupons" className="text-gray-700 hover:text-gray-900 cursor-pointer">Coupons</a>
              <a href="#favourites" className="text-gray-700 hover:text-gray-900 cursor-pointer">Favourites</a>
              <a href="#shopping-lists" className="text-gray-700 hover:text-gray-900 cursor-pointer">Shopping Lists</a>
              <a href="#regulars" className="text-gray-700 hover:text-gray-900 cursor-pointer">Regulars</a>
              <a href="#reserved-orders" className="text-gray-700 hover:text-gray-900 cursor-pointer">Reserved Orders</a>
              <a href="#smart-pass" className="text-gray-700 hover:text-gray-900 cursor-pointer">Smart Pass</a>
              <a href="#brands-we-love" className="text-gray-700 hover:text-gray-900 cursor-pointer">Brands We Love</a>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Promotional Banner */}

      {/* <div className="bg-yellow-300 border-b border-yellow-400">
        <div className="w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex-1 pr-4">
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Save 25% on your first order + 3 months unlimited free deliveries.</span>
                <span className="ml-2">Enter VOUTU11870 at checkout. Min spend £60. Max reward £20.</span>
                <a href="#terms" className="ml-2 underline cursor-pointer hover:text-gray-600">Terms apply</a>
              </p>
            </div>
            <button className="text-gray-800 hover:text-gray-600 flex-shrink-0">
              <X size={20} />
            </button>
          </div>
        </div>
      </div> */}

    
    </div>
  );
}