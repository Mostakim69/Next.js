"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <section className="relative text-center rounded-3xl shadow-lg shadow-indigo-900/40 overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-[600px] w-full"
      >
        {/* Slide 1 */}
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full w-full flex flex-col justify-center items-center bg-[url('https://i.postimg.cc/Pq8BxVVD/1ce011cfd3b4140cbe8932c65d55157c.jpg')] bg-cover bg-center">
            <div className="bg-black/50 p-6 rounded-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Experience Pure Sound 🎧
              </h1>
              <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                Your Perfect Headphones Awaits!
              </p>
              <Link href="/services">
                <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition text-white font-medium shadow-xl shadow-pink-900/50">
                  Find more
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full w-full flex flex-col justify-center items-center bg-[url('https://i.postimg.cc/44HRzL3L/b155af78b8a4fe1a5361d8332e548296.jpg')] bg-cover bg-center">
            <div className="bg-black/50 p-6 rounded-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Next-Level Gaming 🎮
              </h1>
              <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                Discover PlayStation 5 Today!
              </p>
              <Link href="/services">
                <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition text-white font-medium shadow-xl shadow-blue-900/50">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-full w-full flex flex-col justify-center items-center bg-[url('https://i.postimg.cc/CMq9ZRv9/261c79c1a9df516623ebf22e8591472b.jpg')] bg-cover bg-center">
            <div className="bg-black/50 p-6 rounded-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Power Meets Elegance 💻
              </h1>
              <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                Apple MacBook Pro is Here for You!
              </p>
              <Link href="/contact">
                <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 transition text-white font-medium shadow-xl shadow-green-900/50">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
