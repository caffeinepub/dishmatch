import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SwipeScreen } from './pages/SwipeScreen';
import { LikesGallery } from './pages/LikesGallery';
import { Mode } from './backend';

function App() {
  const [currentPage, setCurrentPage] = useState<'swipe' | 'likes'>('swipe');
  const [currentMode, setCurrentMode] = useState<Mode>(Mode.Date_);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        currentMode={currentMode}
        onModeChange={setCurrentMode}
      />
      <main className="flex-1 flex flex-col">
        {currentPage === 'swipe' ? (
          <SwipeScreen mode={currentMode} />
        ) : (
          <LikesGallery onNavigateToSwipe={() => setCurrentPage('swipe')} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
