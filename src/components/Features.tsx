import './Features.css';

const Services = () => {
    const services = [
        {
            icon: "m4 6 2.5 4m0-4-2.5 4M4 6v4m2.5 0V6M4 14l6-6L4 2M16 2l-6 6 6 6-6-6-6 6", // Placeholder abstract path
            title: "Web Development",
            description: "Custom websites built with modern frameworks like React and Next.js, optimized for performance and SEO."
        },
        {
            icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", // Phone
            title: "Responsive Design",
            description: "Interfaces that look perfect on any device. Mobile-first approach ensuring great user experience everywhere."
        },
        {
            icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning
            title: "Performance Optimization",
            description: "Speed matters. I optimize every line of code to ensure your site loads instantly and runs smoothly."
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="headers-container">
                    <h2 className="section-title">Expertise & Services</h2>
                    <p className="section-subtitle">Comprehensive solutions for your digital presence, from concept to deployment.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-wrapper">
                                <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                                </svg>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
