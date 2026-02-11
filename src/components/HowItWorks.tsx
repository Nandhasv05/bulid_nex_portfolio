import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FaSearch, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { selectSteps } from '../store/slices/howItWorksSlice';
import './HowItWorks.css';

const iconMap: { [key: string]: React.ReactNode } = {
    FaSearch: <FaSearch />,
    FaHandshake: <FaHandshake />,
    FaCheckCircle: <FaCheckCircle />
};

const HowItWorks = () => {
    const steps = useSelector(selectSteps);

    return (
        <section className="how-it-works">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">How <span className="gradient-text">BuildNex</span> Works</h2>
                    <p className="section-subtitle">Get your project done in three simple steps.</p>
                </motion.div>

                <div className="steps-container">
                    <div className="timeline-line"></div>

                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="step-card"
                            >
                                <div className="step-icon-wrapper">
                                    <div className="step-icon">{iconMap[step.iconName]}</div>
                                    <div className="step-number">{index + 1}</div>
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
