import Icon from '@/components/ui/icon';

const TG_LINK = 'https://t.me/m/eyoLAGiRODcy';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
      <div className="container-landing flex items-center justify-between h-16">
        <span className="font-heading text-lg tracking-widest text-white">
          AI MODELS FACTORY
        </span>
        <a
          href={TG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 text-neon-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-neon-green/20 transition-all min-h-[44px]"
          style={{ color: '#00ff88' }}
        >
          <Icon name="Send" size={16} />
          Вступить в клуб
        </a>
      </div>
    </nav>
  );
};

export default Nav;
