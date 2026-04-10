import {
  Wrench, Paintbrush, Zap, Droplets, Hammer, Trash2,
  Truck, ShieldCheck, Scissors, Sofa, Bug, Wind, Cog, Home,
} from "lucide-react";

const categories = [
  { icon: Wrench, name: "Plumbing", count: 12 },
  { icon: Zap, name: "Electrician", count: 15 },
  { icon: Paintbrush, name: "Painting", count: 8 },
  { icon: Hammer, name: "Carpentry", count: 10 },
  { icon: Trash2, name: "Cleaning", count: 14 },
  { icon: Droplets, name: "AC Services", count: 9 },
  { icon: Truck, name: "Shifting", count: 7 },
  { icon: ShieldCheck, name: "Security", count: 5 },
  { icon: Scissors, name: "Salon & Beauty", count: 11 },
  { icon: Sofa, name: "Furniture", count: 6 },
  { icon: Bug, name: "Pest Control", count: 4 },
  { icon: Wind, name: "Laundry", count: 5 },
  { icon: Cog, name: "Appliance Repair", count: 13 },
  { icon: Home, name: "Home Renovation", count: 8 },
];

const ServicesCategories = () => (
  <section className="py-20 bg-secondary">
    <div className="container space-y-10">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          100+ Services, 14 Categories
        </h2>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
          From small household tasks to large business workforce needs — everything in one app
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {categories.map((c) => (
          <div
            key={c.name}
            className="bg-card rounded-xl border border-border p-5 flex flex-col items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <c.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="font-heading font-semibold text-sm text-foreground text-center">
              {c.name}
            </span>
            <span className="text-xs text-muted-foreground">{c.count} services</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesCategories;
