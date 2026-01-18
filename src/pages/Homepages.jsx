import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";


const Homepages = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get("http://127.0.0.1:8000/api/movies")
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.41), rgba(9, 67, 167, 0.33)), url('/Image.png')",
        }}
      >
        <div className="text-center text-white px-0 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Unlimited movies, TV <br className="hidden md:block" />
            shows, and more
          </h1>

          <p className="text-lg md:text-xl mb-2">
            Starts at IDR 54,000. Cancel anytime.
          </p>

          <p className="text-sm md:text-base text-gray-300 mb-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* INPUT + BUTTON */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 w-full sm:w-80 rounded bg-black/20 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button className="bg-blue-300 hover:bg-blue-200 text-black px-6 py-3 rounded font-semibold hover:scale-105 transition cursor-pointer">
            <Link to="/movies">
              Get Started →
            </Link>
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURE ================= */}
      <FAQSection />


      {/* ================= NEW MOVIES ================= */}
      <section className=" bg-gradient-to-b from-rgba(0, 0, 0, 0.41) to-blue-300 py-50 px-6">
        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-6xl font-extrabold mb-4 text-blue-900">
              See what’s new on <br />
              <span className="text-blue-900">diStreaming.</span>
            </h2>

            <p className="text-sm md:text-base text-gray-800 mb-6 max-w-md">
              Select your favorite streaming services to discover more, search
              faster, and get curated recommendations — all without
              subscription.
            </p>

            <Link to="/register">
            <button className="bg-[#081C3A] text-white px-6 py-3 rounded font-semibold hover:bg-gray-900 hover:scale-105 transition cursor-pointer">
              Register Now
            </button>
              </Link>
          </div>

          {/* RIGHT MOVIE GRID */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {movies.slice(0, 8).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        © 2026 diStreaming. All rights reserved.
      </footer>
    </>
  );
};

export default Homepages;
