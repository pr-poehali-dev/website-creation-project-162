import { useState } from 'react';
import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const FAQSection = () => {
  const ref = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Это легально?',
      a: 'Да. Виртуальный инфлюенсер - это персонаж, созданный нейросетью. Не используется чье-то реальное лицо или личность. Аналогичные проекты работают по всему миру легально',
    },
    {
      q: 'Я не технарь, смогу?',
      a: 'Большинство участников клуба не программисты. В клубе есть бухгалтеры, менеджеры, предприниматели. Все инструкции пошаговые, с видео. Если что-то непонятно - пишешь мне напрямую',
    },
    {
      q: 'Почему так дешево?',
      a: 'Потому что клуб растет. Первые 50 участников получают доступ за 9 900 руб. Дальше цена вырастет до 14 900 руб и продолжит расти. Ранние участники помогают формировать контент и обратную связь',
    },
    {
      q: 'А если не получится?',
      a: 'В клубе есть все инструменты и моя личная поддержка. Но это бизнес - результат зависит от твоих усилий. Если ты готов тратить 2-3 часа в день и следовать системе, шансы высокие',
    },
    {
      q: 'Сколько реально можно заработать?',
      a: 'Мой результат: $40 в первый месяц, $927 за полтора месяца, $745 за 8 дней апреля. Это одна модель. Некоторые зарубежные авторы зарабатывают $5 000-20 000/мес, но это не типичный результат и требует времени',
    },
    {
      q: 'Нужен мощный компьютер?',
      a: 'Нет. Вся генерация происходит на облачном сервере за $1-2 в час. Тебе нужен только ноутбук с интернетом и браузер',
    },
    {
      q: 'Чем отличается от курсов за 50к?',
      a: 'Курс - это запись, которая устаревает. Клуб - это живая система. Обновления бесплатно, поддержка навсегда, чат с участниками, мои актуальные шаблоны и скрипты. Плюс в 5 раз дешевле',
    },
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-8">
          Вопросы и ответы
        </h2>

        <div className="space-y-2 max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="card-dark overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors min-h-[44px]"
              >
                <span className="text-fluid-small text-white font-medium pr-4">{faq.q}</span>
                <Icon
                  name={open === i ? 'ChevronUp' : 'ChevronDown'}
                  size={18}
                  className="text-[#888] shrink-0"
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-[#888] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
