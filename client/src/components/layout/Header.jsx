// Shared site header and navigation shown on every page
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="hero-card">
            <div className="hero-content">
                <div className="hero-text-area">
                    <p className="eyebrow">Final MERN ePortfolio</p>

                    <h1>Shahilkumar Patel</h1>

                    <p className="hero-text">
                        Computer Information Systems graduate student at Florida Tech with
                        experience in software development, backend systems, network
                        engineering, data reporting, and database-driven applications.
                    </p>

                    <p className="hero-subtext">
                        I enjoy building practical systems that are structured, reliable,
                        and useful, from Java desktop applications and technical simulators
                        to full-stack web solutions powered by Express and MongoDB.
                    </p>

                    <nav className="hero-nav">
                        <NavLink to="/" className="nav-button">Home</NavLink>
                        <NavLink to="/about" className="nav-button">About</NavLink>
                        <NavLink to="/projects" className="nav-button">Projects</NavLink>
                        <NavLink to="/resume" className="nav-button">Resume</NavLink>
                        <NavLink to="/contact" className="nav-button">Contact</NavLink>
                    </nav>
                </div>

                <div className="hero-image-wrap">
                    <img
                        src="/assets/headshot.jpeg"
                        alt="Shahilkumar Patel"
                        className="hero-headshot"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header