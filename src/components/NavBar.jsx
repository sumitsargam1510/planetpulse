import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">🌍 PlanetPulse</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tracker" className="hover:underline">Tracker</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </div>
    </nav>
  );
}

export default NavBar;
