// Importing mongoose to connect to MongoDB
const mongoose = require('mongoose')

// Function to connect the backend to MongoDB
const connectDB = async () => {
    try {
        // Read the MongoDB URI from the .env file
        await mongoose.connect(process.env.MONGODB_URI)

        console.log('MongoDB connected successfully.')
    } catch (error) {
        console.error('MongoDB connection failed:', error.message)

        // Stop the app if the database connection fails
        process.exit(1)
    }
}

// Export the function
module.exports = connectDB