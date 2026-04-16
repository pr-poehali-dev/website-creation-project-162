import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const FitSection = () => {
  const ref = useScrollReveal();

  const fits = [
    'Есть 2-3 часа в день',
    '$50-70 на запуск модели',
    'Готов разбираться 2-3 недели',
    'Хочешь доход без привязки к лицу',
    'Не боишься нового',
  ];

  const notFits = [
    'Ищешь "кнопку бабло"',
    'Нет 2 часов в день',
    'Не готов вкладывать в запуск',
    'Ждешь гарантий дохода',
    'Хочешь результат без усилий',
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-10">
          Подойдет ли это тебе
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-dark p-6 border-t-2" style={{ borderTopColor: '#00ff88' }}>
            <p className="font-heading text-lg text-white mb-4">Подходит</p>
            <ul className="space-y-3">
              {fits.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00ff88]/10 flex items-center justify-center shrink-0">
                    <Icon name="Check" size={14} className="text-[#00ff88]" />
                  </div>
                  <span className="text-fluid-small text-[#ccc]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-dark p-6 border-t-2" style={{ borderTopColor: '#ef4444' }}>
            <p className="font-heading text-lg text-white mb-4">Не подходит</p>
            <ul className="space-y-3">
              {notFits.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon name="X" size={14} className="text-red-400" />
                  </div>
                  <span className="text-fluid-small text-[#ccc]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitSection;
