import { Star, MapPin, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLikes } from '../hooks/useQueries';

interface LikesGalleryProps {
  onNavigateToSwipe: () => void;
}

export function LikesGallery({ onNavigateToSwipe }: LikesGalleryProps) {
  const { likes, removeLike } = useLikes();

  if (likes.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4">
        <div className="text-white text-xl text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          No liked restaurants yet
        </div>
        <p className="text-white/60 text-center max-w-md">
          Start swiping to discover amazing restaurants in Tokyo!
        </p>
        <Button
          onClick={onNavigateToSwipe}
          className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold"
        >
          Start Swiping
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Your Liked Restaurants ({likes.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likes.map((restaurant) => (
            <div
              key={restaurant.name}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="relative h-48">
                <img
                  src={`https://source.unsplash.com/800x600/?${encodeURIComponent(restaurant.category.toLowerCase())},restaurant,food&sig=${restaurant.name.length}`}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeLike(restaurant.name)}
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {restaurant.name}
                </h3>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-[#D4AF37] font-semibold">{restaurant.rating.toFixed(1)}</span>
                  </div>

                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{restaurant.neighborhood}</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm mb-3 line-clamp-2">
                  {restaurant.details}
                </p>

                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full text-xs font-semibold">
                    {restaurant.category}
                  </span>
                  <span className="inline-block bg-white/10 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {restaurant.priceRange}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
