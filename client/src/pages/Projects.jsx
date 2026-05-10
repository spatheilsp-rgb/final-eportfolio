// Projects page that shows a live NASA feature first, then MongoDB project cards
import { useEffect, useState } from 'react'
import ProjectCard from '../components/cards/ProjectCard'
import { getProjects } from '../services/projectsService'

function Projects() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [nasaData, setNasaData] = useState(null)
    const [nasaLoading, setNasaLoading] = useState(true)
    const [nasaError, setNasaError] = useState('')
    const [showFullExplanation, setShowFullExplanation] = useState(false)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await getProjects()
                setProjects(data)
            } catch (err) {
                setError('Could not load project data from MongoDB.')
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    useEffect(() => {
        const loadNasaData = async () => {
            try {
                const apiKey = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY'

                const response = await fetch(
                    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
                )

                if (!response.ok) {
                    throw new Error('NASA request failed.')
                }

                const data = await response.json()
                setNasaData(data)
            } catch (err) {
                setNasaError('Could not load NASA API content.')
            } finally {
                setNasaLoading(false)
            }
        }

        loadNasaData()
    }, [])

    const shortExplanation =
        nasaData?.explanation && nasaData.explanation.length > 420
            ? `${nasaData.explanation.slice(0, 420)}...`
            : nasaData?.explanation

    return (
        <section id="projects" className="section-block">
            <div className="section-heading">
                <p className="eyebrow">Projects</p>
                <h2>Interactive Project Cards</h2>
                <p>
                    My work spans software systems, technical visualization,
                    database-backed applications, and live API integration.
                </p>
            </div>

            <div className="nasa-feature-card">
                <div className="nasa-feature-text">
                    <p className="project-category">NASA Live Content</p>
                    <h3>Astronomy Picture of the Day</h3>

                    {nasaLoading && <p>Loading NASA content...</p>}
                    {nasaError && <p>{nasaError}</p>}

                    {!nasaLoading && !nasaError && nasaData && (
                        <>
                            <h4 className="nasa-title">{nasaData.title}</h4>
                            <p className="nasa-date">{nasaData.date}</p>

                            {nasaData.copyright && (
                                <p className="nasa-credit">
                                    Credit: {nasaData.copyright}
                                </p>
                            )}

                            <p className="nasa-description">
                                {showFullExplanation
                                    ? nasaData.explanation
                                    : shortExplanation}
                            </p>

                            <div className="project-button-row">
                                {nasaData.explanation.length > 420 && (
                                    <button
                                        className="project-action-button"
                                        onClick={() =>
                                            setShowFullExplanation(!showFullExplanation)
                                        }
                                    >
                                        {showFullExplanation ? 'Show Less' : 'Read More'}
                                    </button>
                                )}

                                {nasaData.url && (
                                    <a
                                        href={nasaData.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mini-link-button"
                                    >
                                        View NASA Media
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {!nasaLoading && !nasaError && nasaData && nasaData.url && (
                    <div className="nasa-image-wrap">
                        {nasaData.media_type === 'image' ? (
                            <img
                                src={nasaData.url}
                                alt={nasaData.title}
                                className="nasa-image"
                            />
                        ) : (
                            <iframe
                                src={nasaData.url}
                                title={nasaData.title}
                                className="nasa-video"
                                allow="fullscreen"
                            />
                        )}
                    </div>
                )}
            </div>

            {loading && <p>Loading projects...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Projects