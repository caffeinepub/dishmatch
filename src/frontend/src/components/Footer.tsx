import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'dishmatch-app');

  return (
    <footer className="bg-black border-t border-white/10 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className="flex items-center justify-center gap-2">
            © {currentYear} DishMatch. Built with{' '}
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
