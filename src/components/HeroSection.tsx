import heroImg from "@/assets/hero-movers.png";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 max-w-lg">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
          Your Work,{" "}
          <span className="text-primary">Your Bid</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Pakistan's first bidding-based service marketplace. 100+ services,
          verified providers, and you decide your price.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="rounded-full gap-2 px-8 font-semibold text-base">
            <Smartphone className="w-5 h-5" />
            Download on Google Play
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full gap-2 px-8 font-semibold text-base border-foreground text-foreground hover:bg-foreground hover:text-card"
          >
            <Smartphone className="w-5 h-5" />
            Download on App Store
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={heroImg}
          alt="onWork service providers carrying packages"
          className="w-full max-w-md md:max-w-lg object-contain"
          loading="eager"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
