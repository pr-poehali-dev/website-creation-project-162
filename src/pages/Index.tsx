import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import IncomeSection from '@/components/IncomeSection';
import MarketSection from '@/components/MarketSection';
import StorySection from '@/components/StorySection';
import MistakesSection from '@/components/MistakesSection';
import MidCTA from '@/components/MidCTA';
import StepsSection from '@/components/StepsSection';
import ProblemsSection from '@/components/ProblemsSection';
import ClubSection from '@/components/ClubSection';
import StatsBreak from '@/components/StatsBreak';
import FitSection from '@/components/FitSection';
import PricingSection from '@/components/PricingSection';
import HonestySection from '@/components/HonestySection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import BridgeDivider from '@/components/BridgeDivider';

const Index = () => {
  return (
    <div className="noise-overlay min-h-screen bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <BridgeDivider />
      <IncomeSection />
      <BridgeDivider />
      <MarketSection />
      <BridgeDivider />
      <StorySection />
      <BridgeDivider />
      <MistakesSection />
      <MidCTA />
      <BridgeDivider />
      <StepsSection />
      <BridgeDivider />
      <ProblemsSection />
      <BridgeDivider />
      <ClubSection />
      <StatsBreak />
      <BridgeDivider />
      <FitSection />
      <BridgeDivider />
      <PricingSection />
      <BridgeDivider />
      <HonestySection />
      <BridgeDivider />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;