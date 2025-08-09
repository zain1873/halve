import React from 'react';

const UAEShoppingSection = () => {
  const popularSearches = [
    // Electronics & Tech
    { name: "Dyson", category: "electronics" },
    { name: "Sunscreen", category: "beauty" },
    { name: "Vitamin C Serum", category: "beauty" },
    { name: "Self Tanner", category: "beauty" },
    { name: "Samsung S25", category: "electronics" },
    { name: "S25 Ultra", category: "electronics" },
    { name: "Travel Luggage", category: "travel" },
    { name: "Body Mist", category: "beauty" },
    { name: "LabuBu", category: "toys" },
    { name: "Best Laptops", category: "electronics" },
    { name: "Kindle", category: "electronics" },
    { name: "Dior Perfume", category: "beauty" },
    { name: "Chanel Perfume", category: "beauty" },
    { name: "Rasasi Perfume", category: "beauty" },
    
    // Second row
    { name: "Versace Perfume", category: "beauty" },
    { name: "Lattafa Perfume", category: "beauty" },
    { name: "Perfumes", category: "beauty" },
    { name: "Beauty of Joseon", category: "beauty" },
    { name: "Nothing Phone", category: "electronics" },
    { name: "ASUS", category: "electronics" },
    { name: "Huawei", category: "electronics" },
    { name: "MacBook", category: "electronics" },
    { name: "Apple", category: "electronics" },
    { name: "Samsung Laptops", category: "electronics" },
    { name: "Microsoft Laptops", category: "electronics" },
    { name: "ASUS Laptops", category: "electronics" },
    { name: "Acer Laptops", category: "electronics" },
    { name: "Dell", category: "electronics" },
    
    // Third row
    { name: "Lenovo", category: "electronics" },
    { name: "Acer", category: "electronics" },
    { name: "Dell Laptops", category: "electronics" },
    { name: "MSI", category: "electronics" },
    { name: "Razer Laptops", category: "electronics" },
    { name: "MSI Laptops", category: "electronics" },
    { name: "HP Laptops", category: "electronics" },
    { name: "Microsoft", category: "electronics" },
    { name: "Huawei Laptops", category: "electronics" },
    { name: "HP", category: "electronics" },
    { name: "Lenovo Laptops", category: "electronics" },
    { name: "iPhone 14", category: "electronics" },
    { name: "iPhone 15 Pro", category: "electronics" },
    { name: "iPhone 16", category: "electronics" },
    { name: "iPhone 14 Pro Max", category: "electronics" },
    
    // Fourth row
    { name: "Samsung S23 Ultra", category: "electronics" },
    { name: "Samsung S22 Ultra", category: "electronics" },
    { name: "iPhone 16 Plus", category: "electronics" },
    { name: "iPhone 15 Pro Max", category: "electronics" },
    { name: "iPhone 16 Pro", category: "electronics" },
    { name: "Samsung Galaxy S24 Ultra", category: "electronics" },
    { name: "iPhone 14 Pro", category: "electronics" },
    { name: "iPhone 16 Pro Max", category: "electronics" },
    { name: "Samsung S24", category: "electronics" },
    { name: "iPhone 15", category: "electronics" },
    { name: "Samsung S23", category: "electronics" },
    
    // Fifth row
    { name: "Bose Speakers", category: "electronics" },
    { name: "Sony Speaker", category: "electronics" },
    { name: "Harman Kardon Speaker", category: "electronics" },
    { name: "Marshall Speaker", category: "electronics" },
    { name: "JBL Speakers", category: "electronics" },
    { name: "Nintendo Switch Games", category: "gaming" }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      electronics: "text-blue-600 hover:text-blue-800",
      beauty: "text-pink-600 hover:text-pink-800",
      travel: "text-green-600 hover:text-green-800",
      toys: "text-purple-600 hover:text-purple-800",
      gaming: "text-red-600 hover:text-red-800"
    };
    return colors[category] || "text-gray-600 hover:text-gray-800";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Hero Banner */}
      <div className="relative mb-12 rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="lg:w-[100%] relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center"
              alt="Luxury Villas Dubai"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute top-6 left-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-lg font-light tracking-wider">THE VALLEY</span>
              </div>
              <div className="text-2xl lg:text-3xl font-bold tracking-wide">EMAAR</div>
            </div>
          </div>
          

        </div>
      </div>

      {/* Superior Online Shopping Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Superior online shopping in the UAE</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-6">
          <p className="mb-4">
            As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you're shopping for the latest{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">electronic products</span>, fashion, homeware,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">products for kids and babies</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">books and stationery</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">sports and health essentials</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">beauty products</span>, or groceries, we have millions of products in the noon UAE store. As a customer-centric online store, we make it easier to buy online in flexible payment plans that help you save, along with regular sales across our extensive product range. Enjoy added benefits with our exclusive{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Emirates NBD noon One VISA Credit Card</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Mashreq noon Credit Card</span>, and our user-friendly shopping.
          </p>
          
          <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
        </div>
      </section>

      {/* Shop the Best Products Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Shop the best products & brands at noon UAE</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-6">
          <p className="mb-4">
            You'll find a massive variety of products from top brands at noon UAE. Our electronics department has the{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">latest mobile phones</span>, along with{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">tablets</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">mobile accessories</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">laptops</span>, wearable technology such as smartwatches and other wearable devices,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">headphones</span> (in-ear, wireless and noise-cancelling), audiovisual gear, a selection of{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">cameras</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">televisions</span>, and{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">video game consoles</span> such as PC and Xbox controllers, and video games. We have products from{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Samsung</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Xiaomi</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Sony</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">HP</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Dell</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Huawei</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Lenovo</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Apple</span>, and many other leading tech brands.
          </p>
          
          <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
        </div>
      </section>

      {/* Hassle-free UAE Online Shopping Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Hassle-free UAE online shopping</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-6">
          <p className="mb-4">
            When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that make shopping simpler, faster, and better. Our Buy Now, Pay Later plans include{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Tabby</span>, with orders split up to 6 payments, and{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Tamara</span>, with orders split up to 4 payments. We accept credit cards and debit cards from{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Emirates NBD</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">FAB bank</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Mashreq bank</span>,{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">ADCB</span>, and{' '}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">ADIB</span>, and cash on delivery. For even more convenience, we have a No-Cost EMI. We have a 15-day return policy that takes even more stress out of.
          </p>
          
          <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
        </div>
      </section>

      {/* Popular Searches Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Popular Searches</h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {popularSearches.map((search, index) => (
            <button
              key={index}
              className={`px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:border-gray-400 transition-colors duration-200 ${getCategoryColor(search.category)}`}
            >
              {search.name}
            </button>
          ))}
        </div>
        
        <button className="text-blue-600 hover:text-blue-800 font-medium">View More</button>
      </section>
    </div>
  );
};

export default UAEShoppingSection;