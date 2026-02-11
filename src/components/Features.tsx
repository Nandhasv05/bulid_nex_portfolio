import { useSelector } from 'react-redux';
import { selectServices } from '../store/slices/featuresSlice';
import './Features.css';

const Services = () => {
    const services = useSelector(selectServices);

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="headers-container">
                    <h2 className="section-title">Expertise & Services</h2>
                    <p className="section-subtitle">Comprehensive solutions for your digital presence, from concept to deployment.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon-wrapper">
                                <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
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
