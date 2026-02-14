import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="loader-ring">
                    <div className="loader-ring-inner"></div>
                </div>
                <div className="loader-text">
                    <span className="gradient-text">BuildNex</span>
                    <div className="loader-bar"></div>
                </div>
            </div>
            <div className="loader-backdrop"></div>
        </div>
    );
};

export default LoadingSpinner;
