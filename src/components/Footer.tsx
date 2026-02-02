import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="/" className="logo">
                        Build<span className="logo-highlight">Nex</span>
                    </a>
                    <p className="footer-tagline">
                        Crafting digital experiences with precision and passion. Building the next generation of web applications.
                    </p>
                </div>

                <div className="footer-links-group">
                    <div className="footer-column">
                        <h4>Navigation</h4>
                        <a href="#home">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <a href="#services">Web Development</a>
                        <a href="#services">UI/UX Design</a>
                        <a href="#services">Mobile Apps</a>
                        <a href="#services">Consulting</a>
                    </div>

                    <div className="footer-column">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="#" className="social-icon">Twitter</a>
                            <a href="#" className="social-icon">LinkedIn</a>
                            <a href="#" className="social-icon">GitHub</a>
                            <a href="#" className="social-icon">Email</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© 2026 BuildNex. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
