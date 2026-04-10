import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import heroImg from "@/assets/hero-plumber.png";

const DownloadCTA = () => (
  <section className="py-20 bg-foreground">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-card">
          Abhi Download Karo — <span className="text-primary">Bilkul Free</span>
        </h2>
        <p className="text-card/70 text-lg">
          Pakistan ka sabse fair service marketplace. Apni marzi ka price set karo, verified providers se kaam karwao.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="rounded-full gap-2 px-8 font-semibold">
            <Smartphone className="w-5 h-5" />
            Google Play
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full gap-2 px-8 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Smartphone className="w-5 h-5" />
            App Store
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={heroImg}
          alt="onWork plumber illustration"
          className="w-full max-w-sm object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default DownloadCTA;
