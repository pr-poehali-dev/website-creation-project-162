import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const TG_LINK = 'https://t.me/m/eyoLAGiRODcy';

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <div className="card-dark p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-[#00e5ff]/3 to-[#a855f7]/5" />
          <div className="absolute inset-0 animate-shimmer" />
          <div className="relative z-10">
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-xs text-[#888] mb-2">
                <span>Занято</span>
                <span>35 / 50</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: '70%',
                    background: 'linear-gradient(90deg, #00ff88, #00e5ff)',
                  }}
                />
              </div>
            </div>

            <p className="text-sm text-[#888] mb-6">
              После 50 участников цена вырастет до 14 900 руб
            </p>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl text-[#555] line-through font-heading">14 900 руб</span>
              <span className="text-4xl md:text-5xl font-heading font-bold" style={{ color: '#00ff88' }}>9 900 руб</span>
            </div>

            <p className="text-sm text-[#888] mb-8">
              Один раз. Навсегда. Заплатил один раз - получил все. Обновления, поддержка - навсегда
            </p>

            <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="Send" size={28} className="text-[#00e5ff]" />
            </div>

            <h2 className="text-fluid-h2 font-heading text-white mb-4">
              Вступить в клуб - 9 900 руб
            </h2>

            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">
              Нажми кнопку ниже, откроется мой личный диалог в Telegram. Там обсудим детали и оформим вступление
            </p>

            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-lg mx-auto bg-[#00ff88] text-[#0a0a0a] px-8 py-5 rounded-xl font-bold text-xl hover:brightness-110 transition-all min-h-[44px] animate-pulse-glow text-center"
            >
              Начать зарабатывать
            </a>

            <p className="text-xs text-[#444] mt-6 max-w-md mx-auto">
              Результаты - мой личный опыт. Ваш результат зависит от вложенных усилий, времени и рыночных условий
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
