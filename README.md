# Wedding Event Planner 💍✨

A full-stack luxury **Wedding Event Planner** web application designed to help couples and planners easily manage RSVPs, budget tracking, milestone checklists, and vendor contracts.

---

## 📁 Project Folder Structure

```
Wedding-Event-Planner-/
├── backend/                  # Node.js & Express REST API
│   ├── config/
│   │   └── db.js             # Mongoose MongoDB connection & fallback
│   ├── controllers/          # Business logic handlers
│   │   ├── budgetController.js
│   │   ├── eventController.js
│   │   ├── guestController.js
│   │   ├── taskController.js
│   │   └── vendorController.js
│   ├── middleware/
│   │   └── errorHandler.js   # Centralized error handler
│   ├── models/               # MongoDB Mongoose schemas
│   │   ├── Budget.js
│   │   ├── Event.js
│   │   ├── Guest.js
│   │   ├── Task.js
│   │   └── Vendor.js
│   ├── routes/               # Express API endpoints
│   │   ├── budgetRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── guestRoutes.js
│   │   ├── taskRoutes.js
│   │   └── vendorRoutes.js
│   ├── .env.example          # Environment variables template
│   ├── package.json          # Backend dependencies
│   └── server.js             # Express server entrypoint
│
├── frontend/                 # React SPA (powered by Vite)
│   ├── src/
│   │   ├── components/       # Modular UI components
│   │   │   ├── BudgetTracker.jsx
│   │   │   ├── DashboardOverview.jsx
│   │   │   ├── GuestListManager.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskChecklist.jsx
│   │   │   └── VendorDirectory.jsx
│   │   ├── context/
│   │   │   └── PlannerContext.jsx # Global state & API sync
│   │   ├── App.jsx           # Main App layout
│   │   ├── index.css         # Glassmorphic Luxury Design System
│   │   └── main.jsx          # React DOM entry point
│   ├── index.html            # Web entry with Google Fonts
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
└── README.md
```

---

## 🚀 How to Run the Application

### 1. Start the Backend API

```bash
cd backend
npm start
```
> Runs on `http://localhost:5001`. Connects to MongoDB if available, or gracefully falls back to local memory mode.

### 2. Start the Frontend React App

```bash
cd frontend
npm run dev
```
> Open `http://localhost:5173` in your browser.

---

## ✨ Key Features

- **Countdown Hero Header**: Real-time days, hours, minutes, and seconds countdown to the wedding date.
- **Guest List & RSVP Manager**: Search, filter by RSVP status (*Attending*, *Pending*, *Declined*), plus-one tracking, table assignments, and meal preferences.
- **Budget & Expense Tracker**: Track budget goals, estimated quotes vs. actual costs, and paid amounts.
- **Milestone Checklist**: Task organization with category filters (*Venue*, *Catering*, *Music*, *Decor*), priorities (*High*, *Medium*, *Low*), and due dates.
- **Vendor Directory**: Manage photographer, florist, DJ, and caterer contacts, price quotes, and booking statuses.
