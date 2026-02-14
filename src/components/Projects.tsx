import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProjects } from '../store/slices/projectsSlice';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
    const projects = useSelector(selectProjects);
    const [activeCategory, setActiveCategory] = useState('All');
    const { ref, isVisible } = useScrollReveal(0.1);

    const categories = ['All', 'Website', 'Web Application', 'Mobile Application'];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.tags.includes(activeCategory));

    return (
        <section id="projects" className="projects" ref={ref}>
            <div className="container">
                <div className={`projects-header text-center reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`}>
                    <span className="section-tag">Portfolio</span>
                    <h2 className="gradient-text section-title">Selected Works</h2>
                </div>

                <div className={`filter-tabs reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card glass-card reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`}
                            style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.tags[0]}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    Explore Project
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
