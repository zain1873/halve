'use client'

export default function LatestNews() {
  const newsArticles = [
    {
      id: 1,
      title: "New arrivals of Nintendo Wii games! (Demo)",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      date: "26.05.2024",
      category: "gaming",
      size: "large"
    },
    {
      id: 2,
      title: "City in our store! Famous American WeatherMaster tents! (Demo)",
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=200&fit=crop",
      date: "25.05.2024",
      category: "outdoor",
      size: "small"
    },
    {
      id: 3,
      title: "We got the best tracks of legendary B.B King (Demo)",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      date: "24.05.2024",
      category: "music",
      size: "small"
    },
    {
      id: 4,
      title: "Looking for a keypad Nokia phone and can't find one? We still have them! (Demo)",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
      date: "23.05.2024",
      category: "phones",
      size: "small"
    },
    {
      id: 5,
      title: "Afraid of zombies? Preparing for apocalypse? (Demo)",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      date: "22.05.2024",
      category: "survival",
      size: "small"
    },
    {
      id: 6,
      title: "True American classic! Drifter cruisers (Demo)",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop",
      date: "21.05.2024",
      category: "bikes",
      size: "small"
    },
    {
      id: 7,
      title: "For those who love sound quality we have awesome Pioneer speakers! (Demo)",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop",
      date: "20.05.2024",
      category: "audio",
      size: "small"
    }
  ]

  return (
    <section className="lg:py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Stay updated with the <span className="text-orange-500">latest news</span>
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Large Featured Article */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer h-full">
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {newsArticles[0].date}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">
                    {newsArticles[0].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Small Articles Grid - 3 columns, 2 rows */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {newsArticles.slice(1, 7).map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-24 sm:h-28 lg:h-32 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {article.date}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="text-gray-900 text-xs sm:text-sm font-medium leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Blog Articles Button */}
        <div className="text-center mb-12 sm:mb-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300">
            All blog articles
          </button>
        </div>


      </div>

      {/* Custom CSS for line-clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}