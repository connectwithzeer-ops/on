import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed R.",
    city: "Lahore",
    type: "Customer",
    text: "Mujhe plumber chahiye tha aur 10 minute mein 5 bids aa gayi. Best price mili aur kaam bhi zabardast hua!",
  },
  {
    name: "Usman K.",
    city: "Karachi",
    type: "Provider",
    text: "onWork se meri income double ho gayi hai. Rozana 3-4 jobs milti hain aur payment bhi time par aati hai.",
  },
  {
    name: "Fatima S.",
    city: "Islamabad",
    type: "Customer",
    text: "Office ki deep cleaning karwani thi. onWork par trusted aur verified cleaner mila. Highly recommended!",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-secondary">
    <div className="container space-y-10">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Hamare Users Kya Kehte Hain
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
