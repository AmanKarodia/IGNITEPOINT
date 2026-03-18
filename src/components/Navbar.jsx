import { useState } from 'react';
import logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavHome = () => {
    window.location.href = "/";
  }

  return (
    <nav className="relative z-20 py-5 bg-white shadow-md">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-28 w-28 mr-2" src={logo} onClick={NavHome} alt="Logo" />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex flex-grow justify-center space-x-5">
          <Link to="/" className=" transition">Home</Link>
          <Link to="/Contact" className=" transition">Contact</Link>
          <Link to="/Courses" className=" transition">Courses</Link>
          <Link to="/Gallary" className=" transition">Gallary</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            {/* Hamburger icon */}
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden shadow-md text-center font-bold p-4 flex flex-col space-y-1">
          <Link to="/" className=" transition">Home</Link>
          <Link to="/Courses" className=" transition">Courses</Link>
          <Link to="/Contact" className=" transition">Contact</Link>
          <Link to="/Gallary" className=" transition">Gallary</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;