import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white relative z-10">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & description + social icons */}
        <div>
          <h1 className="text-2xl font-bold mb-3">Shooper</h1>
          <p className="text-gray-400 mb-4">
            Discover top products, great deals, and personalized recommendations all in one place
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/Mostakim69" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.facebook.com/MostakimHosennnn" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/posterboy3369/#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://x.com/mostakim14467" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.youtube.com/@PosterBoy3369" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h6 className="font-semibold mb-3">Company</h6>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/my-bookings">My Bookings</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="font-semibold mb-3">Stay Updated</h6>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <form className="flex max-w-xs">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500 transition-colors"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
        © 2025 Shopper BD. All rights reserved. <Link href="/">Privacy</Link> | <Link href="/">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
