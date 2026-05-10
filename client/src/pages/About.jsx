// Import about data
import aboutData from '../data/about.json'

function About() {
    return (
        <section id="about" className="section-block">
            <div className="section-heading">
                <p className="eyebrow">About</p>
                <h2>{aboutData.heading}</h2>
            </div>

            <div className="content-card about-card">
                {aboutData.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </section>
    )
}

export default About