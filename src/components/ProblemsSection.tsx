import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const ProblemsSection = () => {
  const ref = useScrollReveal();

  const problems = [
    'Стратегия неясна - куда и что постить?',
    'Бан TikTok на первой неделе без прогрева',
    'Молчание с подписчиками - они уходят',
    'Незнание трендов - контент не залетает',
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-6">
          Создать персонажа - это 10% дела
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {problems.map((p) => (
            <div key={p} className="card-dark p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="AlertTriangle" size={16} className="text-red-400" />
              </div>
              <p className="text-fluid-small text-[#ccc]">{p}</p>
            </div>
          ))}
        </div>

        <div className="card-dark p-6 border-l-4" style={{ borderLeftColor: '#a855f7' }}>
          <p className="text-fluid-body text-[#ccc]">
            Умение создавать контент без системы - это хобби. С системой - бизнес
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
