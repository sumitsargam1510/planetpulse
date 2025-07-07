import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// 💡 Mock Data (replace with real user data later)
const mockEntries = [
  { type: "Driving", co2: 120 },
  { type: "Electricity", co2: 80 },
  { type: "Flights", co2: 150 },
];

const COLORS = ["#34d399", "#60a5fa", "#f87171"]; // green, blue, red

export default function ProfilePage() {
  const [index, setIndex] = useState(0);

  const bgImages = [
    {
      url: "https://images.unsplash.com/photo-1600787953307-4b5d9027a06b?auto=format&fit=crop&w=1470&q=80",
      quote: "Progress over perfection 🌿",
    },
    {
      url: "https://images.unsplash.com/photo-1609838463542-0f1aa0f15c54?auto=format&fit=crop&w=1470&q=80",
      quote: "Small steps lead to big change 🌍",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const totalCO2 = mockEntries.reduce((sum, e) => sum + e.co2, 0).toFixed(2);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* 🔁 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${bgImages[index].url})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 🧾 Profile Card */}
      <div className="relative z-10 bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg rounded-xl max-w-4xl w-full p-6 sm:p-10 mx-4 animate-fade-in-up text-white">
        {/* 🌱 Quote */}
        <p className="italic text-green-900 bg-white/40 px-4 py-2 rounded mb-6 shadow-sm backdrop-blur-sm text-center drop-shadow">
          {bgImages[index].quote}
        </p>

        {/* 🌍 Heading */}
        <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-6 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          🌿 Your Carbon Report
        </h1>

        {/* 📊 Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Stats */}
          <div>
            <div className="text-lg font-semibold mb-4">Summary</div>
            <ul className="space-y-2">
              {mockEntries.map(({ type, co2 }, i) => (
                <li
                  key={type}
                  className="flex justify-between bg-white/30 text-black px-4 py-2 rounded shadow-sm backdrop-blur-sm"
                >
                  <span>{type}</span>
                  <span className="font-semibold text-green-800">{co2} kg CO₂</span>
                </li>
              ))}
              <li className="flex justify-between px-4 py-2 border-t border-white/50 pt-2 text-white">
                <span>Total</span>
                <span className="font-bold">{totalCO2} kg CO₂</span>
              </li>
            </ul>
          </div>

          {/* Right: Pie Chart */}
          <div className="h-60 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockEntries}
                  dataKey="co2"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                >
                  {mockEntries.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ✅ Motivation */}
        <div className="mt-8 bg-green-100 text-green-800 font-semibold text-center py-3 rounded-lg drop-shadow">
          ✅ Keep it up! You’re on the right track toward a greener lifestyle!
        </div>
      </div>
    </div>
  );
}
