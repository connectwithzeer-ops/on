import heroRepair from "@/assets/hero-repair.png";
import heroCleaning from "@/assets/hero-cleaning.png";
import heroConstruction from "@/assets/hero-construction.png";

const types = [
  {
    label: "Customer",
    tagColor: "bg-primary text-primary-foreground",
    features: ["Post request", "Set budget", "Compare bids", "Live tracking", "Secure pay"],
    img: heroCleaning,
  },
  {
    label: "Service Provider",
    tagColor: "bg-foreground text-card",
    features: ["CNIC verified", "Nearby jobs", "Bid karo", "Earn karo", "Withdraw easily"],
    img: heroRepair,
  },
  {
    label: "Business / Admin",
    tagColor: "bg-primary/80 text-primary-foreground",
    features: ["Manage users", "Verify providers", "Handle disputes", "Analytics", "Notifications"],
    img: heroConstruction,
  },
];

const UserTypes = () => (
  <section className="py-20 bg-card">
    <div className="container space-y-10">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Teen Tarah ke Users, Ek Platform
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {types.map((t) => (
          <div key={t.label} className="rounded-xl border border-border overflow-hidden bg-card hover:shadow-lg transition-shadow">
            <img src={t.img} alt={t.label} className="w-full h-48 object-cover bg-secondary" loading="lazy" />
            <div className="p-6 space-y-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${t.tagColor}`}>
                {t.label}
              </span>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UserTypes;
