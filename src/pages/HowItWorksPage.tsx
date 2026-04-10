import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadCTA from "@/components/DownloadCTA";
import { FileText, Inbox, Star, CheckCircle, Banknote, Users, Briefcase, Shield } from "lucide-react";

const customerSteps = [
  { icon: FileText, title: "Post Your Job", desc: "Describe the service you need, add photos, set your location and expected budget." },
  { icon: Inbox, title: "Receive Bids", desc: "Verified providers near you will send competitive bids within minutes." },
  { icon: Star, title: "Compare & Choose", desc: "Review ratings, past work, and pricing to pick the best provider." },
  { icon: CheckCircle, title: "Get It Done", desc: "Track your provider in real-time. Chat in-app without sharing your number." },
  { icon: Banknote, title: "Pay Securely", desc: "Payment is held in escrow and released only when you confirm the job is complete." },
];

const providerSteps = [
  { icon: Users, title: "Create Your Profile", desc: "Sign up, complete CNIC verification, and list your skills and service areas." },
  { icon: Briefcase, title: "Browse Nearby Jobs", desc: "See job requests posted in your area with full details and customer budgets." },
  { icon: Banknote, title: "Place Your Bid", desc: "Submit competitive bids with your proposed price and estimated timeline." },
  { icon: Shield, title: "Complete & Earn", desc: "Deliver quality work, build your reputation, and withdraw earnings easily." },
];

const HowItWorksPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            How <span className="text-primary">onWork</span> Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for a service or offering one, onWork makes it simple, fair, and secure.
          </p>
        </div>
      </section>

      {/* Customer flow */}
      <section className="py-16 bg-card">
        <div className="container space-y-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground mb-3">For Customers</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Book a Service in 5 Steps</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {customerSteps.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider flow */}
      <section className="py-16 bg-secondary">
        <div className="container space-y-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-foreground text-card mb-3">For Providers</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Start Earning in 4 Steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {providerSteps.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-bold text-primary">Step {i + 1}</span>
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

export default HowItWorksPage;
