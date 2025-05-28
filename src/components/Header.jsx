import { useState } from "react";
import logo from "../assets/logo-bs.png";
import { Phone, ShoppingCart, Menu, X } from "lucide-react";
import trasfer from "../assets/mastercard.png";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white text-[#008F96] font-bold py-4 px-6 w-full sticky top-0 z-1000 shadow-sm">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className="h-12 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <Phone
            size={35}
            fill="white"
            className=" bg-[#008f96] text-white p-2 rounded-full"
          />
          <ShoppingCart size={30} />
          <button
            onClick={() => navigate("/Login")}
            className="border border-gray-400 text-gray-400 px-3 py-2 rounded-md"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/create")}
            className="border border-gray-400 text-gray-400 px-3 py-2 rounded-md"
          >
            Get Started
          </button>
          <img src={trasfer} alt="mastercard" className="w-20" />
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 ">
          <ul className="flex flex-col items-start gap-4">
            <li className="border-gray-400 w-full border-b-2">
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="border-gray-400 w-full border-b-2">
              <a href="#" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="border-gray-400 w-full border-b-2">
              <a href="#" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={() => {
                navigate("/Login");
                toggleMenu();
              }}
              className="border border-gray-400 text-gray-400 px-4 py-2 rounded-md"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                navigate("/create");
                toggleMenu();
              }}
              className="border border-gray-400 text-gray-400 px-4 py-2 rounded-md"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
