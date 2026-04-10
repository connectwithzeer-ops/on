import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays } from "lucide-react";

const posts = [
  { title: "onWork Launches in Karachi — Here's What You Need to Know", date: "April 5, 2026", excerpt: "We're thrilled to announce that onWork is now live in Karachi! Homeowners can post tasks and receive competitive bids from verified local providers." },
  { title: "5 Tips to Get the Best Bids on Your Home Service Jobs", date: "March 28, 2026", excerpt: "Want to attract quality providers and get the best price? Follow these simple tips when posting your next service request on onWork." },
  { title: "Why Bidding-Based Pricing Is Fairer for Everyone", date: "March 15, 2026", excerpt: "Fixed pricing often leaves customers overpaying and providers underearning. Learn how onWork's bidding model creates a win-win for both sides." },
  { title: "How onWork Verifies Service Providers", date: "March 1, 2026", excerpt: "Trust is everything. Here's a behind-the-scenes look at our verification process — from ID checks to skill assessments and background screening." },
  { title: "Expanding to Lahore & Islamabad — Coming Soon!", date: "February 20, 2026", excerpt: "After a successful launch in Karachi, we're gearing up to bring onWork to Lahore and Islamabad. Stay tuned for updates!" },
];

const Blog = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center max-w-2xl">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg">News, tips, and updates from the onWork team.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-8">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <CalendarDays className="w-3.5 h-3.5" />
                {post.date}
              </div>
              <h2 className="font-heading text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-sm">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Blog;
