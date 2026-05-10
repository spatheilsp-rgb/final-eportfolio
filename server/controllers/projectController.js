// Importing the Project model
const Project = require('../models/Project')

// Geting all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 })

        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({
            message: 'Could not get projects.',
            error: error.message
        })
    }
}

// Getting one project by id
const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)

        if (!project) {
            return res.status(404).json({
                message: 'Project not found.'
            })
        }

        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({
            message: 'Could not get the project.',
            error: error.message
        })
    }
}

// Creating a new project
const createProject = async (req, res) => {
    try {
        const newProject = await Project.create(req.body)

        res.status(201).json({
            message: 'Project created successfully.',
            project: newProject
        })
    } catch (error) {
        res.status(400).json({
            message: 'Could not create the project.',
            error: error.message
        })
    }
}

// Updating a project
const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!updatedProject) {
            return res.status(404).json({
                message: 'Project not found.'
            })
        }

        res.status(200).json({
            message: 'Project updated successfully.',
            project: updatedProject
        })
    } catch (error) {
        res.status(400).json({
            message: 'Could not update the project.',
            error: error.message
        })
    }
}

// Deleting a project
const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id)

        if (!deletedProject) {
            return res.status(404).json({
                message: 'Project not found.'
            })
        }

        res.status(200).json({
            message: 'Project deleted successfully.'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Could not delete the project.',
            error: error.message
        })
    }
}

// Exporting all controller functions
module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}