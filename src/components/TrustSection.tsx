import { ShieldCheck, Star, MapPin, MessageCircle, Scale, Lock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "CNIC Verified Providers", desc: "Har provider ki identity verified hoti hai" },
  { icon: Star, title: "Star Rating System", desc: "Real reviews aur ratings se best choose karo" },
  { icon: MapPin, title: "Live Job Tracking", desc: "Provider ka real-time location dekho" },
  { icon: MessageCircle, title: "In-App Chat", desc: "Number share kiye bina baat karo" },
  { icon: Scale, title: "Dispute Resolution", desc: "Koi masla ho toh hum help karte hain" },
  { icon: Lock, title: "Secure Payment", desc: "Payment tab release hoti hai jab kaam ho jaaye" },
];

const TrustSection = () => (
  <section className="py-20 bg-card">
    <div className="container space-y-10">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Aapki Safety Humari Zimmedari
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
