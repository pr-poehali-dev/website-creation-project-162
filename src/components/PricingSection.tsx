import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const PricingSection = () => {
  const ref = useScrollReveal();

  const launchCosts = [
    { item: 'VPN', cost: '$5-10' },
    { item: 'Облачный сервер', cost: '$15-20' },
    { item: 'Регистрация на площадке', cost: '$30-40' },
  ];

  const monthlyCosts = [
    { item: 'Сервер (пара часов)', cost: '$3-5' },
    { item: 'VPN', cost: '$5-10' },
  ];

  const comparison = [
    { param: 'Цена', self: 'Бесплатно', course: '30-50k руб', club: '9 900 руб' },
    { param: 'Поддержка', self: 'Нет', course: 'На время курса', club: 'Навсегда' },
    { param: 'Обновления', self: 'Нет', course: 'Нет', club: 'Бесплатно' },
    { param: 'Автоматизация', self: 'Нет', course: 'Нет', club: 'Да' },
    { param: 'Шаблоны', self: 'Нет', course: 'Базовые', club: 'Все мои' },
    { param: 'Скрипты общения', self: 'Нет', course: 'Нет', club: 'Готовые' },
    { param: 'Срок до результата', self: 'Месяцы', course: 'Месяц', club: 'Дни' },
    { param: 'Чат с экспертом', self: 'Нет', course: 'Ограничен', club: 'Всегда' },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-10">
          Сколько ты вложишь и что получишь
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card-dark p-6">
            <p className="font-heading text-lg text-white mb-4">На запуск</p>
            <div className="space-y-3">
              {launchCosts.map((c) => (
                <div key={c.item} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-sm text-[#888]">{c.item}</span>
                  <span className="text-sm text-white font-medium">{c.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-1">
                <span className="text-sm font-medium text-white">Итого</span>
                <span className="text-sm font-bold" style={{ color: '#00ff88' }}>$50-70</span>
              </div>
            </div>
          </div>

          <div className="card-dark p-6">
            <p className="font-heading text-lg text-white mb-4">Ежемесячно</p>
            <div className="space-y-3">
              {monthlyCosts.map((c) => (
                <div key={c.item} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-sm text-[#888]">{c.item}</span>
                  <span className="text-sm text-white font-medium">{c.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-1">
                <span className="text-sm font-medium text-white">Итого</span>
                <span className="text-sm font-bold" style={{ color: '#00ff88' }}>~$10-15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block card-dark overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-sm text-[#888] font-normal">Параметр</th>
                <th className="text-center p-4 text-sm text-[#888] font-normal">Сам</th>
                <th className="text-center p-4 text-sm text-[#888] font-normal">Курсы</th>
                <th className="text-center p-4 text-sm font-medium" style={{ color: '#00ff88' }}>Клуб</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.param} className="border-b border-white/5">
                  <td className="p-4 text-sm text-[#ccc]">{row.param}</td>
                  <td className="p-4 text-sm text-[#555] text-center">{row.self}</td>
                  <td className="p-4 text-sm text-[#555] text-center">{row.course}</td>
                  <td className="p-4 text-sm text-white text-center font-medium">{row.club}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {comparison.map((row) => (
            <div key={row.param} className="card-dark p-4">
              <p className="text-xs text-[#888] mb-2">{row.param}</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <p className="text-xs text-[#555] mb-1">Сам</p>
                  <p className="text-sm text-[#888]">{row.self}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[#555] mb-1">Курсы</p>
                  <p className="text-sm text-[#888]">{row.course}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs mb-1" style={{ color: '#00ff88' }}>Клуб</p>
                  <p className="text-sm text-white font-medium">{row.club}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
