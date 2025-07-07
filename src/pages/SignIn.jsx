import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const bgImages = [
  {
    url: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80",
    quote: "Every step counts. Start your green journey.",
  },
  {
    url: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1470&q=80",
    quote: "Sign in and track your carbon footprint 🌿",
  },
];

export default function SignIn() {
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

      {/* 🧾 SignIn Card */}
      <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-xl border border-white/40 shadow-lg max-w-md w-full p-8 sm:p-10 mx-4 animate-fade-in-up">
        <p className="italic text-center text-green-900 bg-white/40 px-4 py-2 rounded mb-6 shadow-sm backdrop-blur-sm">
          {bgImages[index].quote}
        </p>

      <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-6 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
  Welcome Back 🌎
</h2>



        <form className="space-y-5">
          <div>
            <label className="block text-white/90 font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-blue-300 bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-white/90 font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border border-blue-300 bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-white/80">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-300 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
