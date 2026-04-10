import { FileText, Inbox, Star, CheckCircle, Banknote } from "lucide-react";

const steps = [
  { icon: FileText, title: "Post karo", desc: "Apna kaam aur expected budget likho" },
  { icon: Inbox, title: "Bids aati hain", desc: "Multiple providers apni offer dete hain" },
  { icon: Star, title: "Compare karo", desc: "Rating, reviews aur price dekho" },
  { icon: CheckCircle, title: "Hire karo", desc: "Best provider select karo" },
  { icon: Banknote, title: "Pay karo", desc: "Kaam hone par payment karo" },
];

const HowItWorks = () => (
  <section className="py-20 bg-card">
    <div className="container text-center space-y-12">
      <div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Kaise Kaam Karta Hai?
        </h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">
          Sirf 5 simple steps mein apni service book karo
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
