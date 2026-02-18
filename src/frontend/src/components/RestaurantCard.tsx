import { useState } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Restaurant } from '../backend';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Generate 5 unique Unsplash images for each restaurant
  const photos = [
    `https://source.unsplash.com/800x600/?${encodeURIComponent(restaurant.category.toLowerCase())},restaurant,food&sig=${restaurant.name.length}`,
    `https://source.unsplash.com/800x600/?restaurant,interior,dining&sig=${restaurant.name.charCodeAt(0)}`,
    `https://source.unsplash.com/800x600/?gourmet,${encodeURIComponent(restaurant.category.toLowerCase())}&sig=${restaurant.rating * 100}`,
    `https://source.unsplash.com/800x600/?fine-dining,${encodeURIComponent(restaurant.neighborhood)}&sig=${restaurant.priceRange.length}`,
    `https://source.unsplash.com/800x600/?luxury,restaurant,ambiance&sig=${restaurant.details.length}`,
  ];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
      {/* Image with carousel controls */}
      <div className="relative w-full h-full">
        <img
          src={photos[currentPhotoIndex]}
          alt={`${restaurant.name} - Photo ${currentPhotoIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Carousel navigation */}
        <button
          onClick={handlePrevPhoto}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextPhoto}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Photo indicators */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {photos.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all ${
                index === currentPhotoIndex ? 'w-8 bg-[#D4AF37]' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Bottom overlay with restaurant info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 pt-20">
          <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {restaurant.name}
          </h2>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-lg">{restaurant.rating.toFixed(1)}</span>
            </div>
            
            <div className="flex items-center gap-1 text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{restaurant.neighborhood}</span>
            </div>
            
            <span className="text-white/80 text-sm font-semibold">{restaurant.priceRange}</span>
          </div>

          <p className="text-white/90 text-sm leading-relaxed mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {restaurant.details}
          </p>

          <div className="flex gap-2">
            <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold">
              {restaurant.category}
            </span>
            <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {restaurant.mode === 'Date' ? '💑 Date' : '💼 Business'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
