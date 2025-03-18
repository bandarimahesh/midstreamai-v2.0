import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Mail, Linkedin, MapPin } from "lucide-react";
import { ScrollToTop } from "./ScrollToTop";

const Logo = () => (
  <svg
    width="39"
    height="24"
    viewBox="0 0 39 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <path
      d="M28.667 0.105263H21.0881L22.5 5H30.0789L28.667 0.105263Z"
      fill="currentColor"
    />
    <path
      d="M27.1295 21L23.0911 7.00001H30.67L34.7085 21H27.1295Z"
      fill="currentColor"
    />
    <path d="M17.0789 0L21.943 17H14.364L9.5 0H17.0789Z" fill="currentColor" />
    <path
      d="M17.0861 0L11.0284 21H3.44946L9.50716 0H17.0861Z"
      fill="currentColor"
    />
    <rect
      y="20.8421"
      width="15.1579"
      height="2.84211"
      rx="1.42105"
      fill="currentColor"
    />
    <rect
      x="23"
      y="20.8421"
      width="15.1579"
      height="2.84211"
      rx="1.42105"
      fill="currentColor"
    />
  </svg>
);

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-2xl font-bold text-primary-600"
              >
                <Logo />
                <span className="font-extrabold">MidstreamAI</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === "/" ? "text-primary-600" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === "/about" ? "text-primary-600" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === "/services" ? "text-primary-600" : ""
                }`}
              >
                Services
              </Link>
              <Link
                to="/industries"
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === "/industries" ? "text-primary-600" : ""
                }`}
              >
                Industries
              </Link>
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto py-2">
              <Link
                to="/"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 ${
                  location.pathname === "/" ? "text-primary-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 ${
                  location.pathname === "/about" ? "text-primary-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 ${
                  location.pathname === "/services" ? "text-primary-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/industries"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 ${
                  location.pathname === "/industries" ? "text-primary-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Logo />
                <h3 className="text-xl font-bold">MidstreamAI</h3>
              </div>
              <p className="text-gray-400">
                Innovating pipeline operations with AI-powered solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-gray-400 hover:text-white"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5 mr-2" />
                  <a target="_blank" href="mailto:contactus@midstreamai.com">
                    Email
                  </a>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5 mr-2" />
                  <a
                    href="https://linkedin.com/company/midstreamai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="h-5 w-5 mr-2 mt-1" />
                  <address className="not-italic">
                    MidstreamAI LLC,
                    <br />
                    Houston, Texas, USA
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              All rights reserved. © 2024 MidstreamAI
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};
