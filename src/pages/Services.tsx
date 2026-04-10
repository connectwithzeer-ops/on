import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadCTA from "@/components/DownloadCTA";
import {
  Wrench, Paintbrush, Zap, Droplets, Hammer, Trash2,
  Truck, ShieldCheck, Scissors, Sofa, Bug, Wind, Cog, Home,
} from "lucide-react";

const categories = [
  { icon: Wrench, name: "Plumbing", count: 12, desc: "Pipe fitting, leak repair, bathroom installation, water tank cleaning" },
  { icon: Zap, name: "Electrician", count: 15, desc: "Wiring, switchboard repair, fan installation, generator servicing" },
  { icon: Paintbrush, name: "Painting", count: 8, desc: "Interior & exterior painting, wall textures, waterproofing" },
  { icon: Hammer, name: "Carpentry", count: 10, desc: "Furniture repair, door fitting, kitchen cabinets, wood polishing" },
  { icon: Trash2, name: "Cleaning", count: 14, desc: "Deep cleaning, sofa cleaning, office cleaning, water tank washing" },
  { icon: Droplets, name: "AC Services", count: 9, desc: "AC installation, gas refill, duct cleaning, maintenance" },
  { icon: Truck, name: "Shifting", count: 7, desc: "Home shifting, office relocation, packing & unpacking" },
  { icon: ShieldCheck, name: "Security", count: 5, desc: "CCTV installation, alarm systems, security guards" },
  { icon: Scissors, name: "Salon & Beauty", count: 11, desc: "Haircuts, facials, bridal makeup, mehndi services" },
  { icon: Sofa, name: "Furniture", count: 6, desc: "Custom furniture, upholstery, assembly & disassembly" },
  { icon: Bug, name: "Pest Control", count: 4, desc: "Fumigation, termite treatment, rodent control" },
  { icon: Wind, name: "Laundry", count: 5, desc: "Dry cleaning, ironing, carpet washing, curtain cleaning" },
  { icon: Cog, name: "Appliance Repair", count: 13, desc: "Washing machine, fridge, microwave, oven repair" },
  { icon: Home, name: "Home Renovation", count: 8, desc: "Complete home makeover, false ceiling, flooring, tiling" },
];

const Services = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse 100+ services across 14 categories. Post your job and let verified providers bid for it.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-border bg-card p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <c.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{c.name}</h3>
                <span className="text-xs text-primary font-semibold">{c.count} services</span>
              </div>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <DownloadCTA />
    </main>
    <Footer />
  </div>
);

export default Services;
