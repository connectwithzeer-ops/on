import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadCTA from "@/components/DownloadCTA";
import { Banknote, MapPin, Shield, TrendingUp, Clock, Users } from "lucide-react";
import heroRepair from "@/assets/hero-repair.png";

const benefits = [
  { icon: Banknote, title: "Earn More", desc: "Set your own rates and bid on jobs that match your skills. No commission cuts." },
  { icon: MapPin, title: "Nearby Jobs", desc: "Get notified about jobs in your area so you save time and travel costs." },
  { icon: Shield, title: "Verified Badge", desc: "Complete CNIC verification and earn a trust badge that attracts more customers." },
  { icon: TrendingUp, title: "Grow Your Business", desc: "Build your reputation with ratings and reviews. Top providers get priority." },
  { icon: Clock, title: "Flexible Schedule", desc: "Work when you want. Accept jobs that fit your availability." },
  { icon: Users, title: "Direct Communication", desc: "Chat with customers in-app. No middlemen, no commission agents." },
];

const joinSteps = [
  { step: "1", title: "Download the App", desc: "Get onWork from Google Play or the App Store." },
  { step: "2", title: "Register & Verify", desc: "Sign up with your phone number and complete CNIC verification." },
  { step: "3", title: "Set Up Your Profile", desc: "Add your skills, service areas, experience, and portfolio photos." },
  { step: "4", title: "Start Bidding", desc: "Browse nearby jobs and submit your first bid. Start earning today!" },
];

const Providers = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
              Join <span className="text-primary">50,000+</span> Verified Providers
            </h1>
            <p className="text-lg text-muted-foreground">
              Turn your skills into income. Bid on jobs, build your reputation, and grow your business with onWork.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={heroRepair} alt="Service provider" className="w-full max-w-md object-contain" loading="eager" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card">
        <div className="container space-y-10">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Why Providers Love <span className="text-primary">onWork</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="py-16 bg-secondary">
        <div className="container space-y-10">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">How to Join</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {joinSteps.map((s) => (
              <div key={s.step} className="text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto font-heading text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownloadCTA />
    </main>
    <Footer />
  </div>
);

export default Providers;
