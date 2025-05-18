# 🎓 Student Feedback System

A full-stack web application for collecting and managing course feedback from students. Built using **React** for the frontend and integrates with a backend API for storing and retrieving feedback.

---

## 🚀 Features

- 👨‍🎓 Student & 👩‍💼 Admin login/signup
- 🏠 Home page with user-based UI
- 📝 Submit Feedback (Students only)
- 📋 View All Feedbacks (Admins only)
- 🔐 Protected routes based on user roles
- 📦 Context API for global user state
- 🌐 API integration using `axios`
- 🔔 Toast notifications with `react-toastify`

---

## 📁 Pages & Components

| Page           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `Login`        | Users (Student/Admin) can login using credentials                          |
| `Signup`       | New users can register based on their role                                 |
| `Home`         | Welcomes the logged-in user; shows buttons based on their role             |
| `FeedbackForm` | Allows students to submit feedback with fields like Rating and Comments    |
| `AllFeedbacks` | Admin-only page showing all submitted feedback                             |

---

## 🧰 Tech Stack

- ⚛️ **React** `^19.1.0`
- 🌐 **react-router-dom** `^7.6.0` — for routing
- 🎉 **react-toastify** `^11.0.5` — for toasts & alerts
- 🧠 **Context API** — for global user management (login state, role, etc.)

---

## 🔐 User Roles
### 🧑‍🎓 Student
- Can Sign Up / Log In

- Submit Feedback

- Can view only limited options

### 👨‍💼 Admin
- Can Sign Up / Log In

- View all feedback submissions

- Access to admin-specific pages


---

#### 👨‍💻 Developed by [Ajay](https://portfolio-sandy-iota-37.vercel.app/)
