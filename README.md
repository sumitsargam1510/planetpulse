# 🌿 PlanetPulse: Your Eco-Companion

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Made With React](https://img.shields.io/badge/Made%20With-React-blue)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-brightgreen)](https://spring.io/projects/spring-boot)
[![Climatiq API](https://img.shields.io/badge/API-Climatiq-lightgrey)](https://www.climatiq.io/)
[![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red)](https://github.com/sumitsargam1510/planetpulse)

PlanetPulse is a full-stack web application that empowers users to **track and reduce their carbon footprint** by logging everyday activities like driving, flying, and electricity usage. It combines a modern **React** frontend with a robust **Spring Boot** backend, using the **Climatiq API** to deliver real-time carbon emission data.

---

## 🌐 Live Demo

🚧 Coming Soon...

---

## 🧩 Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Frontend    | React, Tailwind CSS, React Router    |
| Backend     | Spring Boot (Java), REST APIs (In Progress)       |
| API         | Climatiq Carbon Emissions API        |
| Auth        | JWT (Planned)                        |
| Database    | PostgreSQL / MySQL (Planned)         |
| Versioning  | Git & GitHub                         |

---

## 🚀 Features

- 🌍 Log activities like Driving, Flights, and Electricity usage
- ⚡ Real-time CO₂ emission calculation using **Climatiq API**
- 📊 Dynamic background & motivational messages
- 📅 Date-wise tracking of activities
- 👤 User Authentication (Sign Up / Sign In)
- 🔒 Profile & historical data (Coming Soon)
- 🔔 Motivational alerts based on CO₂ levels

---

## 🛠️ Getting Started

### ⚙️ Frontend (React)

```bash
# Clone the repo
git clone https://github.com/your-username/planetpulse.git
cd planetpulse

# Install dependencies
npm install

# Create an .env file
touch .env

# Add this to your `.env` file
VITE_CLIMATIQ_API_KEY=your_actual_climatiq_key

# Start the frontend
npm run dev

```


### ⚙️ Backend (Spring Boot)
```bash
# Navigate to backend directory
cd backend

# Build and run the Spring Boot application
./mvnw spring-boot:run

# In src/main/resources/application.properties

server.port=8080

# Climatiq API Key
climatiq.api.key=your_actual_climatiq_key
```

📂 Project Structure
```bash
planetpulse/
├── frontend/
│   ├── public/
│   ├── src/
│   └── .env
└── backend/
    ├── src/
    │   └── main/java/com/planetpulse/
    └── resources/
        └── application.properties
```
### 🤝 Contributors
| Name         | Role                            |
| ------------ | ------------------------------- |
| Sumit Sargam | Frontend Developer/ Backend Developer            |
| Samriddhi Srivastava  | Backend Developer (Spring Boot) |


### 📌 Roadmap
```bash
 Basic activity tracking UI

 Climatiq API integration

 Frontend Authentication UI

 Backend Authentication (JWT)

 User carbon data storage

 History dashboard with charts

 Leaderboard / Gamification features.

```

### 🌱 Inspired by
Projects that promote climate awareness, carbon tracking, and sustainability.
Every step you track helps the planet breathe easier. 💚
