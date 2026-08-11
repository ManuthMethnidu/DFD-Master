# 🌊 DFD Master - Interactive DFD Simulator

Welcome to **DFD Master**, an interactive Data Flow Diagram (DFD) simulator and learning tool designed specifically to help students master the Sri Lankan A/L ICT syllabus. 

This platform allows users to practice Context Diagrams, Level 1, and Level 2 DFDs through hands-on, dynamically scored scenarios.

**If you find this project helpful or use it for your studies/teaching, please consider giving it a ⭐ on GitHub!**

---

## ✨ Key Features

* **Interactive DFD Builder:** Drag-and-drop interface powered by React Flow to seamlessly construct complex diagrams (Entities, Processes, Data Stores, Data Flows).
* **Dynamic Scoring Engine:** Real-time evaluation of user-created diagrams against ideal solutions, complete with difficulty multipliers (Easy, Medium, Hard, Expert) and a hint penalty system.
* **Extensive Scenario Library:** Practice with over 900+ generated scenarios across diverse industries (Healthcare, Banking, E-commerce, etc.).
* **Global Leaderboards:** Firebase-powered real-time leaderboards with distinct tracking for Desktop and Mobile users.
* **User Authentication & Profiles:** Secure login via Google Auth, tracking user progress, total scores, and achievement badges.
* **Responsive Design:** Fully optimized for both desktop and mobile devices, featuring a distraction-free UI (hidden scrollbars, scalable canvas).

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your local machine:
* **Node.js** (v18.0 or higher)
* **npm** (v9.0 or higher)
* A **Firebase Account** (for authentication and database storage)

---

## 🔒 Security & Environment Variables

> **IMPORTANT:** This repository does NOT include API keys, database credentials, or secret tokens. All sensitive information is excluded via `.gitignore` to ensure security.

To run this project locally or deploy it to a service like Netlify, you must provide your own Firebase configuration using Environment Variables. 

1. Create a Firebase Project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** and **Google Authentication**.
3. For local development, create a file named `.env` in the root directory (this is ignored by Git):

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
VITE_FIREBASE_DATABASE_ID=(default)
```

**Netlify Deployment:**
When deploying to Netlify, go to **Site configuration → Environment variables** and add all the `VITE_FIREBASE_*` variables listed above so the build can resolve your credentials securely!

*(Note: The build engine uses Vite's `import.meta.glob` to optionally load a local `firebase-applet-config.json` if available, ensuring seamless local AI studio development without breaking CI/CD pipelines like Netlify).*

---

## 🚀 Installation & Setup

Follow these steps to set up the development environment:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dfd-master.git
   cd dfd-master
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify Configuration:**
   Ensure your `.env` file is present in the root directory as explained above.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

---

## 📜 Usage & Scripts

* `npm run dev`: Starts the local Vite development server.
* `npm run build`: Compiles the TypeScript code and builds the production-ready static assets to the `dist/` directory.
* `npm run lint`: Runs the TypeScript compiler to check for type errors.
* `npm run generate:scenarios`: Re-runs the automated scenario generation script to populate `src/generatedScenarios.ts`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/your-username/dfd-master/issues) if you want to contribute.

## ⭐️ Show your support

Give a ⭐️ if this project helped you learn Data Flow Diagrams or prepare for your A/L ICT exams!
