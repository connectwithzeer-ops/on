import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center max-w-2xl">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">About onWork</h1>
          <p className="text-muted-foreground text-lg">Pakistan's first bidding-based service marketplace — empowering customers and providers alike.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Our Mission</h2>
            <p>At onWork, we believe everyone deserves fair pricing and quality service. Our platform connects customers with skilled service providers through a transparent bidding system — giving you the power to choose based on price, ratings, and reviews.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">How We're Different</h2>
            <p>Unlike traditional service platforms with fixed pricing, onWork lets multiple providers compete for your job. You post a task, receive bids, compare providers, and pick the best fit. It's fair for customers and rewarding for skilled providers.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Our Vision</h2>
            <p>We aim to become Pakistan's most trusted home services platform — expanding to every major city, creating thousands of jobs, and raising the standard of service delivery across the country.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Transparency</strong> — Fair bidding with no hidden charges</li>
              <li><strong className="text-foreground">Quality</strong> — Verified and rated service providers</li>
              <li><strong className="text-foreground">Empowerment</strong> — Giving providers the tools to grow their business</li>
              <li><strong className="text-foreground">Trust</strong> — Secure payments and satisfaction guarantees</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
