// Load environment variables
require('dotenv').config({ path: './server/.env' })

// Import the DB connection function
const connectDB = require('../server/config/db')

// Import the Project model
const Project = require('../server/models/Project')

// Sample data for the database
const sampleProjects = [
    {
        title: 'University Enrollment Management System',
        category: 'Java Desktop Application',
        tools: ['Java', 'JavaFX', 'MySQL', 'MVC'],
        description: 'A desktop-based academic management system designed to organize departments, courses, sections, students, and enrollment workflows in one structured application. This project helped me strengthen my understanding of Java application design, database integration, user interaction, and how real academic data can be managed through a cleaner software structure.',
        image: '/projects/project-1.png'
    },
    {
        title: 'RISC-V Pipeline Simulator',
        category: 'Computer Architecture',
        tools: ['Python', 'RISC-V', 'Simulation'],
        description: 'A Python-based simulator created to show how instructions move through pipeline stages and how processor execution can be visualized step by step. This project helped me connect architecture concepts such as instruction flow and staged execution with actual software behavior in a more practical and understandable way.',
        image: '/projects/project-2.png'
    },
    {
        title: 'Analytics and Operations Reporting',
        category: 'Data Analytics',
        tools: ['Excel', 'KNIME', 'Reporting'],
        description: 'A reporting-focused project centered on organizing data, building visuals, and presenting findings clearly for decision-making. The goal of this work was not only to analyze information, but also to communicate results in a way that was useful, practical, and easier for others to understand and act on.',
        image: '/projects/project-3.png'
    }
]

// Seed the database
const seedProjects = async () => {
    try {
        await connectDB()

        // Remove old project entries
        await Project.deleteMany()

        // Insert sample projects
        await Project.insertMany(sampleProjects)

        console.log('Sample projects inserted successfully.')
        process.exit(0)
    } catch (error) {
        console.error('Seeding failed:', error.message)
        process.exit(1)
    }
}

seedProjects()