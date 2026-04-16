import useScrollReveal from '@/hooks/useScrollReveal';

const StatsBreak = () => {
  const ref = useScrollReveal();

  const stats = [
    { value: '8', label: 'разделов' },
    { value: '35', label: 'участников' },
    { value: '\u221E', label: 'доступ' },
    { value: '24/7', label: 'поддержка' },
  ];

  return (
    <section ref={ref}>
      <div className="reveal border-y border-white/5 bg-white/[0.02]">
        <div className="container-landing py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-[#888]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBreak;
