export default function FeatureCard({ title, description, emoji, variant = 'default' }) {
  const baseShadow = '0 12px 36px rgba(0,0,0,0.08)';

  const hoverStyles = {
    default: {
      boxShadow: `${baseShadow}`,
    },
    growth: {
      boxShadow: `${baseShadow}`,
    },
    dandruff: {
      // light blue glow on hover
      boxShadow: `${baseShadow}`,
      hoverShadow: '0 12px 36px rgba(0,0,0,0.08), 0 0 0 6px rgba(135, 206, 250, 0.25)',
    },
    shield: {
      boxShadow: `${baseShadow}`,
      hoverShadow: `${baseShadow}, 0 0 0 6px rgba(255, 215, 0, 0.22), 0 0 28px rgba(255, 215, 0, 0.35)`,
    },
  }[variant] || { boxShadow: baseShadow };

  return (
    <div
      className="group relative rounded-xl p-6 sm:p-7 bg-white transition-transform duration-300 ease-out"
      style={{ boxShadow: hoverStyles.boxShadow, borderRadius: '12px' }}
    >
      {/* Aura for shield variant */}
      {variant === 'shield' && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
          style={{ boxShadow: '0 0 0 0 rgba(255, 215, 0, 0)', borderRadius: '12px' }}
        />
      )}

      <div className="flex items-start gap-4">
        <div className="relative">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300`} // icon container
            style={{ backgroundColor: '#faf7f2' }}
          >
            <span
              className={`text-2xl select-none ${
                variant === 'growth' ? 'group-hover:animate-pulse' : ''
              } ${variant === 'shield' ? 'group-hover:scale-110' : ''}`}
              style={{ display: 'inline-block' }}
              role="img"
              aria-label={title}
            >
              {emoji}
            </span>
          </div>

          {variant === 'shield' && (
            <span
              className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: '0 0 0 8px rgba(255, 215, 0, 0.18)', borderRadius: '10px' }}
            />
          )}
        </div>

        <div>
          <h3 className="text-lg sm:text-xl" style={{ color: '#5d4037', fontFamily: 'Playfair Display, serif' }}>
            {title}
          </h3>
          <p className="mt-1 text-sm sm:text-base leading-relaxed" style={{ color: '#5d4037' }}>
            {description}
          </p>
        </div>
      </div>

      {/* Hover effects: lift and special glows */}
      <style>{`
        .group:hover {
          transform: translateY(-5px);
        }
        .group:hover {
          ${variant === 'dandruff' ? `box-shadow: ${hoverStyles.hoverShadow} !important;` : ''}
          ${variant === 'shield' ? `box-shadow: ${hoverStyles.hoverShadow} !important;` : ''}
        }
      `}</style>
    </div>
  );
}
