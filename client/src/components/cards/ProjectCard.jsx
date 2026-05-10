// Interactive project card with expandable description and tool toggle
import { useState } from 'react'

function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false)
    const [showTools, setShowTools] = useState(true)

    const shortDescription =
        project.description.length > 170
            ? `${project.description.slice(0, 170)}...`
            : project.description

    return (
        <article className="project-card">
            <div className="project-image-wrap">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                />
            </div>

            <div className="project-card-content">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                    {expanded ? project.description : shortDescription}
                </p>

                <div className="project-button-row">
                    <button
                        className="project-action-button"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? 'Show Less' : 'Read More'}
                    </button>

                    <button
                        className="project-secondary-button"
                        onClick={() => setShowTools(!showTools)}
                    >
                        {showTools ? 'Hide Tools' : 'Show Tools'}
                    </button>
                </div>

                {showTools && project.tools && (
                    <ul className="project-tools">
                        {project.tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    )
}

export default ProjectCard