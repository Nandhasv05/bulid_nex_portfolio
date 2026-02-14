import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectServices } from '../store/slices/featuresSlice';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Features.css';

const Services = () => {
    const services = useSelector(selectServices);
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref: scrollRef, isVisible } = useScrollReveal(0.1);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const cards = containerRef.current.getElementsByClassName('service-card-v2');

            for (const card of cards as HTMLCollectionOf<HTMLElement>) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="services" className="services" ref={scrollRef}>
            <div className="container" ref={containerRef}>
                <div className={`services-header text-center reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-left' : ''}`}>
                    <span className="section-tag">My Expertise</span>
                    <h2 className="gradient-text section-title">Professional Solutions</h2>
                </div>

                <div className="services-grid-v2">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-card-v2 glass-card reveal-hidden ${isVisible ? 'reveal-visible reveal-slide-left' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-card-glow"></div>
                            <div className="service-icon-wrapper-v2">
                                <svg className="service-icon-v2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                                </svg>
                            </div>
                            <div className="service-info">
                                <h3 className="service-title-v2">{service.title}</h3>
                                <p className="service-description-v2">{service.description}</p>
                            </div>
                            <div className="card-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
