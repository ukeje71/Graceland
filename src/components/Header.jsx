import logo from "../assets/logo-bs.png";
import { Phone, ShoppingCart } from "lucide-react";
import trasfer from "../assets/mastercard.png";

const Header = () => {
  return (
    <>
      <div className=" bg-white text-[#008F96] flex justify-evenly items-center font-bold py-4 px-10 gap-17 w-full sticky top-0 z-50">
        <img src={logo} alt="logo" className="h-15 w-30" />
        <ul className="flex items-center gap-10 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <span className="flex gap-10 items-center">
          <Phone className="h-8 w-8 bg-[#008f96] text-white p-2 rounded-full" />
          <ShoppingCart size={30}  />
          <button className="btns border-1 border-gray-400 text-gray-400 px-1 py-2 rounded-[10px] w-[9rem]">
            Sign In
          </button>
          <button className="btns bg-[#008f96] px-1 py-2 rounded-[10px] text-white w-[9rem]">
            Get Started
          </button>
          <img src={trasfer} alt="mastercard" width={80} />
        </span>
      </div>
    </>
  );
};

export default Header;
// #008f96
