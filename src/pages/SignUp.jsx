import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const bgImages = [
  {
    url: "https://images.unsplash.com/photo-1544829099-3fb6469f5b39?auto=format&fit=crop&w=1470&q=80",
    quote: "Join PlanetPulse. Track your footprint. 🌍",
  },
  {
    url: "https://images.unsplash.com/photo-1528834342050-2c52b427b60e?auto=format&fit=crop&w=1470&q=80",
    quote: "Sign up to build a greener tomorrow.",
  },
];

export default function SignUp() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* 🔁 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${bgImages[index].url})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 🧾 SignUp Card */}
      <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-xl border border-white/40 shadow-lg max-w-md w-full p-8 sm:p-10 mx-4 animate-fade-in-up">
        <p className="italic text-center text-green-900 bg-white/40 px-4 py-2 rounded mb-6 shadow-sm backdrop-blur-sm">
          {bgImages[index].quote}
        </p>

      <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-6 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
  Create Your Account 🌱
</h2>


        <form className="space-y-5">
          <div>
            <label className="block text-white/90 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-blue-300 bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-white/90 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-blue-300 bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-white/90 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border border-blue-300 bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-white/80">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-300 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
