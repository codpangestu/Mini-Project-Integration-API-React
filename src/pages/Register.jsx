import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    api
      .post("/register", {
        name,
        email,
        password,
      })
      .then(() => {
        window.location.href = "/login";
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Register gagal");
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.95)), url('/Image.png')",
      }}
    >
      {/* LOGO */}
      <div className="px-10 py-6">
        <Link to="/" className="text-white text-3xl font-extrabold">
          diStreaming
        </Link>
      </div>

      {/* FORM */}
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={submit}
          className="bg-black/70 backdrop-blur p-10 rounded-md w-full max-w-md text-white"
        >
          <h2 className="text-3xl font-bold mb-2">Create your account</h2>

          <p className="text-gray-400 mb-6 text-sm">
            Start exploring movies and trailers for free.
          </p>

          <input
            type="text"
            placeholder="Full name"
            className="w-full mb-4 px-4 py-3 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 px-4 py-3 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 hover:bg-blue-500 transition py-3 rounded font-semibold text-lg">
            Register
          </button>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </p>

          <p className="mt-6 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              Learn more
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
