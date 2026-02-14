import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-glow" />
            <div className="footer-mesh" />

            <div className="container footer-content-v3">
                <div className="footer-grid-v3">
                    {/* Column 1: Brand & Socials */}
                    <div className="footer-col-v3 brand-col">
                        <div className="footer-brand-wrap-v3">
                            <h2 className="footer-logo-v3">Build<span className="logo-accent-v3">Nex</span></h2>
                            <div className="brand-underline-v3" />
                        </div>
                        <p className="footer-desc-v3">
                            Architecting digital excellence and building trust through superior code and innovative design solutions.
                        </p>
                        <div className="social-links-v3">
                            <a href="https://linkedin.com/in/buildnex-dev-3518a93ab" target="_blank" rel="noopener noreferrer" className="social-icon-v3"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/buildnexdev?igsh=MTQzenF4cXpkOTMwag==" target="_blank" rel="noopener noreferrer" className="social-icon-v3"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="footer-col-v3 contact-col">
                        <h4 className="footer-title-v3">Get in Touch</h4>
                        <div className="contact-items-v3">
                            <div className="footer-contact-item">
                                <div className="contact-icon-wrapper-v3">
                                    <FaMapMarkerAlt className="contact-icon-v3" />
                                </div>
                                <p>Chennai, India</p>
                            </div>
                            <div className="footer-contact-item">
                                <div className="contact-icon-wrapper-v3">
                                    <FaPhoneAlt className="contact-icon-v3" />
                                </div>
                                <a href="tel:+919444171368">+91 94441 71368</a>
                            </div>
                            <div className="footer-contact-item">
                                <div className="contact-icon-wrapper-v3">
                                    <FaEnvelope className="contact-icon-v3" />
                                </div>
                                <a href="mailto:buildnexdev@gmail.com">buildnexdev@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-v3">
                    <div className="footer-legal-v3">
                        <Link to="/terms" className="legal-link-v3">Terms & Conditions</Link>
                        <span className="separator-v3">•</span>
                        <Link to="/privacy-policy" className="legal-link-v3">Privacy Policy</Link>
                    </div>

                    <div className="footer-bottom-divider-v3" />

                    <div className="footer-copyright-wrap-v3">
                        <p>© 2026 BuildNex. All rights reserved.</p>
                        <div className="footer-credits-v3">
                            Made with <span className="heart-icon-v3">❤️</span> by <span className="designer-name-v3">BuildNexDev</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
