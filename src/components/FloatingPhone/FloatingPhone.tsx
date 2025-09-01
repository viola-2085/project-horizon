import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './FloatingPhone.scss';

const FloatingPhoneButton: React.FC = () => {
    return (
        <div className="floating-phone-container">
            <a href="tel:07447075911" className="floating-phone-button" aria-label="Call us" rel="noopener noreferrer">
                <FaPhoneAlt />
            </a>
        </div>
    );
};

export default FloatingPhoneButton;