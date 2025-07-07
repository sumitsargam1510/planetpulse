import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/20 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* 🔗 Logo */}
         <Link
  to="/"
  className="text-2xl font-bold flex items-center space-x-1 group transition duration-300"
>
  <span className="transition duration-300 group-hover:text-green-500 text-blue-500">
    Planet
  </span>
  <span className="transition duration-300 group-hover:text-blue-500 text-green-500">
    Pulse
  </span>
</Link>


          {/* 🔗 Nav Links */}
          <div className="flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline transition duration-300 ${
                  isActive
                    ? "text-blue-500 underline"
                    : "text-green-300 hover:text-blue-300"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tracker"
              className={({ isActive }) =>
                `hover:underline transition duration-300 ${
                  isActive
                    ? "text-blue-500 underline"
                    : "text-green-300 hover:text-blue-300"
                }`
              }
            >
              Tracker
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:underline transition duration-300 ${
                  isActive
                    ? "text-blue-500 underline"
                    : "text-green-300 hover:text-blue-300"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `hover:underline transition duration-300 ${
                  isActive
                    ? "text-blue-500 underline"
                    : "text-green-300 hover:text-blue-300"
                }`
              }
            >
              Profile
            </NavLink>

            {/* 🌿 Auth Buttons */}
            <Link
              to="/signin"
              className="px-4 py-2 rounded bg-green-400 text-white hover:bg-blue-400 transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded bg-green-400 text-white hover:bg-blue-400 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
