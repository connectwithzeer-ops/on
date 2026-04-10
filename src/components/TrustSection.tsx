import { ShieldCheck, Star, MapPin, MessageCircle, Scale, Lock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "CNIC Verified Providers", desc: "Every provider's identity is verified" },
  { icon: Star, title: "Star Rating System", desc: "Choose the best based on real reviews and ratings" },
  { icon: MapPin, title: "Live Job Tracking", desc: "Track your provider's real-time location" },
  { icon: MessageCircle, title: "In-App Chat", desc: "Communicate without sharing personal numbers" },
  { icon: Scale, title: "Dispute Resolution", desc: "We help resolve any issues that arise" },
  { icon: Lock, title: "Secure Payment", desc: "Payment is released only when the job is complete" },
];

const TrustSection = () => (
  <section className="py-20 bg-card">
    <div className="container space-y-10">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Your Safety Is Our Responsibility
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-6 space-y-3 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
