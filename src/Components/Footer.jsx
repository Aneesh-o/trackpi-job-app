import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import logoImg from '../assets/Logo.png';

const Footer = () => {
    return (
        <footer id='contact' className="bg-black text-white py-5 px-6 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                <div>
                    <img src={logoImg} alt="Logo" className="h-8 mb-4" />
                    <p className="text-gray-400 leading-relaxed">
                        20619 Torrence Chapel Rd<br />
                        Suite 116 #1040<br />
                        Cornelius, NC 28031<br />
                    </p>
                    <p className="mt-4 text-gray-400">Phone number</p>
                    <p className="text-white font-semibold">9633688779</p>
                    <p className="mt-2 text-gray-400">Email</p>
                    <p className="text-white font-semibold">aneesh@gmail.com</p>
                </div>

                {/* Column 2: Quick links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Resources</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
                {/* Column 3: Social */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Social</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a target='blank' href="https://www.facebook.com/">Facebook</a></li>
                        <li><a target='blank' href="https://www.instagram.com/">Instagram</a></li>
                        <li><a target='blank' href="https://www.linkedin.com/">LinkedIn</a></li>
                        <li><a target='blank' href="https://www.twitter.com/">Twitter</a></li>
                        <li><a target='blank' href="https://www.youtube.com/">Youtube</a></li>
                    </ul>
                </div>
                {/* Column 4: Legal */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="">Terms of service</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Cookie policy</a></li>
                    </ul>
                </div>
            </div>
            {/* Bottom */}
            <div className="mt-5 text-center text-gray-500 text-xs">
                © 2025 Skipmatrix. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
