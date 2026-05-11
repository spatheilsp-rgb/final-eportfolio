# Final Week 8 ePortfolio

## Live Links

- **Live Frontend:** `https://shahilkumar-eportfolio.netlify.app`
- **Live Backend API:** `https://shahilkumar-eportfolio.onrender.com`
- **GitHub Repository:** `https://github.com/spatheilsp-rgb/final-eportfolio`

---

## Project Overview

For this final project, I took the ePortfolio I had been building over the previous weeks and turned it into a fully deployed full-stack web application. The project combines a React frontend, an Express backend, MongoDB database integration, and an external NASA API feature into one complete site.

The main goal of this project was not just to make a portfolio page, but to build something that demonstrates how frontend, backend, database, and API integration all work together in one application. I also wanted the final version to feel cleaner, more interactive, and more professional than the earlier weekly versions.

---

## Project Goals

The main goals of this project were to:

- build a polished and responsive ePortfolio using React
- use Node.js and Express to serve backend content
- connect the project to MongoDB using environment variables
- deploy the full application so it is accessible from a public URL
- include API integration to show dynamic external content
- present my academic background, projects, skills, and contact information in a professional way

---

## Technologies Used

### Frontend
- React
- Vite
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB Atlas
- dotenv
- cors
- express-validator

### External API
- NASA Astronomy Picture of the Day (APOD) API

### Deployment
- Netlify for the frontend
- Render for the backend
- MongoDB Atlas for the cloud database

---

## Main Features

### 1. Multi-Page React Portfolio
Instead of keeping everything on one long page, I updated the project to use React Router so that each section has its own page:
- Home
- About
- Projects
- Resume
- Contact

The header and footer stay consistent across the site, while the main content changes depending on the selected route.

### 2. MongoDB-Driven Projects Section
The Projects page loads project data dynamically from MongoDB instead of using hardcoded cards. This means the frontend is connected to the backend API, and the backend is connected to the database through Mongoose.

### 3. NASA API Integration
The Projects page also includes a live NASA Astronomy Picture of the Day section. This was added to show API integration and to demonstrate how the frontend can consume real-time external data and display it in a polished format.

### 4. Interactive Project Cards
The project cards include more interactive behavior instead of being static. They support:
- show more / show less for descriptions
- show tools / hide tools
- a cleaner card layout with better visual styling

### 5. Resume and Skills Section
The Resume page presents:
- a professional summary
- education
- work experience
- grouped skill cards

This section was redesigned to look more structured and visually appealing than earlier versions.

### 6. Contact Page
The Contact page includes:
- email
- LinkedIn
- GitHub
- availability statement
- working backend-connected contact form

---

## Challenges Faced and How I Solved Them

One of the biggest parts of this final project was not just building the application, but getting all the pieces to work together in a real deployment environment. Since this project used a React frontend, an Express backend, MongoDB, and a live API feature, there were several issues that came up while moving from local development to production. Working through these problems helped me understand the difference between building something that works on my own machine and building something that is actually ready to be hosted and used publicly.

### 1. GitHub Setup and Repository Management

One of the first challenges came during the GitHub setup. Even though the project was already completed locally, pushing it to GitHub was not as simple as just uploading files. At first, Git would not allow me to commit because my username and email were not configured. After that, I also ran into issues with the remote repository link and branch setup. For example, I saw errors related to the `main` branch and the remote repository not being found.

I solved this by configuring Git with my name and email, making sure the first commit was created successfully, and then creating the correct repository on GitHub before connecting it as the remote origin. Once that was done, I was able to push the project normally. This part taught me that source control is not just about saving code, but about understanding how repositories, remotes, and branches are managed in a professional workflow.

### 2. Render Backend Deployment Challenges

The backend deployment on Render was one of the more technical parts of the project. The main problem was that the backend worked locally with MongoDB running on `localhost`, but Render could not connect to that local database because a deployed cloud service cannot access my personal computer. At first, this caused the backend deployment to fail.

To solve that, I moved from local MongoDB to MongoDB Atlas, which is a cloud-hosted database service. I created an Atlas cluster, generated a connection string, and updated the backend environment variable `MONGODB_URI` in Render. Another issue was that Atlas was initially blocking access because only my local IP address was allowed. I fixed this by updating the Atlas network access settings to allow connections from anywhere during deployment. Once that was done, Render could connect to the database successfully.

