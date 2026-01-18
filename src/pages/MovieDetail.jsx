import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/movies/${id}`)
      .then((res) => setMovie(res.data.data));
  }, [id]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  if (!movie) return null;

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[95vh] bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,.35), #0f171e 80%),
            url(${movie.thumbnail})
          `,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          {/* POSTER */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-101">
              <img src={movie.thumbnail} alt={movie.title} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition cursor-pointer">
                <button className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl hover:bg-blue-900 cursor-pointer">
                  ▶
                </button>
              </div>
            </div>

            {!isAuth ? (
              <Link to="/login">
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-900 cursor-pointer">
                  Masuk untuk nonton
                </button>
              </Link>
            ) : (
              <button
                className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold cursor-pointer"
                onClick={() => alert("Mulai nonton 🎬")}
              >
                Watch
              </button>
            )}
          </div>

          {/* INFO */}
          <div className="md:col-span-2 space-y-5">
            <h1 className="text-3xl md:text-5xl font-extrabold uppercase">
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>{movie.release_year}</span>
              <span>{movie.category?.name}</span>
              <span className="border px-2 rounded">16+</span>
              <span>⭐ {movie.rating}</span>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-3xl">
              {movie.description}
            </p>

            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-900 px-6 py-3 rounded font-semibold cursor-pointer">
                ▶ Watch Trailer
              </button>
              <button className="bg-white/10 px-4 py-3 rounded">＋</button>
              <button className="bg-white/10 px-4 py-3 rounded">👍</button>
              <button className="bg-white/10 px-4 py-3 rounded">🔗</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS + TRAILER ================= */}
      <section className="bg-[#0f171e] px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* DETAILS */}
          <div className="text-gray-300 text-sm space-y-3">
            <p>
              <span className="text-gray-400">Genre:</span>{" "}
              {movie.category?.name}
            </p>
            <p>
              <span className="text-gray-400">Release Year:</span>{" "}
              {movie.release_year}
            </p>
            <p>
              <span className="text-gray-400">Rating:</span> {movie.rating}
            </p>
          </div>

          {/* TRAILER */}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0f171e] text-gray-500 text-center py-6 text-sm">
        © 2026 diStreaming. All rights reserved.
      </footer>
    </>
  );
};

export default MovieDetail;
