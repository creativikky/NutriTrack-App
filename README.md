
# NutriTrack: Cloud-Backed Nutrition Tracker

NutriTrack is a minimalist nutrition tracking app built with HTML, JavaScript, and Firebase.
It supports login (Google & Email), real-time cloud storage via Firestore, and data export.

---

## 🔑 Features

- Firebase Authentication (Email & Google)
- Cloud storage of feeds & ingredients (Firestore)
- Dashboard with daily summaries and 7-day calorie chart
- CSV export of feed data
- Clean, mobile-friendly UI

---

## 📁 Project Structure

| File              | Purpose                               |
|-------------------|----------------------------------------|
| `login.html`      | Login/signup UI                        |
| `index.html`      | Dashboard (guarded by auth)            |
| `add_feed.html`   | Add feed entries                       |
| `add_item.html`   | Add/view/edit ingredients              |
| `view_today.html` | View today’s feeds (editable)          |
| `view_date.html`  | View feeds by date (editable)          |
| `export_feed.html`| Export feed data to CSV                |
| `firebase.js`     | Firebase config and initialization     |

---

## 🚀 Setup Instructions

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable **Firestore** and **Authentication**
3. Register a **Web App** and get the Firebase config
4. Paste config into `firebase.js`
5. Upload to GitHub Pages or Firebase Hosting

---

## 🧠 How It Works

- Each user is authenticated with Firebase Auth
- Their data is stored in Firestore under their UID
- Lookup table and feeds are synced in real-time

---

## ✏️ Customization Tips

- Add more nutritional fields in Firestore documents
- Modify chart or feed summaries in `index.html`
- Use Firebase rules for more security

---

## 🤝 License

Open source for personal or educational use. Contact author for commercial licensing.
