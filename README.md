# NutriTrack 🍏

**NutriTrack** is a minimalist nutrition tracking app built for simplicity, clean design, and cloud-connected convenience.  
Built with HTML + JavaScript and powered by Firebase, it tracks nutrition logs and ingredients across devices using Google or Email login.

---

## 🔑 Features

- 🔐 Firebase Authentication (Email + Google Sign-In)
- ☁️ Cloud storage via Firestore (per user)
- 🧾 Daily feed logging with quantity, protein, and calories
- 📅 View daily and past logs
- 📊 Dashboard with totals and charts
- 📤 CSV export
- 🪄 Clean, mobile-friendly UI

---

## 🚀 Live Demo

Once hosted on GitHub Pages, your app will be available at:  
```
https://yourusername.github.io/nutritrack/
```

---

## 📁 File Structure

| File               | Purpose                               |
|--------------------|----------------------------------------|
| `index.html`       | Main dashboard (auth protected)        |
| `login.html`       | Login/signup form                      |
| `add_item.html`    | Add/edit ingredients                   |
| `firebase.js`      | Firebase setup & initialization        |

---

## 🧩 Firebase Setup

1. Go to [firebase.google.com](https://firebase.google.com) → Create a Project
2. Enable:
   - Firestore Database
   - Authentication (Google + Email/Password)
3. Register a Web App → Copy your Firebase config
4. Paste config into the `<script>` block in your HTML pages

---

## 🌐 GitHub Pages Hosting Instructions

1. Unzip all files
2. Create a new GitHub repo (e.g. `nutritrack`)
3. Upload all files to the repo root
4. In repo: Settings → Pages → Source = `main` + root
5. GitHub will publish your app at  
   `https://yourusername.github.io/nutritrack/`

---

## 🧠 Credits

**NutriTrack** by *CreativikkyLabs*  
Designed for health-focused simplicity 🌿

---

## 📜 License

MIT License (open for personal or educational use).  
Contact for commercial licensing or branding options.

