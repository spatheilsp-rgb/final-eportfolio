// Load environment variables first
require('dotenv').config()

// Import packages
const express = require('express')
const cors = require('cors')

// Import the database connection function
const connectDB = require('./config/db')

// Import routes
const projectRoutes = require('./routes/projectRoutes')
const contactRoutes = require('./routes/contact')

// Create Express app
const app = express()

// Use the port from .env or default to 3001
const PORT = process.env.PORT || 3001

// Enable CORS so the frontend can access the backend
// Enable CORS so the frontend can access the backend
app.use(cors())

// Parse JSON request bodies
app.use(express.json())

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }))

// Basic test route
app.get('/', (req, res) => {
    res.send('Backend is running.')
})

// Projects route
app.use('/api/projects', projectRoutes)

// Contact route
app.use('/api/contact', contactRoutes)

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found.'
    })
})

// Start the app after MongoDB connects
const startServer = async () => {
    await connectDB()

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
}

startServer()