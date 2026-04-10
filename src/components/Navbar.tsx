import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Providers", href: "/providers" },
  { label: "Cities", href: "/cities" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-1">
          <span className="font-heading text-2xl font-bold text-foreground">
            on<span className="text-primary">Work</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="gap-2 font-medium rounded-full px-6">
            <Download className="w-4 h-4" />
            Download App
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Button className="w-full gap-2 rounded-full mt-2">
            <Download className="w-4 h-4" />
            Download App
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
