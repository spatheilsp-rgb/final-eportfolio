// Import Express
const express = require('express')

// Import validation checker
const { validationResult } = require('express-validator')

// Import the validation rules
const { contactValidationRules } = require('../utils/validators')

// Create router
const router = express.Router()

// Handle contact form submission
router.post('/', contactValidationRules, (req, res) => {
    const result = validationResult(req)

    // Return validation errors if any exist
    if (!result.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: result.array()
        })
    }

    // Get submitted data
    const { name, email, phone, message } = req.body

    // Return success response
    res.status(200).json({
        success: true,
        message: 'Message submitted successfully.',
        data: {
            name,
            email,
            phone,
            message
        }
    })
})

// Export router
module.exports = router