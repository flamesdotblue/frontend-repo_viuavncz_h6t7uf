import { useEffect, useState } from 'react';
import IntroOverlay from './components/IntroOverlay.jsx';
import BackgroundDecor from './components/BackgroundDecor.jsx';
import Header from './components/Header.jsx';
import MainSection from './components/MainSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Inject Google Fonts (Playfair Display for headings, Inter for body)
  useEffect(() => {
    const existing = document.querySelector('link[data-app-fonts]');
    if (!existing) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('data-app-fonts', 'true');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#faf7f2', color: '#5d4037', fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      {showIntro && (
        <IntroOverlay onFinish={() => setShowIntro(false)} duration={3600} />
      )}

      <BackgroundDecor />

      <div className="relative">
        <Header />
        <MainSection />
        <FeaturesSection />
      </div>

      <footer className="mt-auto w-full pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-xl px-4 py-3" style={{ backgroundColor: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
            <p className="text-sm" style={{ color: '#5d4037' }}>
              Нежная палитра: кремовый фон, шалфейно-зелёный акцент, тёплый персиковый и шоколадный текст. Скругления и тонкие тени создают мягкое, заботливое настроение.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
