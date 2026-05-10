// Importing contact data
import contactData from '../data/contact.json'

// Importing contact form
import ContactForm from '../components/forms/ContactForm'

function Contact() {
    return (
        <section id="contact" className="section-block">
            <div className="section-heading">
                <p className="eyebrow">Contact</p>
                <h2>Let’s Connect</h2>
                <p>
                    This section includes my professional contact details and a
                    working form connected to the Express backend.
                </p>
            </div>

            <div className="contact-card">
                <div className="content-card contact-info-card">
                    <h3>{contactData.heading}</h3>

                    <p><strong>Location:</strong> {contactData.location}</p>
                    <p><strong>Email:</strong> {contactData.email}</p>

                    <p>
                        <strong>LinkedIn:</strong>{' '}
                        <a
                            href={contactData.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactData.linkedinLabel}
                        </a>
                    </p>

                    <p>
                        <strong>GitHub:</strong>{' '}
                        <a
                            href={contactData.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactData.githubLabel}
                        </a>
                    </p>

                    <div className="availability-block">
                        <h3>Availability</h3>
                        <p>{contactData.availability}</p>
                    </div>
                </div>

                <div className="content-card">
                    <h3>Send a Message</h3>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact