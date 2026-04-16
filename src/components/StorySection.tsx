import useScrollReveal from '@/hooks/useScrollReveal';

const StorySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <h2 className="text-fluid-h2 font-heading text-white mb-6">
          Почему я начал этим заниматься
        </h2>
        <div className="max-w-3xl space-y-4 text-fluid-body" style={{ color: '#e5e5e5' }}>
          <p>
            В декабре 2025 копался в западном рынке, наткнулся на нишу виртуальных инфлюенсеров. Купил зарубежный курс за $200. Обалдел от цифр - люди зарабатывают тысячи долларов в месяц на персонажах, которых не существует
          </p>
          <p>
            Еще больше обалдел от того, что почти все делают контент руками - фотошоп, ретушь, часы работы. Хотя нейросети уже умеют все это за минуты
          </p>
          <p className="card-dark p-6 border-l-4" style={{ borderLeftColor: '#a855f7' }}>
            Генерация контента - не проблема. Настоящая проблема - понять ЧТО генерировать, КУДА постить и КАК превращать подписчиков в платящих клиентов
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;