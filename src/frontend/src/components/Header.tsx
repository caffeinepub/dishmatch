import { Heart, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Mode } from '../backend';
import { ModeToggle } from './ModeToggle';

interface HeaderProps {
  currentPage: 'swipe' | 'likes';
  onNavigate: (page: 'swipe' | 'likes') => void;
  currentMode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function Header({ currentPage, onNavigate, currentMode, onModeChange }: HeaderProps) {
  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('swipe')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/assets/generated/dishmatch-logo.dim_200x200.png" 
              alt="DishMatch Logo" 
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              DishMatch
            </h1>
          </button>

          <div className="flex items-center gap-4">
            <ModeToggle currentMode={currentMode} onModeChange={onModeChange} />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate('likes')}
              className={`text-white hover:text-[#D4AF37] hover:bg-white/10 ${
                currentPage === 'likes' ? 'text-[#D4AF37]' : ''
              }`}
            >
              <Heart className="w-6 h-6" fill={currentPage === 'likes' ? '#D4AF37' : 'none'} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
