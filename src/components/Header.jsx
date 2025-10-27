export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-5xl px-6 pt-8 sm:pt-10">
        <div className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm" style={{ backgroundColor: '#fff', boxShadow: '0 6px 24px rgba(0,0,0,0.06)' }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#a8d5ba' }} />
          <span className="text-[13px]" style={{ color: '#5d4037' }}>Персональный подарок к 46-летию</span>
        </div>
        <h1
          className="mt-6 text-3xl sm:text-4xl md:text-5xl leading-tight"
          style={{ color: '#5d4037', fontFamily: 'Playfair Display, serif' }}
        >
          Здоровье кожи головы и волос
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl max-w-3xl" style={{ color: '#5d4037' }}>
          Персональный гид к здоровью и красоте ваших волос, Екатерина.
        </p>
      </div>
    </header>
  );
}
