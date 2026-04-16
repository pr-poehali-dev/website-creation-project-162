import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const MistakesSection = () => {
  const ref = useScrollReveal();

  const mistakes = [
    {
      title: 'Прогрев аккаунта',
      desc: 'Первый TikTok бан через 5 дней. Второй - через неделю. Потерял 2 аккаунта и $100 на контент',
    },
    {
      title: 'Настройка генерации',
      desc: 'Лицо модели плыло, первые 3 попытки датасета были мусором. Неделя впустую',
    },
    {
      title: 'Общение с подписчиками',
      desc: 'Человек пишет "привет", я молчу, он уходит. $20-50 потенциального дохода испаряется каждый раз',
    },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-4">
          Три ошибки которые стоили мне 2 месяца
        </h2>
        <p className="text-fluid-body text-[#888] mb-8">
          Первый месяц я заработал $40. Вот почему:
        </p>

        <div className="space-y-4 mb-10">
          {mistakes.map((m, i) => (
            <div
              key={m.title}
              className="card-dark p-6 border-l-4"
              style={{ borderLeftColor: '#ef4444' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                  <Icon name="X" size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Ошибка {i + 1}: {m.title}</p>
                  <p className="text-sm text-[#888]">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-dark p-6 border-l-4" style={{ borderLeftColor: '#00ff88' }}>
          <p className="text-fluid-body text-[#ccc]">
            Когда закрыл все три - рост пошел. С $40 до $745 за 8 дней. В клубе эти ошибки закрыты с первого дня
          </p>
        </div>
      </div>
    </section>
  );
};

export default MistakesSection;
