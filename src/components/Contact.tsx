import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';
import devImage from '../assets/devloperCarttomimage.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        projectDetails: ''
    });
    const { ref, isVisible } = useScrollReveal(0.1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSubmit = {
            access_key: "ae2a70f8-7c4a-4aab-bf8d-4ac95cf560da",
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.projectDetails,
            subject: "New Inquiry from Portfolio"
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formDataToSubmit)
            });

            const result = await response.json();

            if (result.success) {
                alert("🚀 Message sent successfully!");
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    projectDetails: ''
                });
            } else {
                throw new Error(result.message || "Failed to send message");
            }
        } catch (error) {
            console.error("Web3Forms Error:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <section id="contact" className="contact" ref={ref}>
            <div className="container">
                <div className="contact-main-grid">
                    {/* Left Side: AI Image */}
                    <div className={`contact-image-side reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-left' : ''}`}>
                        <div className="ai-image-container">
                            <img src={devImage} alt="AI Developer" className="ai-contact-img" />
                            <div className="image-overlay-glow"></div>
                        </div>
                        <div className="contact-text-content">
                            <h2 className="gradient-text">Let's Build Something Exceptional</h2>
                            <p className="contact-desc">
                                Ready to transform your business? Reach out and let's start a conversation about your next big project.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className={`contact-form-side reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-right' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <form className="glass-card contact-form-premium" onSubmit={handleSubmit}>
                            <h3 className="form-title">Send a Message</h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-input"
                                        placeholder="+91 00000 00000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="projectDetails">Project Details/Type</label>
                                <textarea
                                    id="projectDetails"
                                    className="form-input"
                                    rows={4}
                                    placeholder="Briefly describe your project requirements..."
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-full-v2">
                                Launch Inquiry
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
