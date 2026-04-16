import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const TG_LINK = 'https://t.me/m/eyoLAGiRODcy';
const CLUB_IMG = 'https://cdn.poehali.dev/projects/1d88e560-3686-40a7-bc3b-15c9be59b67d/files/577233cd-2d00-4bae-849b-caa5ee7fa228.jpg';

const ClubSection = () => {
  const ref = useScrollReveal();

  const content = [
    { icon: 'Sparkles', title: 'Создание персонажа с нуля' },
    { icon: 'Calendar', title: 'Прогрев TikTok и Instagram по дням' },
    { icon: 'Image', title: 'Контент 18+ для платных площадок' },
    { icon: 'FileText', title: 'Шаблоны генерации фото и видео' },
    { icon: 'DollarSign', title: 'Система монетизации воронки' },
    { icon: 'MessageSquare', title: 'Скрипты общения с подписчиками' },
    { icon: 'Cpu', title: 'Инструменты автоматизации' },
    { icon: 'Users', title: 'Закрытый чат + моя поддержка' },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-4">
          Все что нужно для старта - уже готово
        </h2>
        <p className="text-fluid-body mb-10 max-w-2xl" style={{ color: '#a3a3a3' }}>
          Не курс с видео. Закрытый клуб с системой, шаблонами и поддержкой
        </p>

        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          <div className="relative mx-auto lg:mx-0 shrink-0" style={{ width: 'clamp(260px, 45vw, 400px)' }}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src={CLUB_IMG}
                alt="AI Models Factory клуб"
                className="w-full h-auto"
                style={{ aspectRatio: '3/4' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Icon name="Lock" size={28} className="text-white/80" />
                </div>
                <p className="text-sm text-white/60 mb-4">
                  14 закрытых разделов · видео-инструкции · шаблоны · скрипты · автоматизация
                </p>
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#a855f7] text-white px-6 py-3 rounded-lg font-medium hover:brightness-110 transition-all min-h-[44px]"
                >
                  <Icon name="Unlock" size={18} />
                  Получить доступ
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm mb-6" style={{ color: '#a3a3a3' }}>
              AI Models Factory - закрытый клуб в Telegram. 35 участников, от программистов до бухгалтеров, Москва/Берлин/весь мир
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.map((item) => (
                <div key={item.title} className="card-dark-hover p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#a855f7]/10 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={16} className="text-[#a855f7]" />
                  </div>
                  <span className="text-sm" style={{ color: '#e5e5e5' }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;