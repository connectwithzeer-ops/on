import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0300 1510222",
    href: "tel:03001510222",
    action: "Call Now",
  },
  {
    icon: Mail,
    label: "Email",
    value: "saqibayaz1122@gmail.com",
    href: "mailto:saqibayaz1122@gmail.com",
    action: "Send Email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0300 1510222",
    href: "https://wa.me/923001510222",
    action: "Chat on WhatsApp",
  },
];

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center max-w-2xl">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions or need help? Reach out to us anytime — we're here for you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container grid sm:grid-cols-3 gap-8 max-w-4xl">
          {contactInfo.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "WhatsApp" ? "_blank" : undefined}
              rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{c.label}</h3>
              <p className="text-muted-foreground text-sm mb-4 break-all">{c.value}</p>
              <Button variant="outline" className="rounded-full text-sm">
                {c.action}
              </Button>
            </a>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
