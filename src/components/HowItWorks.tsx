import { FileText, Inbox, Star, CheckCircle, Banknote } from "lucide-react";

const steps = [
  { icon: FileText, title: "Post Your Job", desc: "Describe your task and set your expected budget" },
  { icon: Inbox, title: "Receive Bids", desc: "Multiple providers send you their offers" },
  { icon: Star, title: "Compare", desc: "Check ratings, reviews and pricing" },
  { icon: CheckCircle, title: "Hire", desc: "Select the best provider for your job" },
  { icon: Banknote, title: "Pay Securely", desc: "Pay only after the work is done" },
];

const HowItWorks = () => (
  <section className="py-20 bg-card">
    <div className="container text-center space-y-12">
      <div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          How It Works
        </h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">
          Book your service in just 5 simple steps
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-3 group">
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
);

export default HowItWorks;
