// Importing mongoose
const mongoose = require('mongoose')

// Creating the schema for a project
const projectSchema = new mongoose.Schema(
    {
        // Project title
        title: {
            type: String,
            required: [true, 'Title is required.'],
            trim: true,
            maxlength: [100, 'Title cannot be more than 100 characters.']
        },

        // Project category
        category: {
            type: String,
            required: [true, 'Category is required.'],
            trim: true,
            maxlength: [50, 'Category cannot be more than 50 characters.']
        },

        // Tools used in the project
        tools: {
            type: [String],
            required: [true, 'Please include at least one tool.'],
            validate: {
                validator: function (value) {
                    return value && value.length > 0
                },
                message: 'Please include at least one tool.'
            }
        },

        // Main description of the project
        description: {
            type: String,
            required: [true, 'Description is required.'],
            trim: true,
            maxlength: [500, 'Description cannot be more than 500 characters.']
        },

        // Image path for the React frontend
        image: {
            type: String,
            required: [true, 'Image path is required.'],
            trim: true
        }
    },
    {
        // Automatically store created and updated time
        timestamps: true
    }
)

// Export the model
module.exports = mongoose.model('Project', projectSchema)