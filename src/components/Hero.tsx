import Icon from '@/components/ui/icon';

const TG_LINK = 'https://t.me/m/eyoLAGiRODcy';
const DASHBOARD_IMG = 'https://cdn.poehali.dev/projects/1d88e560-3686-40a7-bc3b-15c9be59b67d/files/54769ed3-aaab-4747-abf0-47e8cc1a6da4.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding pt-24 md:pt-32 relative"
      style={{
        background: 'radial-gradient(ellipse at 80% 10%, rgba(0,255,136,0.08) 0%, transparent 60%), #0a0a0a',
      }}
    >
      <div className="container-landing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(0,255,136,0.3)',
                borderRadius: '999px',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#00ff88' }}
              />
              <span style={{ color: '#e5e5e5', fontSize: '13px', fontWeight: 500 }}>
                Готовая система - 35 человек уже зарабатывают
              </span>
            </div>

            <h1
              className="text-fluid-h1 font-heading mb-6"
              style={{ color: '#ffffff', fontWeight: 800 }}
            >
              Запусти <span style={{ color: '#00ff88' }}>AI-инфлюенсера</span> который зарабатывает без твоего лица и голоса
            </h1>

            <p
              className="text-fluid-body mb-8 max-w-xl"
              style={{ color: '#a3a3a3' }}
            >
              Нейросеть создает персонажа, которого не существует. Ты публикуешь его контент. Подписчики платят. Тебя никто не видит
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { text: 'Только ноутбук', icon: 'Laptop' },
                { text: '2-3 часа в день', icon: 'Clock' },
                { text: 'Без своего лица', icon: 'EyeOff' },
              ].map((pill) => (
                <span
                  key={pill.text}
                  className="inline-flex items-center gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '999px',
                    padding: '8px 16px',
                    color: '#ffffff',
                    fontSize: '14px',
                  }}
                >
                  <Icon name={pill.icon} size={14} />
                  {pill.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a
                href="#история"
                className="inline-flex items-center justify-center gap-2 rounded-lg transition-all min-h-[44px] w-full sm:w-auto hover:bg-white/10"
                style={{
                  padding: '14px 28px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  fontWeight: 700,
                  background: 'transparent',
                }}
              >
                <Icon name="ArrowDown" size={18} />
                Как это работает
              </a>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg transition-all min-h-[44px] glow-green w-full sm:w-auto hover:brightness-110"
                style={{
                  padding: '14px 28px',
                  backgroundColor: '#00ff88',
                  color: '#0a0a0a',
                  fontWeight: 700,
                }}
              >
                <Icon name="Zap" size={18} />
                Начать зарабатывать
              </a>
            </div>

            <p style={{ color: '#a3a3a3', fontSize: '14px' }} className="mb-2">
              Мой результат: $745 за 8 дней в апреле, $1 875 за 3 месяца, одна модель
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '13px' }}>
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
              <p className="text-center mt-3" style={{ color: '#a3a3a3', fontSize: '13px' }}>
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