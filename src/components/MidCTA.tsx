import Icon from '@/components/ui/icon';
import useScrollReveal from '@/hooks/useScrollReveal';

const TG_LINK = 'https://t.me/m/eyoLAGiRODcy';

const MidCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-landing reveal">
        <div className="card-dark p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-transparent to-[#a855f7]/5" />
          <div className="relative z-10">
            <p className="text-fluid-h3 font-heading text-white mb-6">
              Сейчас в клубе 35 из 50 мест
            </p>

            <div className="max-w-md mx-auto mb-6">
              <div className="flex justify-between text-xs mb-2" style={{ color: '#a3a3a3' }}>
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

            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00ff88] text-[#0a0a0a] px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all min-h-[44px] animate-pulse-glow mb-4 w-full sm:w-auto"
            >
              <Icon name="Send" size={20} />
              Занять место в клубе
            </a>

            <p className="text-sm mb-4" style={{ color: '#a3a3a3' }}>
              Откроется мой Telegram - там все обсудим и оформим вступление
            </p>

            <p className="text-xs" style={{ color: '#a3a3a3' }}>
              После 50 участников цена - 14 900 руб
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;