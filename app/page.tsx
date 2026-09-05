import Navbar from "@/components/Navbar";
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
      <FavouriteMarketsWaitlist />
      <MarketMarquee />
      <Showcase />
      <Spotlight />
      <ThreeSteps />
      <ValueProps />
      <LogisticsFlow />
      <MarketAssociateCards />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}
