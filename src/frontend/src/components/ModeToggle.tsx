import { Mode } from '../backend';
import { Button } from './ui/button';

interface ModeToggleProps {
  currentMode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function ModeToggle({ currentMode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onModeChange(Mode.Date_)}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
          currentMode === Mode.Date_
            ? 'bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90'
            : 'text-white hover:bg-white/10'
        }`}
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Date
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onModeChange(Mode.Business)}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
          currentMode === Mode.Business
            ? 'bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90'
            : 'text-white hover:bg-white/10'
        }`}
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Business
      </Button>
    </div>
  );
}
