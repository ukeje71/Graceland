import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#0E0E2C] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Us */}
        <div>
          <h2 className="font-extrabold text-xl lg:text-2xl mb-3">
            Contact Us
          </h2>
          <p className="font-semibold">Graceland Business School</p>
          <p>@ 20 Omenazu Aba</p>
          <p className="mt-2 font-semibold">Phone</p>
          <a href="tel:+0000000000" className="text-sm">
            +00 00 00 00 00
          </a>
          <p className="mt-2 font-semibold">Email</p>
          <a href="mailto:info@graceland.com" className="text-sm">
            info@graceland.com
          </a>

          <span className="mt-5 inline-flex items-center gap-3 bg-white text-[#0E0E2C] px-4 py-2 rounded-2xl text-sm font-semibold">
            <Phone size={20} />
            <p>Chat with us</p>
          </span>
        </div>

        {/* Admission */}
        <div>
          <h2 className="font-bold text-xl lg:text-2xl mb-3">Admission</h2>
          <ul className="space-y-2 text-sm">
            <li>Enrollment</li>
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
            <li>Enrollment</li>
            <li>Learning at Graceland</li>
            <li>General Program Questions</li>
            <li>Your Career</li>
            <li>Graduation</li>
            <li>Connect with us</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="font-bold text-xl lg:text-2xl mb-3">Stay Connected</h2>
          <ul className="space-y-2 text-sm">
            <li>Enrollment</li>
            <li>Learning at Graceland</li>
            <li>General Program Questions</li>
            <li>Your Career</li>
            <li>Graduation</li>
            <li>Connect with us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
