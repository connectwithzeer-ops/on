const stats = [
  { value: "100+", label: "Services Available" },
  { value: "20+", label: "Cities in Pakistan" },
  { value: "50,000+", label: "Verified Providers" },
  { value: "4.8/5", label: "App Store Rating" },
];

const StatsBar = () => (
  <section className="bg-foreground py-10">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((s) => (
        <div key={s.label} className="space-y-1 animate-count-up">
          <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
            {s.value}
          </p>
          <p className="text-sm text-card/70">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
