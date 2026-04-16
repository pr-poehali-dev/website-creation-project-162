import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const HonestySection = () => {
  const ref = useScrollReveal();

  const nos = [
    'Нет гарантий дохода - кто обещает, врет',
    'Нет кнопки "бабло", 2-3 недели на погружение',
    'Это бизнес с порогом $50, не волшебство',
  ];

  const yeses = [
    'Готовая система + 35 человек рядом',
    'Можно совмещать с работой, нет дедлайнов',
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-8">
          Без розовых очков
        </h2>

        <div className="space-y-3 mb-8">
          {nos.map((n) => (
            <div key={n} className="card-dark p-5 flex items-center gap-3 border-l-4" style={{ borderLeftColor: '#ef4444' }}>
              <Icon name="X" size={18} className="text-red-400 shrink-0" />
              <span className="text-fluid-small text-[#ccc]">{n}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {yeses.map((y) => (
            <div key={y} className="card-dark p-5 flex items-center gap-3 border-l-4" style={{ borderLeftColor: '#00ff88' }}>
              <Icon name="Check" size={18} className="text-[#00ff88] shrink-0" />
              <span className="text-fluid-small text-[#ccc]">{y}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonestySection;