I also had to check that the backend was using `process.env.PORT` correctly and that the correct environment variables were added inside Render instead of relying on a local `.env` file. This helped me better understand how deployment environments handle configuration differently from local development.

### 3. Netlify Frontend Deployment Challenges

The frontend deployment on Netlify introduced a different type of problem. The site itself deployed successfully, but the projects section was not loading even though the backend was live. The main reason was that the frontend was still depending on the wrong backend address or outdated environment variable values at build time.

To fix this, I updated the frontend so that the API base URL came from `VITE_API_BASE_URL` instead of being hardcoded. Then I added the correct live Render backend URL inside Netlify’s environment variables and triggered a new deploy so the updated values would actually be used during the build. This step was important because Vite environment variables are injected when the project is built, not dynamically afterward.

I also had to verify that the NASA API key was set properly for the deployed frontend so that the live API content would continue to work after deployment.

### 4. Frontend and Backend Communication Issues

Another challenge happened after both services were deployed: the rest of the website loaded, but the project cards still did not appear. This turned out to be a communication issue between the frontend and backend. In particular, the `CLIENT_URL` value on Render had to match the exact Netlify site URL, and even small differences like a trailing slash could cause problems with CORS or cross-origin requests.

I fixed this by updating the allowed frontend URL in Render so it matched the deployed Netlify domain exactly, removing the trailing slash where necessary, and redeploying both services. After that, the frontend was finally able to fetch MongoDB project data from the deployed backend.

This issue helped me understand how sensitive deployment environments are to exact domain matching and why CORS configuration matters so much in full-stack applications.

### 5. File Paths and Static Asset Problems

I also ran into problems with images not loading correctly. Some project images were originally stored in the wrong folder, and the app was trying to load them using paths that only worked during development. This caused broken images even though the rest of the site looked fine.

I solved this by moving the images into the correct `public` folder in the client project and making sure the image paths stored in MongoDB matched what the deployed frontend could actually access. This was a good reminder that static assets must be organized carefully, especially when a project is deployed and no longer running only in a local environment.

### 6. UI and Structure Improvements

Beyond technical deployment issues, another challenge was making the site feel like a final portfolio instead of just a class project. Earlier versions had everything on one page, and some of the content sounded too generic. Based on feedback, I reorganized the frontend so the site used separate pages such as Home, About, Projects, Resume, and Contact while still keeping a shared header and footer. I also improved the wording throughout the site so it focused more on my strengths, technical background, and project value rather than just explaining what each page contained.

On the design side, I updated the card layout, added more interactive project behavior such as show more/show less, improved the resume presentation, and added a live NASA API section to make the projects page feel more dynamic and impressive.

### 7. What I Learned

This final project taught me that building a full-stack application is only part of the work. The other half is deployment, configuration, debugging, and presentation. I learned how to:
- push and manage a project using GitHub
- deploy a Node/Express backend with Render
- deploy a React/Vite frontend with Netlify
- connect a frontend and backend using environment variables
- configure MongoDB Atlas for cloud access
- debug CORS, API, and environment variable issues
- improve a project from a functional class assignment into a more polished and professional portfolio

Overall, the most valuable lesson was learning how all parts of a MERN-style application need to work together in a live environment. The final result was much more than just a website — it became a complete full-stack project that reflects both technical implementation and the troubleshooting process behind it.

## Folder Structure

```text
final-eportfolio/
├── README.md
├── .gitignore
├── .env.example
├── docs/
│   └── deployment-notes.md
├── screenshots/
├── scripts/
│   └── seed.cjs
├── client/
│   ├── public/
│   │   ├── assets/
│   │   │   └── headshot.jpeg
│   │   └── projects/
│   │       ├── project-1.png
│   │       ├── project-2.png
│   │       └── project-3.png
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── server/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── projectController.js
    ├── models/
    │   └── Project.js
    ├── routes/
    │   ├── projectRoutes.js
    │   └── contact.js
    ├── utils/
    │   └── validators.js
    ├── package.json
    └── server.js