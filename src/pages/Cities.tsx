import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadCTA from "@/components/DownloadCTA";
import { MapPin } from "lucide-react";

const activeCities = [
  { name: "Karachi", providers: "12,000+", status: "active" },
  { name: "Lahore", providers: "10,000+", status: "active" },
  { name: "Islamabad", providers: "6,000+", status: "active" },
  { name: "Rawalpindi", providers: "4,500+", status: "active" },
  { name: "Faisalabad", providers: "3,200+", status: "active" },
  { name: "Multan", providers: "2,800+", status: "active" },
  { name: "Peshawar", providers: "2,500+", status: "active" },
  { name: "Quetta", providers: "1,800+", status: "active" },
  { name: "Sialkot", providers: "1,500+", status: "active" },
  { name: "Gujranwala", providers: "1,200+", status: "active" },
];

const comingSoon = [
  "Hyderabad", "Bahawalpur", "Sargodha", "Sukkur", "Larkana",
  "Abbottabad", "Mardan", "Mingora", "Rahim Yar Khan", "Sahiwal",
];

const Cities = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            Available in <span className="text-primary">20+ Cities</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            onWork is rapidly expanding across Pakistan. Find verified service providers in your city.
          </p>
        </div>
      </section>

      {/* Active cities */}
      <section className="py-16 bg-card">
        <div className="container space-y-10">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Active Cities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {activeCities.map((city) => (
              <div
                key={city.name}
                className="rounded-xl border border-border bg-card p-5 flex flex-col items-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{city.name}</h3>
                <span className="text-xs text-muted-foreground">{city.providers} providers</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-16 bg-secondary">
        <div className="container space-y-10">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Coming Soon</h2>
            <p className="text-muted-foreground mt-2">We're expanding to these cities next</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {comingSoon.map((city) => (
              <span
                key={city}
                className="inline-block px-5 py-2 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <DownloadCTA />
    </main>
    <Footer />
  </div>
);

export default Cities;
