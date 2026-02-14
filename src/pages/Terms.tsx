import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
    return (
        <>
            <Navbar />
            <div className="legal-page" style={{ padding: '120px 0 80px', background: 'var(--bg-primary)', color: 'var(--text-white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Terms and Conditions</h1>
                    <div className="legal-content" style={{ opacity: 0.9, lineHeight: 1.8 }}>
                        <p style={{ marginBottom: '1.5rem' }}>Last Updated: February 2026</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>1. Acceptance of Terms</h3>
                        <p>By accessing and using BuildNex's services, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>2. Services Provided</h3>
                        <p>BuildNex offers digital architecture, web development, and design solutions. Specific project terms will be outlined in individual service agreements.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>3. Intellectual Property</h3>
                        <p>All content, code, and designs produced by BuildNex remain our property until full payment is received, after which ownership transfers as specified in the project contract.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>4. User Responsibilities</h3>
                        <p>Users are responsible for providing accurate information and maintaining the security of any credentials provided for project collaboration.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>5. Limitation of Liability</h3>
                        <p>BuildNex shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>

                        <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>6. Governing Law</h3>
                        <p>These terms are governed by the laws of India, specifically within the jurisdiction of Tamil Nadu.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Terms;
