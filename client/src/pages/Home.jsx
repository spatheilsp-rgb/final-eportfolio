// Home page that gives a stronger professional overview instead of repeating the hero section
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className="section-block">
            <div className="section-heading">
                <p className="eyebrow">Overview</p>
                <h2>Building Practical Systems with Full-Stack Thinking</h2>
                <p>
                    My work combines software development, backend logic,
                    database integration, technical visualization, and
                    problem-solving across both academic and professional
                    environments.
                </p>
            </div>

            <div className="home-overview-grid">
                <article className="overview-card">
                    <h3>Software and Application Development</h3>
                    <p>
                        I enjoy designing structured applications that solve
                        real workflow problems, especially systems that require
                        strong logic, clear organization, and reliable data handling.
                    </p>
                    <Link to="/projects" className="mini-link-button">
                        View Projects
                    </Link>
                </article>

                <article className="overview-card">
                    <h3>Backend and Database Integration</h3>
                    <p>
                        My recent work has focused on connecting React frontends
                        with Express backends and MongoDB databases, turning
                        static interfaces into live, data-driven applications.
                    </p>
                    <Link to="/resume" className="mini-link-button">
                        View Resume
                    </Link>
                </article>

                <article className="overview-card">
                    <h3>Systems, Data, and Technical Problem-Solving</h3>
                    <p>
                        My background also includes network engineering, data
                        reporting, analytics, and technical support, which has
                        helped me think beyond code and focus on complete solutions.
                    </p>
                    <Link to="/contact" className="mini-link-button">
                        Contact Me
                    </Link>
                </article>
            </div>

            <div className="home-highlight-strip">
                <div className="highlight-box">
                    <span className="highlight-number">Java</span>
                    <span className="highlight-label">Desktop and structured application work</span>
                </div>

                <div className="highlight-box">
                    <span className="highlight-number">MERN</span>
                    <span className="highlight-label">React, Express, MongoDB integration</span>
                </div>

                <div className="highlight-box">
                    <span className="highlight-number">Systems</span>
                    <span className="highlight-label">Software, networking, analytics, and support</span>
                </div>
            </div>
        </section>
    )
}

export default Home