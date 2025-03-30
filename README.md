# 🌦 Weather Dashboard

## 📌 Overview
The **Weather Dashboard** is a React-based web application that provides real-time weather updates for any city. The app fetches data from the **OpenWeatherMap API** and displays current weather conditions, a 5-day forecast, and additional details such as temperature, wind speed, and weather conditions.

## 🚀 Features
- **Search for any city** to get live weather updates
- **5-day forecast** displayed in a single row
- **Dark/Light theme toggle** for better user experience
- **Background image changes** dynamically based on theme
- **Responsive design** for seamless usage on all devices
- **Smooth animations** using Framer Motion
- **Deployed on GitHub Pages** for easy access

## 🖼️ Screenshots
![Weather Dashboard Preview](./screenshots/weather-dashboard.png)

## 🔧 Technologies Used
- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **API**: OpenWeatherMap API
- **Deployment**: GitHub Pages

## 📦 Installation
To run the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-github-username/weather-dashboard.git
   ```

2. **Navigate to the project folder:**
   ```sh
   cd weather-dashboard
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

## 🌐 Deployment on GitHub Pages
To deploy the app on **GitHub Pages**, run:
```sh
npm run deploy
```
Your app will be live at:
```
https://NamanPrakash99.github.io/weather-dashboard
```

## 🔑 API Key Setup
This project requires an **OpenWeatherMap API key**. Get one from [OpenWeatherMap](https://openweathermap.org/api) and add it to your `.env` file:
```env
VITE_API_KEY=your_openweather_api_key
```

## 🤝 Contributing
Feel free to contribute to this project! Fork the repo, make changes, and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---
### 🔗 Connect with Me
[GitHub](https://github.com/NamanPrakash99) | [LinkedIn](https://linkedin.com/in/naman2580/)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
