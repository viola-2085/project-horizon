'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWA.scss';

const FloatingWhatsAppButton: React.FC = () => {
    return (
        <div className="floating-whatsapp-container">
            <a
                href="https://wa.me/02033750400?text=Hello!%20I%20would%20like%20to%20attend%20the%20event."
                className="floating-whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp />
            </a>
        </div>
    );
};

export default FloatingWhatsAppButton;
