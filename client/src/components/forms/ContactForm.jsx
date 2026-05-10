// Import React state hook
import { useState } from 'react'

// Import shared API object
import api from '../../services/api'

// Import form styles
import '../../styles/form.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [statusMessage, setStatusMessage] = useState('')

    // Updating form values as the user types
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Sending the form to the backend
    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrors({})
        setStatusMessage('')

        try {
            const response = await api.post('/api/contact', formData)

            setStatusMessage(response.data.message)

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        } catch (error) {
            if (error.response?.data?.errors) {
                const formErrors = {}

                error.response.data.errors.forEach((item) => {
                    formErrors[item.path] = item.msg
                })

                setErrors(formErrors)
            } else {
                setStatusMessage('Something went wrong while sending the form.')
            }
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            <button type="submit" className="form-button">Submit</button>

            {statusMessage && <p className="form-status">{statusMessage}</p>}
        </form>
    )
}

export default ContactForm