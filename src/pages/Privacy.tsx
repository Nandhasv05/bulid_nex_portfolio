import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <>
            <Navbar />
            <div className="legal-page" style={{ padding: '120px 0 80px', background: 'var(--bg-primary)', color: 'var(--text-white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Privacy Policy</h1>
                    <div className="legal-content" style={{ opacity: 0.9, lineHeight: 1.8 }}>
                        <p style={{ marginBottom: '1.5rem' }}>Last Updated: February 2026</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>1. Data Collection</h3>
                        <p>We collect information you provide directly to us through contact forms, including name, email, and project details, to better serve your requirements.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>2. Use of Information</h3>
                        <p>Your information is used solely for communication, project management, and improving our service offerings. We do not sell your data to third parties.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>3. Storage and Security</h3>
                        <p>We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>4. Third-Party Services</h3>
                        <p>We may use third-party analytics and communication tools that process data according to their own privacy policies.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>5. Your Rights</h3>
                        <p>You have the right to request access to, correction, or deletion of your personal information stored with us.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>6. Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us at buildnexdev@gmail.com.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;
