import Header from "@/components/sections/header";
import ArabicHero from "@/components/sections/arabic/hero";
import ArabicTrustBar from "@/components/sections/arabic/trust-bar";
import ArabicTestimonials from "@/components/sections/arabic/testimonials";
import ArabicPourQui from "@/components/sections/arabic/pour-qui";
import ArabicObjectifs from "@/components/sections/arabic/objectifs";
import ArabicProgramme from "@/components/sections/arabic/programme";
import ArabicLevels from "@/components/sections/arabic/levels";
import ArabicMethod from "@/components/sections/arabic/method";
import ArabicHowItWorks from "@/components/sections/arabic/how-it-works";
import ArabicFormats from "@/components/sections/arabic/formats";
import ArabicTeachers from "@/components/sections/arabic/teachers";
import ArabicResults from "@/components/sections/arabic/results";
import ArabicPricingPlans from "@/components/sections/arabic/pricing-plans";
import ArabicGuarantees from "@/components/sections/arabic/guarantees";
import ArabicLeadMagnet from "@/components/sections/arabic/lead-magnet";
import ArabicFAQ from "@/components/sections/arabic/faq";
import ArabicFinalCTA from "@/components/sections/arabic/final-cta";
import FooterSection from "@/components/sections/footer";

export default function ArabicCoursePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <ArabicHero />
        <ArabicTrustBar />
        <ArabicTestimonials />
        <ArabicPourQui />
        <ArabicObjectifs />
        <ArabicProgramme />
        <ArabicLevels />
        <ArabicMethod />
        <ArabicHowItWorks />
        <ArabicFormats />
        <ArabicTeachers />
        <ArabicResults />
        <ArabicPricingPlans />
        <ArabicGuarantees />
        <ArabicLeadMagnet />
        <ArabicFAQ />
        <ArabicFinalCTA />
      </main>
      <FooterSection />
    </div>
  );
}
