import Icon from '@/components/ui/icon';

const TG_LINK = 'https://t.me/m/eyoLAGiRODcy';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="container-landing py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-heading text-lg tracking-widest text-white mb-2">
              AI MODELS FACTORY
            </p>
            <p className="text-sm mb-3" style={{ color: '#a3a3a3' }}>
              Закрытый клуб по созданию AI-инфлюенсеров
            </p>
            <a
              href="https://t.me/ai_zavarushka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#00e5ff] hover:underline"
            >
              @ai_zavarushka
            </a>
            <p className="text-xs mt-4" style={{ color: '#737373' }}>&copy; 2026 AI Models Factory</p>
          </div>

          <div>
            <p className="font-heading text-sm tracking-wider text-white mb-4">Контакты</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                  style={{ color: '#a3a3a3' }}
                >
                  <Icon name="Send" size={14} />
                  Написать в Telegram
                </a>
              </li>
              <li>
                <a href="/oferta" className="text-sm hover:text-white transition-colors" style={{ color: '#a3a3a3' }}>
                  Оферта
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:text-white transition-colors" style={{ color: '#a3a3a3' }}>
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/requisites" className="text-sm hover:text-white transition-colors" style={{ color: '#a3a3a3' }}>
                  Реквизиты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;