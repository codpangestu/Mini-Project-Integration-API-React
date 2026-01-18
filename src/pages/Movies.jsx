import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const getMovies = () => {
    setLoading(true);

    let url = "/movies";
    if (search) {
      url += `?search=${search}`;
    }

    api
      .get(url)
      .then((res) => {
        setMovies(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, [search]);

  const featured = movies[0]; // HERO MOVIE

  return (
    <>
      <Navbar />

      {/* ================= HERO PRIME STYLE ================= */}
      {featured && (
        <section
          className="relative h-[70vh] bg-cover bg-center flex items-end"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,.95), rgba(0,0,0,.4), rgba(0,0,0,.95)),
              url(${featured.thumbnail})
            `,
          }}
        >
          <div className="p-10 max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
              {featured.title}
            </h1>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {featured.description}
            </p>

            <div className="flex gap-3">
              <Link
                to={`/movies/${featured.id}`}
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded font-semibold"
              >
                Watch now
              </Link>

              <button className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded text-white">
                +
              </button>

              <Link
                to={`/movies/${featured.id}`}
                className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded text-white"
              >
                ℹ
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ================= TRENDING ================= */}
      <section className="bg-[#0f171e] px-6 py-10">
        <h2 className="text-white text-xl font-semibold mb-4">
          {search ? `Search result for "${search}"` : "Trending Movies"}
        </h2>

        {loading ? (
          <p className="text-gray-400">Loading movies...</p>
        ) : movies.length === 0 ? (
          <p className="text-gray-400">Movie not found</p>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {movies.map((item) => (
              <div key={item.id} className="min-w-[160px]">
                <Card
                  id={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= ALL MOVIES GRID ================= */}
      <section className="bg-[#0b0f14] px-4 md:px-8 pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-semibold">
            All Movies
          </h2>
          <span className="text-gray-400 text-sm">
            Total: {movies.length}
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            2xl:grid-cols-8
            gap-4
          "
        >
          {movies.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              rating={item.rating}
            />
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0f171e] text-gray-500 text-center py-6 text-sm">
        © 2026 diStreaming. All rights reserved.
      </footer>
    </>
  );
};

export default Movies;
