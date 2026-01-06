import Header from "@/components/sections/header";
import Breadcrumb from "@/components/sections/breadcrumb";
import CourseDetails from "@/components/sections/course-details";
import PricingPlans from "@/components/sections/pricing-plans";
import FooterSection from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Breadcrumb />
        <CourseDetails />
        <PricingPlans />
      </main>
      <FooterSection />
    </div>
  );
}
