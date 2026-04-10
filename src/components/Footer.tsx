import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground border-t border-border pt-14 pb-8">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="space-y-3">
          <span className="font-heading text-2xl font-bold text-card">
            on<span className="text-primary">Work</span>
          </span>
          <p className="text-card/60 text-sm">
            Your Work, Your Bid. Pakistan's first bidding-based service marketplace.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-card">Company</h4>
          {[
            { label: "About Us", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="block text-sm text-card/60 hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-card">Top Services</h4>
          {["Plumbing", "Electrician", "Cleaning", "Painting", "AC Services", "Carpentry", "Shifting", "Appliance Repair"].map((s) => (
            <span key={s} className="block text-sm text-card/60">{s}</span>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-card">Legal</h4>
          <Link to="/privacy" className="block text-sm text-card/60 hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="block text-sm text-card/60 hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>

      <div className="border-t border-card/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-card/40">
        <p>© 2026 onWork. All rights reserved.</p>
        <p>🇵🇰 Made in Pakistan</p>
      </div>
    </div>
  </footer>
);

export default Footer;
