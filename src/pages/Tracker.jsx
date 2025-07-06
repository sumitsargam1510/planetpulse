// src/pages/Tracker.jsx
function Tracker() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-50 to-white px-6 py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-6">📝 Carbon Footprint Tracker</h2>
      <p className="text-center text-gray-600 max-w-md mb-6">
        Log your activities like transport, diet, energy use and see your estimated CO₂ emissions.
      </p>
      {/* Add form/input fields here */}
    </div>
  );
}

export default Tracker;
