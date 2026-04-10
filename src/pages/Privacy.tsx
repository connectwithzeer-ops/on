import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center max-w-2xl">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">Last updated: April 10, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide when creating an account, posting a service request, or contacting us — including your name, email address, phone number, and location. We also collect usage data such as device information, IP address, and browsing behavior within the app.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>Your information is used to operate and improve the onWork platform, match you with service providers, process payments, send notifications, and provide customer support. We may also use anonymized data for analytics and marketing purposes.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
            <p>We do not sell your personal data. We may share your information with service providers you engage with, payment processors, and legal authorities when required by law. Third-party services we use are bound by their own privacy policies.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at saqibayaz1122@gmail.com. You can also opt out of marketing communications.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Contact</h2>
            <p>For privacy-related inquiries, please contact us at <a href="mailto:saqibayaz1122@gmail.com" className="text-primary hover:underline">saqibayaz1122@gmail.com</a> or call <a href="tel:03001510222" className="text-primary hover:underline">0300 1510222</a>.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Privacy;
