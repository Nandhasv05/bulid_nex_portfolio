import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="logo">
          Build<span className="logo-highlight">Nex</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <button className="btn btn-primary nav-cta">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
