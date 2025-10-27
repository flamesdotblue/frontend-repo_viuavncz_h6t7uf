export default function MainSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-8 sm:pt-10 relative">
      <div
        className="rounded-2xl p-6 sm:p-8 md:p-10"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', borderRadius: '12px' }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl" style={{ color: '#5d4037', fontFamily: 'Playfair Display, serif' }}>
              Добро пожаловать, Екатерина!
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed" style={{ color: '#5d4037' }}>
              Это начало личного пространства, где с заботой и деликатностью мы соберём знания
              о здоровье кожи головы и волос. Здесь будет лёгкая навигация, понятные рекомендации
              и эстетика, которая настраивает на гармонию и удовольствие от ухода за собой.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl px-4 py-2" style={{ backgroundColor: '#faf7f2', border: '1px solid rgba(93,64,55,0.08)' }}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#a8d5ba' }} />
              <span className="text-sm" style={{ color: '#5d4037' }}>Нежная палитра и много воздуха для удовольствия от чтения</span>
            </div>
          </div>
          <div>
            <div
              className="h-56 sm:h-64 md:h-72 w-full rounded-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(168,213,186,0.45), rgba(255,171,145,0.42))',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 10px 30px rgba(0,0,0,0.08)'
              }}
            />
            <p className="mt-3 text-sm" style={{ color: '#5d4037' }}>
              Визуальный акцент — мягкий градиент, символ гармонии и естественной красоты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
