// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';  // Ensure you are using Link from react-router-dom

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-center space-x-8">
        <Link to="/" className="text-white text-xl">Home</Link>
        <Link to="/about" className="text-white text-xl">About Us</Link>  {/* Link to About Us page */}
        <Link to="/awards-recognition" className="text-white text-xl">Awards and Recognition</Link> {/* Link to Awards page */}
        <Link to="/csr" className="text-white text-xl">Corporate Social Responsibility</Link>
        <Link to="/gallery" className="text-white text-xl">Gallery</Link>
        <Link to="/contact" className="text-white text-xl">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
