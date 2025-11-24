import { AboutSection } from "./components/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { FlyingPlaneOverlay } from "./components/FlyingPlaneOverlay";
import { FooterSection } from "./components/FooterSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ScrollingPlane } from "./components/ScrollingPlane";
import { StoryToursSection } from "./components/StoryToursSection";

function App() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <Header />
      <ScrollingPlane />
      <main className="pt-20">
        <FlyingPlaneOverlay />
        <HeroSection />
        {/* Далее будут остальные блоки лендинга */}
        <DestinationsSection />
        <StoryToursSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ReviewsSection />
        <AboutSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
