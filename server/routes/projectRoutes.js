// Importing Express
const express = require('express')

// Creating router
const router = express.Router()

// Import controller functions
const {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController')

// GET all projects
router.get('/', getProjects)

// GET one project
router.get('/:id', getProjectById)

// POST create project
router.post('/', createProject)

// PUT update project
router.put('/:id', updateProject)

// DELETE project
router.delete('/:id', deleteProject)

// Export the router
module.exports = router