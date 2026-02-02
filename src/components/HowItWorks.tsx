import { motion } from 'framer-motion';
import { FaSearch, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import './HowItWorks.css';

const steps = [
    {
        icon: <FaSearch />,
        title: "1. Find Talent",
        description: "Browse our marketplace of vetted freelancers or post a job to get proposals."
    },
    {
        icon: <FaHandshake />,
        title: "2. Hire & Collaborate",
        description: "Choose your expert, discuss details, and manage the project with our built-in tools."
    },
    {
        icon: <FaCheckCircle />,
        title: "3. Pay Safely",
        description: "Release payment only when you are 100% satisfied with the work."
    }
];

const HowItWorks = () => {
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
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="step-card"
                            >
                                <div className="step-icon-wrapper">
                                    <div className="step-icon">{step.icon}</div>
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
