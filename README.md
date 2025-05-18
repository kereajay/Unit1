# 🎓 Student Feedback System

A full-stack web application for collecting and managing course feedback from students. Built using **React** for the frontend and **Node.js + Express** for the backend with full **JWT authentication** and role-based access control.

---

## 🚀 Features

- 👨‍🎓 Student & 👩‍💼 Admin login/signup
- 🏠 Home page with role-based UI
- 📝 Submit Feedback (Students only)
- 📋 View All Feedbacks (Admins only)
- 🔐 Protected routes and access based on user roles
- 📦 Context API for global user state
- 🔔 Toast notifications with `react-toastify`

---

## 📁 Pages & Components

| Page           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `Login`        | Users (Student/Admin) can log in using credentials                          |
| `Signup`       | New users can register based on their role                                  |
| `Home`         | Welcomes the logged-in user; shows UI based on their role                   |
| `FeedbackForm` | Allows students to submit feedback with fields like Rating and Comments     |
| `AllFeedbacks` | Admin-only page showing all submitted feedback                              |

---

## 🧰 Frontend Tech Stack

- ⚛️ **React** `^19.1.0`
- 🌐 **react-router-dom** `^7.6.0` — for routing
- 🎉 **react-toastify** `^11.0.5` — for toast notifications

- 🧠 **Context API** — for managing user state globally

---

## 🛠️ Backend Tech Stack

- 🚀 **Node.js** & **Express** `^5.1.0`
- 🔒 **JWT** — for authentication and role-based authorization
- 🔐 **bcrypt** `^6.0.0` — for password hashing
- 🍪 **cookie-parser** `^1.4.7` — to manage cookies
- 🌍 **cors** `^2.8.5` — to enable cross-origin requests
- 🔄 **nodemon** `^3.1.10` — for live reloading in development
- 🧪 **validator** `^13.15.0` — to validate inputs
- 🌱 **mongoose** `^8.15.0` — for MongoDB connection
- 🧾 **dotenv** `^16.5.0` — to manage environment variables
- 🧵 **express-async-handler** `^1.2.0` — to simplify async error handling

---

## 🔗 API Endpoints

### 🧑‍🎓 Student Routes

- `POST` ➡️ `/unit1/api/v1/student/signup` – Register a new student/admin  
- `POST` ➡️ `/unit1/api/v1/student/login` – Log in with credentials  
- `GET`  ➡️ `/unit1/api/v1/student/logout` – Log out user  
- `GET`  ➡️ `/unit1/api/v1/student/Userdetails` – Get currently logged-in user info  

### 📝 Feedback Routes

- `POST` ➡️ `/unit1/api/v1/AddFeedback` – Add new feedback (student only)  
- `GET`  ➡️ `/unit1/api/v1/GetAllFeedback` – Get all feedbacks (admin only)  
- `GET`  ➡️ `/unit1/api/v1/GetAFeedback/:id` – Get single feedback by ID  
- `DELETE` ➡️ `/unit1/api/v1/DeleteAFeedback/:id` – Delete a feedback (admin only)  

🔐 All routes are protected using **JWT** stored in **HTTP-only cookies** and checked with middleware for role-based access.

---
## 🧪 Authentication & Authorization
- 🔐 JWT tokens are used for login sessions

- 🧾 Cookies store authentication tokens securely

- 🛡️ Middleware protects routes based on roles (Student/Admin)


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
