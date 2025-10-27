import { useEffect, useState } from 'react';

export default function IntroOverlay({ onFinish, duration = 3500 }) {
  const message = 'Здравствуйте, Екатерина, сайт к вашим услугам!';
  const [visibleChars, setVisibleChars] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Typewriter effect
    const typeSpeed = Math.max(20, Math.min(80, Math.floor(duration / (message.length + 10))));
    const typing = setInterval(() => {
      setVisibleChars((v) => {
        if (v >= message.length) {
          clearInterval(typing);
          return v;
        }
        return v + 1;
      });
    }, typeSpeed);

    // Schedule fade out slightly before finish
    const fadeTimer = setTimeout(() => setFadeOut(true), Math.max(0, duration - 700));
    const finishTimer = setTimeout(() => onFinish?.(), duration);

    return () => {
      clearInterval(typing);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, message, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#faf7f2' }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Soft gradient bloom */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full"
             style={{ background: 'radial-gradient( circle at center, rgba(168,213,186,0.35), rgba(168,213,186,0) 60%)', filter: 'blur(30px)' }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full"
             style={{ background: 'radial-gradient( circle at center, rgba(255,171,145,0.35), rgba(255,171,145,0) 60%)', filter: 'blur(30px)' }} />

        {/* Centered message */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-3xl text-center">
            <div
              className="mx-auto inline-block rounded-xl px-4 py-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.6)', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
            >
              <p
                className="text-2xl sm:text-3xl md:text-4xl leading-snug"
                style={{ color: '#5d4037', fontFamily: 'Playfair Display, serif' }}
                aria-label={message}
              >
                <span>{message.slice(0, visibleChars)}</span>
                <span className="inline-block w-[1ch] animate-pulse" style={{ color: '#a8d5ba' }}>|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
