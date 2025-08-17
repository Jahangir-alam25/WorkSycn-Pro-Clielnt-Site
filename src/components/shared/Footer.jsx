import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/logo.jpg"
              alt="WorkSync Pro Logo"
              className="w-12 h-12 object-cover rounded-lg mr-3"
            />
            <span className="text-xl font-bold text-white">WorkSync Pro</span>
          </div>
          <p className="text-sm text-gray-400">
            Powering modern businesses with employee management, HR operations,
            and payroll automation in a unified, intelligent platform.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about-us" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/contact-us" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
          <p className="text-sm text-gray-400">Email: jahangiralam.dev@gmail.com</p>
          <p className="text-sm text-gray-400">Phone: +8801XXXXXXXXX</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded hover:bg-primary transition">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded hover:bg-primary transition">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Jahangir-alam25" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded hover:bg-primary transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} WorkSync Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

