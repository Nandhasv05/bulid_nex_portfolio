import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <h1 className="hero-title">
                    Building digital <br />
                    <span className="hero-highlight">masterpieces</span> for the <br />
                    web.
                </h1>
                <p className="hero-subtitle">
                    I'm a full-stack developer specializing in building exceptional digital experiences.
                    Currently focused on accessible, human-centered products.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Start a Project</a>
                    <a href="#projects" className="btn btn-outline">View Work</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
