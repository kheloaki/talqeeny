import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ProblemStatement from "@/components/sections/problem-statement";
import WhyItWorks from "@/components/sections/why-it-works";
import CursusPathway from "@/components/sections/cursus-pathway";
import TrustBar from "@/components/sections/trust-bar";
import Testimonials from "@/components/sections/testimonials";
import PourQui from "@/components/sections/pour-qui";
import Objectifs from "@/components/sections/objectifs";
import Programme from "@/components/sections/programme";
import Levels from "@/components/sections/levels";
import Method from "@/components/sections/method";
import HowItWorks from "@/components/sections/how-it-works";
import Formats from "@/components/sections/formats";
import Teachers from "@/components/sections/teachers";
import Results from "@/components/sections/results";
import PricingPlans from "@/components/sections/pricing-plans";
import Guarantees from "@/components/sections/guarantees";
import LeadMagnet from "@/components/sections/lead-magnet";
import RecentBlogs from "@/components/sections/recent-blogs";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import FooterSection from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <ProblemStatement />
        <WhyItWorks />
        <CursusPathway />
        <Testimonials />
        <PourQui />
        <Objectifs />
        <Programme />
        <Levels />
        <Method />
        <HowItWorks />
        <Formats />
        <Teachers />
        <Results />
        <PricingPlans />
        <Guarantees />
        <LeadMagnet />
        <RecentBlogs />
        <FAQ />
        <FinalCTA />
      </main>
      <FooterSection />
    </div>
  );
}
