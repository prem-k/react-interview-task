import React from 'react';

function Header() {
  return (
    <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <h1 className="masthead-heading text-uppercase mb-0">WFH</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        </div>
    </header>
  );
}

export default Header;
