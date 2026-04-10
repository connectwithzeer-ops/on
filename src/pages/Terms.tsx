import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center max-w-2xl">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-lg">Last updated: April 10, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the onWork platform, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Platform Description</h2>
            <p>onWork is a bidding-based marketplace that connects customers with service providers. We facilitate the connection but are not a party to the service agreement between customers and providers.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
            <p>You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. Users must be at least 18 years old.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Bidding & Payments</h2>
            <p>Service providers submit bids on customer requests. Customers are free to accept or reject any bid. Payments are processed through the platform. onWork charges a service fee on completed transactions.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Prohibited Conduct</h2>
            <p>Users may not misuse the platform, post fraudulent requests, harass other users, circumvent the bidding system, or engage in any illegal activity. Violations may result in account suspension or termination.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p>onWork is not liable for the quality, safety, or legality of services provided by third-party providers. We do not guarantee the accuracy of bids or the outcome of any service engagement.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of the platform after changes constitutes acceptance of the revised terms.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:saqibayaz1122@gmail.com" className="text-primary hover:underline">saqibayaz1122@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Terms;
