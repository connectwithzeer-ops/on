import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed R.",
    city: "Lahore",
    type: "Customer",
    text: "I needed a plumber and got 5 bids within 10 minutes. Got the best price and the work was excellent!",
  },
  {
    name: "Usman K.",
    city: "Karachi",
    type: "Provider",
    text: "My income has doubled since joining onWork. I get 3-4 jobs daily and payments are always on time.",
  },
  {
    name: "Fatima S.",
    city: "Islamabad",
    type: "Customer",
    text: "Needed deep cleaning for my office. Found a trusted and verified cleaner on onWork. Highly recommended!",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-secondary">
    <div className="container space-y-10">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          What Our Users Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-card rounded-xl border border-border p-6 space-y-4"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">"{r.text}"</p>
            <div>
              <p className="font-semibold text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">
                {r.city} • {r.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
