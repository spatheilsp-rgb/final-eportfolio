// Resume page showing summary, education, experience, and grouped skills
import resumeData from '../data/resume.json'

function Resume() {
    return (
        <section id="resume" className="section-block">
            <div className="section-heading">
                <p className="eyebrow">Resume</p>
                <h2>Background, Experience, and Skills</h2>
            </div>

            <div className="resume-hero-panel">
                <div className="resume-summary-content">
                    <p className="resume-summary-label">Professional Summary</p>
                    <p className="resume-summary-text">{resumeData.professionalSummary}</p>
                </div>
            </div>

            <div className="resume-main-grid">
                <div className="resume-column-card">
                    <h3>Education</h3>

                    {resumeData.education.map((item, index) => (
                        <div key={index} className="resume-block">
                            <p className="resume-title">{item.school}</p>
                            <p className="resume-text">{item.degree}</p>
                        </div>
                    ))}
                </div>

                <div className="resume-column-card">
                    <h3>Professional Experience</h3>

                    {resumeData.experience.map((item, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-top-line">
                                <p className="resume-title">
                                    {item.title} <span className="resume-company">— {item.company}</span>
                                </p>
                                <p className="resume-dates">{item.dates}</p>
                            </div>

                            <p className="resume-text">{item.summary}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="resume-skills-section">
                <h3 className="skills-section-title">Core Skills</h3>

                <div className="skills-grid">
                    {resumeData.skillGroups.map((group, index) => (
                        <div key={index} className="skill-group-card">
                            <h4>{group.category}</h4>

                            <ul className="skill-pill-list">
                                {group.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Resume