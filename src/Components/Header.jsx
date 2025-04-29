import React, { useState } from 'react';
import logoImg from '../assets/Logo.png';
import PostJob from './PostJob';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between p-4 mx-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logoImg} alt="Logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold text-gray-800">Find Your Dream Job</span>
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-7 text-gray-700 font-medium">
                    <a href="" className="hover:text-blue-600">Home</a>
                    <a href="#jobs" className="hover:text-blue-600">Jobs</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
                    <a href="" className="block hover:text-blue-600">Home</a>
                    <a href="#jobs" className="block hover:text-blue-600">Jobs</a>
                    <a href="#contact" className="block hover:text-blue-600">Contact</a>
                </div>
            )}

        </header>
    );
};

export default Header;
