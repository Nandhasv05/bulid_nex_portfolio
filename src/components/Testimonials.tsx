import { useState } from 'react';
import './Testimonials.css';

interface Testimonial {
    id: number;
    text: string;
    author: string;
    company: string;
    rating: number;
}

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([
        {
            id: 1,
            text: "The improved UI/UX has significantly increased our conversion rates. Highly recommended!",
            author: "John Doe",
            company: "CEO, TechStart",
            rating: 5
        }
    ]);

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

        setTestimonials(prev => [...prev, newTestimonial]);
        setFormData({
            author: '',
            company: '',
            rating: 5,
            text: ''
        });
    };

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">Client Testimonials</h2>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="rating-stars">
                                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <h4>{testimonial.author}</h4>
                                    <span>{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonial-form-wrapper">
                    <h3 className="form-title">Share Your Experience</h3>
                    <form className="testimonial-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="author">Name</label>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    placeholder="Your Name"
                                    value={formData.author}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="rating">Rating</label>
                            <select
                                id="rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleInputChange}
                                className="rating-select"
                            >
                                <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                                <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                                <option value="3">⭐⭐⭐ (3 Stars)</option>
                                <option value="2">⭐⭐ (2 Stars)</option>
                                <option value="1">⭐ (1 Star)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Review</label>
                            <textarea
                                id="text"
                                name="text"
                                rows={3}
                                placeholder="Your feedback..."
                                value={formData.text}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
