import { Link, useNavigate } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../services/api";

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  const logout = () => {
    api.post("/logout").finally(() => {
      localStorage.removeItem("token");
      setIsAuth(false);
      navigate("/login");
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    navigate(`/movies?search=${keyword}`);
    setShowSearch(false);
    setKeyword("");
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#081C3A] to-[#0A2A52] px-8 py-4 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="text-white text-3xl font-extrabold">
        diStreaming
      </Link>

      {/* RIGHT */}
      <div className="relative z-50 flex items-center gap-4 relative">
        
        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/" className="hover:text-blue-300">
            Beranda
          </Link>
          <Link to="/movies" className="hover:text-blue-300">
            Movies
          </Link>
        </div>

        {/* SEARCH */}
        <form
          onSubmit={handleSearch}
          className="flex items-center border border-blue-400 px-5 py-2 rounded-full"
        >
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Cari film"
            className="
      bg-transparent
      outline-none
      text-sm
      text-white
      w-36
      md:w-48
    "
          />
          <button type="submit">
            <Search size={18} className="text-blue-400" />
          </button>
        </form>

        <button className="text-white hover:text-blue-300">
          <Bell size={20} />
        </button>

        {/* AUTH */}
        {!isAuth ? (
          <>
            <Link
              to="/register"
              className="border border-blue-400 text-blue-300 px-5 py-2 rounded-full hover:bg-blue-400 hover:text-black"
            >
              Register
            </Link>

            <Link
              to="/login"
              className="bg-blue-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-400 hover:text-black"
            >
              Sign in
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-blue-300 text-blue-900 px-6 py-2 rounded-full font-semibold"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
