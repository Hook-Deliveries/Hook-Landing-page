import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import FavouriteMarketsWaitlist from "@/components/FavouriteMarketsWaitlist";
import MarketMarquee from "@/components/MarketMarquee";
import Showcase from "@/components/Showcase";
import Spotlight from "@/components/Spotlight";
import ThreeSteps from "@/components/ThreeSteps";
import ValueProps from "@/components/ValueProps";
import LogisticsFlow from "@/components/LogisticsFlow";
import MarketAssociateCards from "@/components/MarketAssociateCards";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Reveal>
        <FavouriteMarketsWaitlist />
      </Reveal>
      <Reveal>
        <MarketMarquee />
      </Reveal>
      <Reveal>
        <Showcase />
      </Reveal>
      <Reveal>
        <Spotlight />
      </Reveal>
      <Reveal>
        <ThreeSteps />
      </Reveal>
      <Reveal>
        <ValueProps />
      </Reveal>
      <Reveal>
        <LogisticsFlow />
      </Reveal>
      <Reveal>
        <MarketAssociateCards />
      </Reveal>
      <Reveal>
        <FAQSection />
      </Reveal>
      <Reveal>
        <FooterCTA />
      </Reveal>
    </main>
  );
}
