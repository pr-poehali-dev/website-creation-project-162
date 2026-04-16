import useScrollReveal from '@/hooks/useScrollReveal';

const IncomeSection = () => {
  const ref = useScrollReveal();

  const months = [
    { label: 'Месяц 1', value: '$40', pct: 3 },
    { label: 'Месяц 2', value: '$927', pct: 50 },
    { label: 'Апрель, 8 дней', value: '$745', pct: 100 },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <div className="inline-flex items-center gap-2 bg-[#00e5ff]/10 border border-[#00e5ff]/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-fluid-small" style={{ color: '#00e5ff' }}>
            Мой результат - твоя возможность
          </span>
        </div>

        <h2 className="text-fluid-h2 font-heading text-white mb-4">
          Сколько приносит одна AI-модель
        </h2>
        <p className="text-fluid-body text-[#888] mb-10 max-w-2xl">
          Мой реальный доход за 3 месяца. Одна модель, работаю один. Все что я использую - есть в клубе
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-dark p-4">
            <div className="bg-[#0a0a0a] rounded-lg aspect-video flex items-center justify-center border border-white/5">
              <div className="text-center p-6">
                <p className="text-4xl font-bold" style={{ color: '#00ff88' }}>$745.61</p>
                <p className="text-[#888] mt-2 text-sm">Fanvue, апрель 2026</p>
                <p className="text-[#555] text-xs mt-1">Первые 8 дней</p>
              </div>
            </div>
            <p className="text-xs text-[#555] mt-3 text-center">
              Fanvue, апрель 2026, первые 8 дней. $745.61 за месяц, $1 875.21 суммарно с февраля
            </p>
          </div>
          <div className="card-dark p-4">
            <div className="bg-[#0a0a0a] rounded-lg aspect-video flex items-center justify-center border border-white/5">
              <div className="text-center p-6">
                <p className="text-4xl font-bold" style={{ color: '#00e5ff' }}>$927.83</p>
                <p className="text-[#888] mt-2 text-sm">Fanvue, февраль 2026</p>
                <p className="text-[#555] text-xs mt-1">За полтора месяца</p>
              </div>
            </div>
            <p className="text-xs text-[#555] mt-3 text-center">
              Fanvue, доход с февраля 2026. $927.83 за полтора месяца
            </p>
          </div>
        </div>

        <p className="text-fluid-body text-[#ccc] mb-10 max-w-2xl">
          Два месяца назад было $927 за полтора месяца. Сейчас столько набегает за полторы недели. Рост в 18 раз с первого месяца
        </p>

        <div className="space-y-4">
          {months.map((m) => (
            <div key={m.label} className="flex items-center gap-4">
              <span className="text-fluid-small text-[#888] w-36 shrink-0">{m.label}</span>
              <div className="flex-1 bg-white/5 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${m.pct}%`,
                    background: 'linear-gradient(90deg, #00ff88, #00e5ff)',
                  }}
                />
              </div>
              <span className="text-fluid-small font-bold text-white w-20 md:w-32 text-right shrink-0">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncomeSection;
