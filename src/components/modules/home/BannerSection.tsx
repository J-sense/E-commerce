"use client";
import { useState, useEffect } from "react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      id: 1,
      title: "Summer Collection",
      subtitle: "Elevate your warm-weather wardrobe with curated styles",
      cta: "Shop Summer",
      bgColor: "bg-gradient-to-br from-white to-amber-50",
      accentColor: "bg-gradient-to-r from-amber-500 to-amber-600",
      decoration: (
        <>
          <div className="absolute right-10 top-1/4 w-48 h-48 rounded-full bg-amber-100 opacity-20 blur-sm"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-transparent via-amber-50 to-transparent opacity-30 blur-md"></div>
        </>
      ),
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Discover this season's most coveted pieces",
      cta: "Explore Now",
      bgColor: "bg-gradient-to-br from-white to-blue-50",
      accentColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      decoration: (
        <>
          <div className="absolute left-20 top-0 w-32 h-64 bg-gradient-to-b from-blue-100 to-transparent opacity-20 blur-sm"></div>
          <div className="absolute right-0 bottom-0 w-80 h-40 bg-gradient-to-tl from-transparent via-blue-50 to-transparent opacity-30 blur-md"></div>
        </>
      ),
    },
    {
      id: 3,
      title: "Exclusive Offers",
      subtitle: "Members receive 30% off select styles",
      cta: "Unlock Savings",
      bgColor: "bg-gradient-to-br from-white to-rose-50",
      accentColor: "bg-gradient-to-r from-rose-500 to-rose-600",
      decoration: (
        <>
          <div className="absolute left-1/4 top-0 w-64 h-32 bg-gradient-to-r from-rose-100 to-transparent opacity-20 blur-sm"></div>
          <div className="absolute right-20 bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-transparent via-rose-50 to-transparent opacity-30 blur-md"></div>
        </>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="relative w-full aspect-video overflow-hidden border-b border-gray-100">
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 flex items-center justify-center 
              ${banner.bgColor} 
              ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {banner.decoration}
            </div>

            {/* Subtle overlay for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <div className="mb-4">
                  <span
                    className={`inline-block px-4 py-2 text-xs md:text-sm font-light tracking-widest uppercase rounded-full ${banner.accentColor} text-white shadow-md`}
                  >
                    {index === 0
                      ? "Summer Essentials"
                      : index === 1
                      ? "Just In"
                      : "Members Only"}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-widest leading-tight text-gray-700 drop-shadow-sm">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 font-light tracking-wide">
                  {banner.subtitle}
                </p>
                <div className="pt-6">
                  <button
                    className={`px-10 py-4 font-medium rounded-full ${banner.accentColor} text-white hover:opacity-90 transition-all duration-300 shadow-inner hover:shadow-lg tracking-wide`}
                  >
                    {banner.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              index === currentSlide
                ? "bg-gray-800 border-gray-800 w-5"
                : "bg-transparent border-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
