'use client'
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-onyx text-pearl py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-bordeaux mb-4">Splendies</h2>
          <p className="text-sm leading-relaxed">
            Luxury meets lifestyle. Shop premium fashion, wear, and more with Spliendies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-bordeaux">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-pearl hover:text-bordeaux">Home</a></li>
            <li><a href="#" className="text-pearl hover:text-bordeaux">Shop</a></li>
            <li><a href="#" className="text-pearl hover:text-bordeaux">About Us</a></li>
            <li><a href="#" className="text-pearl hover:text-bordeaux">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-bordeaux">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-pearl hover:text-bordeaux">FAQ</a></li>
            <li><a href="#" className="text-pearl hover:text-bordeaux">Shipping & Returns</a></li>
            <li><a href="#" className="text-pearl hover:text-bordeaux">Track Order</a></li>
            <li><a href="#" className="text-pearl hover:text-bordeaux">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-bordeaux">Stay Connected</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle email submit here
            }}
            className="flex flex-col space-y-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-charcoal text-pearl text-sm border border-charcoal focus:outline-none focus:border-bordeaux placeholder:text-pearl/70"
              required
            />
            <button
              type="submit"
              className="bg-bordeaux text-pearl py-2 rounded font-semibold hover:bg-pearl hover:text-bordeaux transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook" className="text-pearl hover:text-bordeaux">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="text-pearl hover:text-bordeaux">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="text-pearl hover:text-bordeaux">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-charcoal pt-6 text-center text-sm text-pearl/60">
        © {new Date().getFullYear()} Splendies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
