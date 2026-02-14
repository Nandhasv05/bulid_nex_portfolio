import './Hero.css';
import aiDevImage from '../assets/devloperCarttomimage.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container animate-up">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Turning Ideas Into <span className="gradient-text">Scalable Digital Products</span>
                    </h1>
                    <p className="hero-subtitle">
                        Specializing in pixel-perfect <span className="text-white">Websites</span>,
                        enterprise-grade <span className="text-white">Web Applications</span>, and
                        native-feel <span className="text-white">Mobile Apps</span>.
                    </p>
                </div>

                <div className="hero-image-wrapper">
                    <img

                        src={aiDevImage}
                        alt="AI Developer Avatar"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
