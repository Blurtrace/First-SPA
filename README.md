# 🏠 Clan Micaela — SPA with Vanilla JavaScript

A **Single Page Application (SPA)** built with pure JavaScript, Vite, Tailwind CSS and SweetAlert2. Includes an authentication system, character CRUD consuming a REST API with Axios, and dynamic navigation without browser reload.

---

## 📸 Views

| Login / Register | Home (Characters) | Contact Us |
|---|---|---|
| Authentication with validations | Cards with API data | Contact form |

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Vite** | Bundler and dev server |
| **Tailwind CSS** | Utility-first styling |
| **SweetAlert2** | Modals and alerts |
| **Axios** | REST API consumption |
| **json-server** | Fake REST API for development |
| **LocalStorage** | Session and user persistence |

---

## 📁 Project Structure

```
📦 clan-micaela
├── 📄 index.html
├── 📄 db.json           ← json-server database
├── 📁 src
│   ├── 📄 main.js       ← Main SPA logic
│   └── 📄 style.css     ← Global styles + Tailwind
└── 📄 package.json
```

---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/clan-micaela.git
cd clan-micaela

# 2. Install dependencies
npm install

# 3. Install json-server globally (if you don't have it)
npm install -g json-server
```

---

## ▶️ Running the Project

You need **two terminals** open at the same time:

**Terminal 1 — Dev server:**
```bash
npm run dev
```

**Terminal 2 — API with json-server:**
```bash
npx json-server --watch db.json --port 3001
```

Then open your browser at `http://localhost:5173`

---

## 🌐 What is a SPA?

A **Single Page Application** loads the HTML only once and dynamically updates the content with JavaScript, without reloading the browser.

```
Traditional page          SPA (this project)
────────────────          ──────────────────
Login   → reloads   →     navigate('login')
Home    → reloads   →     navigate('home')
Contact → reloads   →     navigate('contact')
```

The central function that makes this possible is `navigate(view)` in `main.js`.

---

## 📡 API Endpoints

With `json-server` running on port `3001`:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/characters` | Get all characters |
| `POST` | `/characters` | Create a character |
| `PUT` | `/characters/:id` | Update a character |
| `DELETE` | `/characters/:id` | Delete a character |

> If `json-server` is not running, the app automatically falls back to local data.

---

## 🔐 Authentication

- Users are stored in `localStorage` under the key `"users"`
- On successful login, the session is saved under `"loggedUser"`
- On logout, `"loggedUser"` is removed and the user is redirected to login
- **No** `alert()` or `prompt()` used — all messages are shown with HTML/CSS or SweetAlert2

---

## 📦 Available Scripts

```bash
npm run dev      # Development server (Vite)
npm run build    # Production build
npm run preview  # Preview the build
```

---

## 👤 Author

Developed by **Clan Micaela** as an educational project to learn SPAs, API consumption, and DOM manipulation with vanilla JavaScript.
