import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <div className={`about-header text-center reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`}>
                    <span className="section-tag">About My Journey</span>
                    <h2 className="gradient-text section-title">Engineering Digital Excellence</h2>
                </div>

                <div className="about-grid-v2">
                    <div className={`about-main-card glass-card reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <div className="card-content">
                            <h3>The Digital Architect</h3>
                            <p className="about-text">
                                I bridge the gap between complex business requirements and elegant technical solutions.
                                With a deep focus on scalability and user-centric design, I help brands and startups
                                transform their visions into high-performance digital realities.
                            </p>
                            <p className="about-text">
                                Whether it's a complex enterprise platform or a sleek consumer app,
                                I build with precision and purpose, ensuring every line of code
                                adds value to the end-user experience.
                            </p>
                        </div>
                    </div>

                    <div className="stats-container-v2">
                        <div className={`stat-card glass-card reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`} style={{ transitionDelay: '0.3s' }}>
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Years of Mastery</span>
                        </div>
                        <div className={`stat-card glass-card reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`} style={{ transitionDelay: '0.4s' }}>
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Projects Launched</span>
                        </div>
                        <div className={`stat-card glass-card reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`} style={{ transitionDelay: '0.5s' }}>
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Clients</span>
                        </div>
                        <div className={`stat-card glass-card reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`} style={{ transitionDelay: '0.6s' }}>
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Project Success</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
