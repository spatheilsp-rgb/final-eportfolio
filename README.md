# ePortfolio Version 7 – MongoDB + Mongoose Integration

## Project Overview

This project is my Week 7 ePortfolio assignment for Web Programming. It builds on my previous Node.js and Express backend by connecting the backend to MongoDB using Mongoose. The main goal of this version is to make the **Projects** section load dynamically from a MongoDB collection instead of from a local JSON file. The assignment also requires using environment variables for the database connection, creating a Mongoose schema and model, implementing CRUD routes with Express, and integrating the React frontend with the backend so project data displays dynamically. :contentReference[oaicite:0]{index=0}

In my project, I kept the portfolio format from previous weeks, but I updated the backend to use MongoDB as the data source for projects. I also kept my contact form route from the previous version so the frontend still has a working contact section with validation. The main improvement in this version is that the portfolio is now closer to a real full-stack application instead of only serving static data.

---

## Assignment Goal

The purpose of this assignment was to connect the backend to MongoDB using Mongoose and make the frontend fetch project data from the database. According to the project instructions, the backend needed to connect to either a local MongoDB instance or Atlas, define a schema for project fields such as `title`, `category`, `tools`, `description`, and `image`, create CRUD routes, and then display at least three entries on the React frontend. The instructions also required removing sensitive database credentials from the submitted zipped project and including a README with screenshots or a short recording of the connected ePortfolio. :contentReference[oaicite:1]{index=1}

---

## Technologies Used

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- dotenv
- express-validator
- CORS

---

## Folder Structure

```text
eportfolio/
├── client/
│   ├── public/
│   │   ├── assets/
│   │   └── projects/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── projectController.js
│   ├── models/
│   │   └── Project.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── projectRoutes.js
│   ├── utils/
│   │   └── validators.js
│   ├── .env.example
│   ├── package.json
│   ├── seedProjects.js
│   └── server.js
│
├── .gitignore
└── README.md
## Screenshots
