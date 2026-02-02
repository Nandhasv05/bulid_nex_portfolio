import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBullhorn, FaPenNib, FaCamera, FaRobot, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import './Categories.css';

const categories = [
    { icon: <FaCode />, name: "Development" },
    { icon: <FaPaintBrush />, name: "Design" },
    { icon: <FaBullhorn />, name: "Marketing" },
    { icon: <FaCamera />, name: "Video & Audio" },
    { icon: <FaMobileAlt />, name: "Mobile Apps" }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Categories = () => {
    return (
        <section className="categories" id="categories">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">Popular <span className="gradient-text">Services</span></h2>
                    <p className="section-subtitle">Find the perfect talent for any job.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="categories-grid"
                >
                    {categories.map((cat, index) => (
                        <motion.div variants={item} key={index} className="category-card">
                            <div className="category-icon">{cat.icon}</div>
                            <h3 className="category-name">{cat.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;
