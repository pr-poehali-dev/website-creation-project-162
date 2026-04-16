import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const StepsSection = () => {
  const ref = useScrollReveal();

  const steps = [
    {
      num: '01',
      title: 'Создаешь лицо',
      time: '10-15 мин',
      desc: 'Нейросеть смешивает черты, получаешь уникальное лицо которого нет в реальности',
      icon: 'Sparkles',
      color: '#00ff88',
    },
    {
      num: '02',
      title: 'Обучаешь нейросеть',
      time: '1-2 часа',
      desc: 'Создаешь датасет фото, нейросеть запоминает лицо и генерирует стабильно',
      icon: 'Brain',
      color: '#00e5ff',
    },
    {
      num: '03',
      title: 'Генерируешь контент',
      time: '2-3 часа',
      desc: 'Фото и видео в любых стилях. $1-2 за час облачного сервера',
      icon: 'Image',
      color: '#a855f7',
    },
    {
      num: '04',
      title: 'Строишь аудиторию',
      time: 'Постоянно',
      desc: 'TikTok + Instagram по системе прогрева. Переход на платные площадки',
      icon: 'Users',
      color: '#00ff88',
    },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-10">
          От нуля до денег за 4 шага
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {steps.map((s) => (
            <div key={s.num} className="card-dark-hover p-6 relative">
              <span
                className="text-5xl font-heading font-bold opacity-10 absolute top-4 right-4"
                style={{ color: s.color }}
              >
                {s.num}
              </span>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${s.color}15` }}
              >
                <Icon name={s.icon} size={20} style={{ color: s.color }} />
              </div>
              <p className="text-white font-medium mb-1">{s.title}</p>
              <p className="text-xs mb-3" style={{ color: s.color }}>{s.time}</p>
              <p className="text-sm" style={{ color: '#a3a3a3' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-dark p-6 text-center">
          <p className="text-fluid-body" style={{ color: '#e5e5e5' }}>
            Стоимость запуска одного персонажа: <span style={{ color: '#00ff88' }} className="font-bold">$15-20</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;