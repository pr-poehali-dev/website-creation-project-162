import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const MarketSection = () => {
  const ref = useScrollReveal();

  const facts = [
    { icon: 'TrendingUp', value: '$24 млрд', label: 'Индустрия в 2025, прогноз $71 млрд к 2032' },
    { icon: 'User', value: '10 000 EUR/мес', label: 'Aitana Lopez из Испании - виртуальная модель' },
    { icon: 'DollarSign', value: '$23 000/мес', label: 'Emily Pellegrini - доход на Fanvue' },
  ];

  const monetization = [
    { icon: 'Megaphone', title: 'Реклама от брендов', desc: 'Компании платят за посты с виртуальным инфлюенсером' },
    { icon: 'ShoppingBag', title: 'Свои продукты', desc: 'Мерч, фильтры, курсы от лица персонажа' },
    { icon: 'CreditCard', title: 'Платные площадки', desc: 'Fanvue, DFans - подписчики платят за эксклюзивный контент' },
  ];

  return (
    <section id="история" className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-4">
          Виртуальные инфлюенсеры - рынок на 24 миллиарда
        </h2>
        <p className="text-fluid-body mb-6 max-w-3xl" style={{ color: '#a3a3a3' }}>
          Виртуальный инфлюенсер - это персонаж, которого не существует в реальности. Нейросеть генерирует уникальное лицо, тело, стиль. Ты публикуешь контент от его имени в TikTok и Instagram. Аудитория растет, подписчики платят за эксклюзив
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {facts.map((f) => (
            <div key={f.value} className="card-dark-hover p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={f.icon} size={24} className="text-[#00e5ff]" />
              </div>
              <p className="text-2xl font-bold text-white mb-2 font-heading">{f.value}</p>
              <p className="text-sm" style={{ color: '#a3a3a3' }}>{f.label}</p>
            </div>
          ))}
        </div>

        <h3 className="text-fluid-h3 font-heading text-white mb-6">
          Три пути монетизации
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {monetization.map((m) => (
            <div key={m.title} className="card-dark p-6">
              <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center mb-4">
                <Icon name={m.icon} size={20} className="text-[#00ff88]" />
              </div>
              <p className="text-white font-medium mb-2">{m.title}</p>
              <p className="text-sm" style={{ color: '#a3a3a3' }}>{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-dark p-6 border-l-4" style={{ borderLeftColor: '#00ff88' }}>
          <p className="text-fluid-body" style={{ color: '#e5e5e5' }}>
            Это легально. Не используется чье-то настоящее лицо. Все генерируется нейросетью с нуля
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;