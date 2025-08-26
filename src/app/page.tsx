import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProtocolSection } from '@/components/landing/ProtocolSection';
import { ProblemSolutionSection } from '@/components/landing/ProblemSolutionSection';
import { LifecycleSection } from '@/components/landing/LifecycleSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ImpactSection } from '@/components/landing/ImpactSection';
import { CommunitySection } from '@/components/landing/CommunitySection';
import { AiGuidanceSection } from '@/components/landing/AiGuidanceSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="animate-fade-in-up">
          <ProtocolSection />
        </div>
        <div className="animate-fade-in-up">
          <ProblemSolutionSection />
        </div>
        <div className="animate-fade-in-up">
          <LifecycleSection />
        </div>
        <div className="animate-fade-in-up">
          <FeaturesSection />
        </div>
        <div className="animate-fade-in-up">
          <ImpactSection />
        </div>
        <div className="animate-fade-in-up">
          <CommunitySection />
        </div>
        <div className="animate-fade-in-up">
          <AiGuidanceSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
