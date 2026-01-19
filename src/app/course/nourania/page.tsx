import Header from "@/components/sections/header";
import NouraniaHero from "@/components/sections/nourania/hero";
import NouraniaTrustBar from "@/components/sections/nourania/trust-bar";
import NouraniaTestimonials from "@/components/sections/nourania/testimonials";
import NouraniaPourQui from "@/components/sections/nourania/pour-qui";
import NouraniaObjectifs from "@/components/sections/nourania/objectifs";
import NouraniaProgramme from "@/components/sections/nourania/programme";
import NouraniaLevels from "@/components/sections/nourania/levels";
import NouraniaMethod from "@/components/sections/nourania/method";
import NouraniaHowItWorks from "@/components/sections/nourania/how-it-works";
import NouraniaFormats from "@/components/sections/nourania/formats";
import NouraniaTeachers from "@/components/sections/nourania/teachers";
import NouraniaResults from "@/components/sections/nourania/results";
import NouraniaPricingPlans from "@/components/sections/nourania/pricing-plans";
import NouraniaLeadMagnet from "@/components/sections/nourania/lead-magnet";
import NouraniaFAQ from "@/components/sections/nourania/faq";
import NouraniaFinalCTA from "@/components/sections/nourania/final-cta";
import FooterSection from "@/components/sections/footer";

export default function NouraniaCoursePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <NouraniaHero />
        <NouraniaTrustBar />
        <NouraniaTestimonials />
        <NouraniaPourQui />
        <NouraniaObjectifs />
        <NouraniaProgramme />
        <NouraniaLevels />
        <NouraniaMethod />
        <NouraniaHowItWorks />
        <NouraniaFormats />
        <NouraniaTeachers />
        <NouraniaResults />
        <NouraniaPricingPlans />
        <NouraniaLeadMagnet />
        <NouraniaFAQ />
        <NouraniaFinalCTA />
      </main>
      <FooterSection />
    </div>
  );
}
