# 🔀 DFD Simulator - A/L ICT Practice Platform

An interactive, web-based educational tool designed to help students master Data Flow Diagrams (DFDs) for the Sri Lankan A/L ICT syllabus. This platform provides a rich visual canvas to practice, evaluate, and perfect Context Diagrams, Level 1, and Level 2 DFDs.

If you find this project helpful for your studies or teaching, please consider dropping a ⭐ on GitHub!

## 🚀 What This Site Offers
This simulator bridges the gap between theoretical knowledge and practical application. Instead of drawing on paper, students can drag-and-drop entities, processes, and data stores onto an interactive canvas, route data flows, and instantly evaluate their architecture against ideal solutions. 

## ✨ Key Features
- **Interactive Canvas Engine:** Built with React Flow for seamless drag-and-drop node manipulation and custom straight-line, stepped data flow routing.
- **Massive Question Bank:** Access exactly 1,000 DFD scenarios, including hand-crafted past paper questions and procedurally generated challenges.
- **Intelligent Filtering & Pagination:** Browse scenarios by Level (Context, Level 1, Level 2), Category, and Difficulty (Easy to Expert) with 50-item pagination.
- **Real-Time Evaluation Engine:** Automatically compares your drawn DFD against the ideal architectural solution and provides an accuracy score.
- **Auto-Layout:** Instantly organizes messy diagrams into a clean, linear sequence with a single click.
- **Built-in Cheat Sheet:** Quick access to standard DFD syllabus rules and notation guidelines.

## 🛠️ Prerequisites
- **Node.js**: Version 18.0 or higher.
- **Package Manager**: `npm` (v9+) or `yarn`.
- **Core Frameworks**: React 18, Vite, React Flow, Tailwind CSS.

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/dfd-simulator.git
   cd dfd-simulator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🔑 Environment Variables
By default, the core application runs entirely client-side and does not require complex environment variables.

If you are utilizing the optional Firebase integration (for leaderboard or persistent user score tracking), create a `.env` file in the root directory based on `.env.example`:
```env
# .env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## 💻 Usage

**Start the development server:**
```bash
npm run dev
```
This will spin up a local server (bound to `http://localhost:3000`).

**Build for production:**
```bash
npm run build
```
This compiles the React/TypeScript code into optimized static assets in the `dist` folder.
