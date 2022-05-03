import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>&copy; Copyright {year} Car Warehouse System || All rights reserved.</small></p>
        </footer>
    );
};

export default Footer;