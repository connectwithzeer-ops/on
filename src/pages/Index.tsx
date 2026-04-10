import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesCategories from "@/components/ServicesCategories";
import UserTypes from "@/components/UserTypes";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <ServicesCategories />
      <UserTypes />
      <TrustSection />
      <Testimonials />
      <DownloadCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
