import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTestimonials, addTestimonial, type Testimonial } from '../store/slices/testimonialsSlice';
import './Testimonials.css';

const Feedback = () => {
    const testimonials = useSelector(selectTestimonials);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        author: '',
        company: '',
        rating: 5,
        text: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTestimonial: Testimonial = {
            id: Date.now(),
            text: formData.text,
            author: formData.author,
            company: formData.company,
            rating: Number(formData.rating)
        };

        dispatch(addTestimonial(newTestimonial));

        setFormData({
            author: '',
            company: '',
            rating: 5,
            text: ''
        });
    };

    return (
        <section id="feedback" className="feedback">
            <div className="container">
                <div className="text-center">
                    <span className="section-tag">Wall of Love</span>
                    <h2 className="section-title">Client Feedback</h2>
                </div>

                <div className="feedback-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="feedback-card glass-card">
                            <div className="feedback-header">
                                <div className="feedback-avatar">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="feedback-meta">
                                    <h4>{testimonial.author}</h4>
                                    <span>{testimonial.company}</span>
                                </div>
                            </div>
                            <p className="feedback-text">"{testimonial.text}"</p>
                            <div className="feedback-rating">
                                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="feedback-form-card glass-card animate-up">
                    <div className="feedback-form">
                        <h3 className="gradient-text">Share Your Experience</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="author">Your Name</label>
                                    <input
                                        type="text"
                                        id="author"
                                        name="author"
                                        className="form-input"
                                        placeholder="Full Name"
                                        value={formData.author}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Position / Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="form-input"
                                        placeholder="Product Manager @ Corp"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="rating">Rating</label>
                                    <select
                                        id="rating"
                                        name="rating"
                                        value={formData.rating}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    >
                                        <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                        <option value="4">⭐⭐⭐⭐ (Great)</option>
                                        <option value="3">⭐⭐⭐ (Good)</option>
                                        <option value="2">⭐⭐ (Average)</option>
                                        <option value="1">⭐ (Poor)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="text">Your Testimony</label>
                                <textarea
                                    id="text"
                                    name="text"
                                    className="form-input"
                                    rows={4}
                                    placeholder="Tell others what it's like to work with me..."
                                    value={formData.text}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-full">
                                Post Feedback
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
