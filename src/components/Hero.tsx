import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const TG_LINK = 'https://t.me/m/eyoLAGiRODcy';
const DASHBOARD_IMG = 'https://cdn.poehali.dev/projects/1d88e560-3686-40a7-bc3b-15c9be59b67d/files/54769ed3-aaab-4747-abf0-47e8cc1a6da4.jpg';

const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section id="hero" className="section-padding pt-24 md:pt-32" ref={ref}>
      <div className="container-landing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-fluid-small" style={{ color: '#00ff88' }}>
                Готовая система - 35 человек уже зарабатывают
              </span>
            </div>

            <h1 className="text-fluid-h1 font-heading gradient-text-animated mb-6">
              Запусти AI-инфлюенсера который зарабатывает без твоего лица и голоса
            </h1>

            <p className="text-fluid-body text-[#888] mb-8 max-w-xl">
              Нейросеть создает персонажа, которого не существует. Ты публикуешь его контент. Подписчики платят. Тебя никто не видит
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {['Только ноутбук', '2-3 часа в день', 'Без своего лица'].map((pill) => (
                <span
                  key={pill}
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-fluid-small text-white/80"
                >
                  {pill}
                </span>
              ))}
            </div>

            <p className="text-xs text-[#555] mb-6">
              Мой результат: $745 за 8 дней в апреле, $1 875 за 3 месяца, одна модель
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <a
                href="#история"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all min-h-[44px] w-full sm:w-auto"
              >
                <Icon name="ArrowDown" size={18} />
                Как это работает
              </a>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00ff88] text-[#0a0a0a] px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all min-h-[44px] glow-green w-full sm:w-auto"
              >
                <Icon name="Zap" size={18} />
                Начать зарабатывать
              </a>
            </div>
            <p className="text-xs text-[#555]">
              Кнопка откроет мой диалог в Telegram
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 via-[#00e5ff]/10 to-[#a855f7]/20 rounded-2xl blur-3xl" />
              <img
                src={DASHBOARD_IMG}
                alt="Реальный доход, апрель 2026"
                className="relative rounded-2xl border border-white/10 w-full max-w-[400px] h-auto"
                style={{ aspectRatio: '4/5' }}
                loading="eager"
              />
              <p className="text-center text-xs text-[#555] mt-3">
                Реальный доход, апрель 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
