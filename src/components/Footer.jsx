import {
  FacebookIcon,
  Instagram,
  LinkedinIcon,
  Phone,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#0E0E2C] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Us */}
        <div className="flex flex-col">
          <h2 className=" font-extrabold text-xl lg:text-2xl mb-3">
            Contact Us
          </h2>
          <p className="font-semibold">Graceland Business School</p>
          <p>@ 20 Omenazu Aba</p>
          <p className="mt-2 font-semibold">Phone</p>
          <a href="tel:+0000000000" className="text-sm">
            +2437076354937
          </a>
          <p className="mt-2 font-semibold">Email</p>
          <a href="mailto:info@graceland.com" className="text-sm">
            info@graceland.com
          </a>

          <span className="w-50 justify-center mt-5 m-[auto] inline-flex items-center gap-3 bg-white text-[#0E0E2C] px-4 py-2 rounded-2xl text-sm font-semibold">
            <Phone size={20} />
            <p>Chat with us</p>
          </span>
        </div>

        {/* Admission */}
        <div>
          <h2 className="font-bold text-xl lg:text-2xl mb-3">Admission</h2>
          <ul className="space-y-2 text-sm">
            <li className="font-bold">Enrollment</li>
            <li>Learning at Graceland</li>
            <li className="font-semibold">General Program Questions</li>
            <li>Your Career</li>
            <li>Graduation</li>
            <li>Connect with us</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-xl lg:text-2xl mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="font-bold">About Us</li>
            <li>Micro Courses</li>
            <li>Expert-Led Courses</li>
            <li className="font-bold">Why Harde</li>
            <li>Terms and Conditions</li>
            <li>Admission Requirement</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="font-extrabold text-xl lg:text-2xl mb-3">
            Stay Connected
          </h2>
          <p className="w-50 m-auto ">
            Keep up to date with industry insights and latest news{" "}
          </p>
          <form action="#" className="flex flex-col mt-4">
            <input
              type="email"
              placeholder="name@email.com"
              className="outline-0 text-[#131380] bg-[#ECF1F4] rounded-2xl px-5 p-2 "
            />
            <button className="bg-[#8C8CA2] hover:bg-white text-[#4A4A68] transition mt-5 w-fit m-auto mb-4 px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>

          <ul className="space-y-2 text-sm flex flex-row gap-5 items-center justify-center md:justify-between mt-5">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <Instagram />
            <YoutubeIcon/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
