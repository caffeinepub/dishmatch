import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from './ui/sheet';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Category, Neighborhood } from '../backend';

export interface FilterOptions {
  category?: Category;
  neighborhood?: Neighborhood;
  partySize: number;
  minBudget: number;
  maxBudget: number;
}

interface FilterSheetProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export function FilterSheet({ filters, onFiltersChange }: FilterSheetProps) {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const handleApply = () => {
    onFiltersChange(localFilters);
  };

  const handleReset = () => {
    const defaultFilters: FilterOptions = {
      partySize: 2,
      minBudget: 0,
      maxBudget: 50000,
    };
    setLocalFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-[#D4AF37]"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-black border-white/10 text-white h-[80vh]">
        <SheetHeader>
          <SheetTitle className="text-[#D4AF37] text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Filter Restaurants
          </SheetTitle>
          <SheetDescription className="text-white/60">
            Customize your restaurant search preferences
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6 overflow-y-auto max-h-[calc(80vh-180px)] pb-4">
          {/* Category */}
          <div className="space-y-2">
            <Label className="text-white font-semibold">Category</Label>
            <Select
              value={localFilters.category}
              onValueChange={(value) => setLocalFilters({ ...localFilters, category: value as Category })}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/10">
                <SelectItem value="all">All Categories</SelectItem>
                {Object.values(Category).map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Neighborhood */}
          <div className="space-y-2">
            <Label className="text-white font-semibold">Neighborhood</Label>
            <Select
              value={localFilters.neighborhood}
              onValueChange={(value) => setLocalFilters({ ...localFilters, neighborhood: value as Neighborhood })}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="All Neighborhoods" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/10">
                <SelectItem value="all">All Neighborhoods</SelectItem>
                {Object.values(Neighborhood).map((hood) => (
                  <SelectItem key={hood} value={hood}>
                    {hood}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Party Size */}
          <div className="space-y-2">
            <Label className="text-white font-semibold">Party Size</Label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLocalFilters({ ...localFilters, partySize: Math.max(1, localFilters.partySize - 1) })}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                -
              </Button>
              <span className="text-2xl font-bold text-[#D4AF37] w-12 text-center">
                {localFilters.partySize}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLocalFilters({ ...localFilters, partySize: Math.min(20, localFilters.partySize + 1) })}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                +
              </Button>
            </div>
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <Label className="text-white font-semibold">Budget per Person</Label>
            <div className="space-y-4">
              <Slider
                min={0}
                max={50000}
                step={1000}
                value={[localFilters.minBudget, localFilters.maxBudget]}
                onValueChange={([min, max]) => setLocalFilters({ ...localFilters, minBudget: min, maxBudget: max })}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-white/80">
                <span>¥{localFilters.minBudget.toLocaleString()}</span>
                <span>¥{localFilters.maxBudget.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            Reset
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold"
          >
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
