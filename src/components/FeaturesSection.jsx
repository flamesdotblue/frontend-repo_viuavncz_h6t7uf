import FadeInUp from './FadeInUp.jsx';
import FeatureCard from './FeatureCard.jsx';

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <FadeInUp>
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl" style={{ color: '#5d4037', fontFamily: 'Playfair Display, serif' }}>
            Важные направления ухода
          </h2>
          <p className="mt-2 text-base" style={{ color: '#5d4037' }}>
            Три ключевых задачи, чтобы укрепить здоровье кожи головы и сделать волосы сильнее и красивее.
          </p>
        </div>
      </FadeInUp>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
        <FadeInUp delay={50}>
          <FeatureCard
            title="Восстановление роста волос"
            description="Пробуждение спящих фолликулов и укрепление волос изнутри"
            emoji="🌱"
            variant="growth"
          />
        </FadeInUp>
        <FadeInUp delay={150}>
          <FeatureCard
            title="Избавление от перхоти"
            description="Эффективные методы борьбы с перхотью и восстановление баланса"
            emoji="❄️"
            variant="dandruff"
          />
        </FadeInUp>
        <FadeInUp delay={250}>
          <FeatureCard
            title="Борьба и профилактика с вшами"
            description="Надёжная защита и профилактические меры"
            emoji="🛡️"
            variant="shield"
          />
        </FadeInUp>
      </div>
    </section>
  );
}
