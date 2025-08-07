import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/banner-img.png"; 
import banner2 from "../assets/images/banner-slide-img.png"; 

const images = [
  banner1,
  banner2,
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[540px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
