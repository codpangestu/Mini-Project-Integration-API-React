import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    api
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        window.location.href = "/";
      })
      .catch(() => {
        alert("Login gagal");
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.41), rgba(4, 36, 90, 0.58)), url('/Image.png')",
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
          className="bg-blue border-t border-b border-l border-r border-zinc-700 backdrop-blur p-10 rounded-md w-full max-w-md text-white"
        >
          <h2 className="text-3xl font-bold mb-2">
            Enter your info to sign in
          </h2>

          <p className="text-gray-400 mb-6 text-sm">
            Or get started with a new account.
          </p>

          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full mb-4 px-4 py-3 rounded border border-zinc-700 focus:outline-none focus:border-white"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 rounded border border-zinc-700 focus:outline-none focus:border-white"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-900 hover:bg-blue-800 transition py-3 rounded font-semibold text-lg">
            Continue
          </button>

          <div className="mt-6 text-sm text-gray-400">
            <button type="button" className="hover:underline">
              Get Help
            </button>
          </div>

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

export default Login;
