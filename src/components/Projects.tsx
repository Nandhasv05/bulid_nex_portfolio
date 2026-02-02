import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Finance Dashboard",
            description: "Real-time analytics dashboard for a fintech startup.",
            tags: ["UI/UX", "Dashboard", "Fintech"],
            image: "finance-dashboard", // CSS class for placeholder
            link: "#"
        },
        {
            title: "E-Commerce Platform Redesign",
            description: "A complete overhaul of a fashion retailer's online store.",
            tags: ["React", "Node.js", "E-commerce"],
            image: "ecommerce-platform", // CSS class for placeholder
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="flex-header">
                    <div>
                        <h2 className="section-title text-left">Featured Work</h2>
                        <p className="section-subtitle text-left m-0">A selection of my recent projects.</p>
                    </div>
                    <a href="#" className="view-all-link">View All Projects &rarr;</a>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className={`project-image ${project.image}`}></div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a href={project.link} className="project-link">Read Case Study ↗</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
