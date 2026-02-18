import { useState, useMemo } from 'react';
import { X, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { RestaurantCard } from '../components/RestaurantCard';
import { FilterSheet, FilterOptions } from '../components/FilterSheet';
import { useGetRestaurantsByMode, useLikes } from '../hooks/useQueries';
import { Mode, Restaurant } from '../backend';

interface SwipeScreenProps {
  mode: Mode;
}

export function SwipeScreen({ mode }: SwipeScreenProps) {
  const { data: restaurants = [], isLoading } = useGetRestaurantsByMode(mode);
  const { addLike } = useLikes();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filters, setFilters] = useState<FilterOptions>({
    partySize: 2,
    minBudget: 0,
    maxBudget: 50000,
  });

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      if (filters.category && restaurant.category !== filters.category) return false;
      if (filters.neighborhood && restaurant.neighborhood !== filters.neighborhood) return false;
      
      // Parse price range (e.g., "¥8,000~¥12,000")
      const priceMatch = restaurant.priceRange.match(/¥([\d,]+)/g);
      if (priceMatch && priceMatch.length > 0) {
        const minPrice = parseInt(priceMatch[0].replace(/[¥,]/g, ''));
        if (minPrice < filters.minBudget || minPrice > filters.maxBudget) return false;
      }
      
      return true;
    });
  }, [restaurants, filters]);

  const currentRestaurant = filteredRestaurants[currentIndex];

  const handleReject = () => {
    if (currentIndex < filteredRestaurants.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleLike = () => {
    if (currentRestaurant) {
      addLike(currentRestaurant);
      if (currentIndex < filteredRestaurants.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-white text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Loading restaurants...
        </div>
      </div>
    );
  }

  if (filteredRestaurants.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4">
        <div className="text-white text-xl text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          No restaurants match your filters
        </div>
        <Button
          onClick={() => setFilters({ partySize: 2, minBudget: 0, maxBudget: 50000 })}
          className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold"
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 gap-6">
      {/* Filter button */}
      <div className="w-full max-w-md flex justify-end">
        <FilterSheet filters={filters} onFiltersChange={setFilters} />
      </div>

      {/* Card */}
      <div className="w-full max-w-md h-[600px]">
        {currentRestaurant && <RestaurantCard restaurant={currentRestaurant} />}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-6">
        <Button
          size="lg"
          onClick={handleReject}
          className="w-16 h-16 rounded-full bg-[#FF4458] hover:bg-[#FF4458]/90 text-white shadow-lg"
        >
          <X className="w-8 h-8" />
        </Button>
        <Button
          size="lg"
          onClick={handleLike}
          className="w-16 h-16 rounded-full bg-[#21D393] hover:bg-[#21D393]/90 text-white shadow-lg"
        >
          <Heart className="w-8 h-8" />
        </Button>
      </div>

      {/* Counter */}
      <div className="text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {currentIndex + 1} / {filteredRestaurants.length}
      </div>
    </div>
  );
}
