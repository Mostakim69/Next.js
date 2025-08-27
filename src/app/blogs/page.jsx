import Link from "next/link";
import { format } from "date-fns";

// Mock blog posts (replace later with DB/API fetch)
const mockPosts = [
  {
    id: "1",
    title: "Why Shopper Blog is Your Ultimate Shopping Guide",
    excerpt:
      "Discover how Shopper Blog helps you make smarter shopping decisions with expert tips and reviews...",
    author: "Md Mostakim Hosen",
    date: "2025-08-19",
    cover: "https://i.ibb.co/5MvmD2g/88.jpg",
    slug: "ultimate-shopping-guide",
  },
  {
    id: "2",
    title: "Top 5 Reasons to Follow Shopper Blog",
    excerpt:
      "From product reviews to exclusive deals, here’s why Shopper Blog should be your daily stop...",
    author: "Md Mostakim Hosen",
    date: "2025-08-18",
    cover: "https://i.ibb.co/wh7t3N3/555.jpg",
    slug: "reasons-to-follow-shopper-blog",
  },
  {
    id: "3",
    title: "How Shopper Blog Simplifies Online Shopping",
    excerpt:
      "Get clear guidance, comparisons, and the latest trends all in one place to make shopping stress-free...",
    author: "Md Atikur Rahman",
    date: "2025-08-17",
    cover: "https://i.ibb.co/KzCG8qr/8888.jpg",
    slug: "simplifies-online-shopping",
  },
  {
    id: "4",
    title: "Latest Shopping Trends Covered by Shopper Blog",
    excerpt:
      "Stay updated with the newest fashion, gadgets, and lifestyle tips through Shopper Blog...",
    author: "Md Sabbir Hossain",
    date: "2025-08-16",
    cover: "https://i.ibb.co/T2cpBd5/888.jpg",
    slug: "latest-shopping-trends",
  },
  {
    id: "5",
    title: "Why Product Reviews Matter on Shopper Blog",
    excerpt:
      "Learn how detailed product reviews on Shopper Blog save your money and time...",
    author: "Md Mahmudul Hasan",
    date: "2025-08-15",
    cover: "https://i.ibb.co/wh7t3N3/555.jpg",
    slug: "product-reviews-matter",
  },
  {
    id: "6",
    title: "Exclusive Deals and Offers on Shopper Blog",
    excerpt:
      "Find discounts, coupons, and special offers to make your shopping more affordable...",
    author: "Md Fahim Hasan",
    date: "2025-08-15",
    cover: "https://i.ibb.co/wh7t3N3/555.jpg",
    slug: "exclusive-deals-offers",
  },

  {
  id: "7",
  title: "Beginner’s Guide to Using Shopper Blog",
  excerpt:
    "New to Shopper Blog? Here’s how you can explore reviews, trends, and deals effectively...",
  author: "Md Rakibul Islam",
  date: "2025-08-14",
  cover: "https://i.ibb.co/5MvmD2g/88.jpg",
  slug: "beginners-guide-shopper-blog",
},
{
  id: "8",
  title: "How Shopper Blog Builds Smart Shopping Habits",
  excerpt:
    "Discover how regular readers of Shopper Blog save money and shop more wisely every day...",
  author: "Md Tanvir Ahmed",
  date: "2025-08-13",
  cover: "https://i.ibb.co/KzCG8qr/8888.jpg",
  slug: "smart-shopping-habits",
},


];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:px-6 lg:px-8  py-12 relative">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Shopper Blog
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Shopper Blog is a reliable hub for online shopping enthusiasts. It offers detailed product reviews, the latest fashion and technology trends, and helpful guides for choosing the right products online. Through the blog, readers can easily find information about discounts, offers, and coupons, making their shopping more cost-effective. The product comparison feature also helps buyers make smarter decisions. Since the articles are written in simple and clear language, anyone can easily understand them. Overall, Shopper Blog makes online shopping smarter, easier, and more enjoyable.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid gap-8  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-purple-600/50 transition"
          >
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-300">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-400 text-sm">{post.excerpt}</p>
              <div className="mt-4 flex justify-between items-center text-gray-400 text-xs">
                <span>{post.author}</span>
                <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
              </div>
              <Link href={`/blogs/${post.slug}`}>
                <button className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition text-white text-sm shadow-md shadow-pink-900/40">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-purple-300 mb-4">
          Stay Updated with Shopper
        </h2>
        <p className="text-gray-400 mb-6">
          Subscribe to our newsletter and never miss an update on car
          maintenance, tips, and new services.
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-l-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none w-60"
          />
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-r-xl font-semibold text-white shadow-md transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
