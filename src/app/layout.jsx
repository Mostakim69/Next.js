import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopper",
  description: "Shopper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-center" />
        <NextAuthProvider>
          {/* Navbar */}
          <div className="sticky top-0 z-50 bg-[#1e3a8a]/80 backdrop-blur-lg border-b border-[#1e40af] shadow-md">
            <Navbar />
          </div>

          {/* Main container */}
          <div className="min-h-screen w-full bg-[#0a0e1a] relative overflow-hidden">
            {/* Background Layer */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "#0a0e1a",
                backgroundImage: `
                  radial-gradient(circle, rgba(59,130,246,0.2) 1.5px, transparent 1.5px)
                `,
                backgroundSize: "30px 30px",
                backgroundPosition: "0 0",
              }}
            />

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto min-h-[60vh] px-4 sm:px-6 lg:px-8 text-gray-100">
              {children}
            </div>

            {/* Footer */}
            <div className="bg-[#1e3a8a]/90 border-t border-[#1e40af]">
              <Footer />
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
