# 🎓 CourseMaster — Online Learning Platform

A modern, responsive online learning platform built with **React and Vite**, designed to make online education accessible, interactive, and user-friendly.

CourseMaster provides a learning environment where students can explore courses, manage their learning activities, and access educational content through a clean interface. It also includes administrative features for managing platform content and users.

🔗 **Live Demo:** [CourseMaster Frontend](https://course-master-front-end-ten.vercel.app/)  
🔗 **Backend API:** [CourseMaster Backend](https://course-master-backend-nu.vercel.app/)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## 🚀 Overview

CourseMaster is a frontend application for an online learning platform. It uses a component-based architecture to organize pages, layouts, routes, and reusable UI elements.

The application communicates with a separate backend API to retrieve and manage platform data.

The project focuses on:

- Responsive user interfaces
- Student and administrator experiences
- Course discovery and course details
- Protected routes and authentication
- Reusable React components
- Optimized production builds

---

## ✨ Features

### 👨‍🎓 Student Experience

- Browse available courses
- View course details
- Access the student dashboard
- Access course learning pages
- Navigate through course-related content
- Access assignments and other learning activities where supported by the backend

### 🛠️ Admin Dashboard

- Admin dashboard and overview
- Manage courses
- Create and edit courses
- Manage users
- View enrollments
- Manage assignments
- View analytics
- Manage video classes

### 🔐 Authentication & Routing

- Login and registration pages
- Protected routes for authorized users
- Role-based access through route protection
- React Router navigation
- Custom 404 Not Found page

### 🎨 User Interface

- Responsive layouts
- Reusable UI components
- Theme support
- Loading indicators for lazy-loaded pages
- CourseMaster-branded loading screen

### ⚡ Performance

- Vite-powered development and production builds
- Lazy loading for dashboard and administrative pages
- Code splitting for improved loading performance
- Axios-based API communication

---

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| React Router DOM | Client-side routing |
| Redux | State management |
| Axios | HTTP requests and API integration |
| Tailwind CSS | Styling |
| DaisyUI | UI styling components |
| Lucide React | Icons |
| Vercel | Frontend deployment |

**Backend:** Node.js, Express.js, MongoDB, and Mongoose are used by the separate CourseMaster backend.

---

## 📁 Project Structure

```text
courseMaster_Frontend/
├── public/
├── src/
│   ├── components/
│   │   └── common/
│   │       └── PageLoader.jsx
│   ├── contexts/
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home/
│   │   ├── Courses/
│   │   ├── CousrseDetails/
│   │   ├── CoursePlayer/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── student/
│   │   ├── admin/
│   │   └── NotFound/
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   ├── services/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
├── vercel.json
└── README.md
```

*Note: The structure above is a guide based on the current project context. Adjust it if your actual folders differ.*

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_FRONTEND_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd courseMaster_Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://course-master-backend-nu.vercel.app/api
```

For local backend development, use:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Make sure the environment variable name matches the one used in your Axios configuration.

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display the local development URL in your terminal, usually:

```text
http://localhost:5173
```

### 5. Build for Production

```bash
npm run build
```

The optimized production files will be generated in the `dist/` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Base URL of the CourseMaster backend API |

Example:

```env
VITE_API_BASE_URL=https://course-master-backend-nu.vercel.app/api
```

**Important:** Never put passwords, database credentials, JWT secrets, or other private backend secrets in frontend environment variables. Vite exposes variables prefixed with `VITE_` to the client-side application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run linting, if configured in `package.json` |

---

## 🌐 Deployment

The frontend is deployed on Vercel.

**Live application:**  
https://course-master-front-end-ten.vercel.app/

### Deploy with Vercel

1. Push the frontend code to GitHub.
2. Import the repository into Vercel.
3. Select Vite as the framework if it is not detected automatically.
4. Configure the production environment variable:

   ```env
   VITE_API_BASE_URL=https://course-master-backend-nu.vercel.app/api
   ```

5. Confirm the build settings:

   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

6. Deploy the project.

For client-side routing, ensure the Vercel rewrite configuration serves `index.html` for frontend routes.

### Backend Configuration

The backend must allow requests from the deployed frontend origin through its CORS configuration:

```text
https://course-master-front-end-ten.vercel.app
```

---

## 🛣️ Future Improvements

- Improve accessibility and keyboard navigation
- Add more comprehensive loading and error states
- Improve automated testing
- Enhance course search and filtering
- Continue improving responsive design and performance

---

## 👨‍💻 Author

**Mahidi Hasan Supon**

- GitHub: [@mahidi-hasan-supon](https://github.com/Mahidi-Hasan-Supon)

---

## 📄 License

No license has been specified yet. Add a `LICENSE` file if you intend to publish the project under an open-source license.

---

⭐ If you find this project interesting, consider starring the repository!
