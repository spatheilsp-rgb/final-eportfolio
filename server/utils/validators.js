// Importing to check from express-validator
const { check } = require('express-validator')

// Validation rules for the contact form
const contactValidationRules = [
    check('name')
        .trim()
        .escape()
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters.'),

    check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Please enter a valid email address.'),

    check('phone')
        .optional({ checkFalsy: true })
        .trim()
        .escape()
        .isLength({ min: 7, max: 20 })
        .withMessage('Phone number must be between 7 and 20 characters.'),

    check('message')
        .trim()
        .escape()
        .isLength({ min: 10, max: 500 })
        .withMessage('Message must be between 10 and 500 characters.')
]

// Export the rules
module.exports = { contactValidationRules }