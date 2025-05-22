import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#0E0E2C] items-center justify-center py-16 px-4 lg:px-20 overflow-x-hidden text-white grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <h2 className="font-extrabold text-2xl mb-3 ">Contact Us</h2>
          <p className="font-extrabold">Graceland Business School</p>
          <p>@ 20 omenazu Aba </p>
          <p className="font-extrabold">Phone</p>
          <a href="#">+00 00 00 00 00</a>
          <p className="font-extrabold">Email</p>
          <a href="#">info@graceland.com</a>
          <span className="bg-white w-45 p-2 text-[#0E0E2c] mt-5 rounded-2xl  text-center  flex items-center gap-5">
            <p>
              <Phone size={20}  />
            </p>
            <p>Chat with us</p>
          </span>
        </div>
        {/* Addmission */}
        <div>
          <h2 className="font-bold text-2xl mb-3 ">Admission </h2>
          <p className="font-extrabold">Enrollment</p>
          <p>Learning at Graceland</p>
          <p className="font-extrabold">GeneralProgramQuestions</p>
          <p>Your carrier</p>
          <p>Graduation</p>
          <p>Connect with us</p>
        </div>
        {/* Quick links */}
        <div>
          <h2 className="font-bold text-2xl mb-3 ">Admission </h2>
          <p>Enrollment</p>
          <p>Learning at Graceland</p>
          <p>GeneralProgramQuestions</p>
          <p>Your carrier</p>
          <p>Graduation</p>
          <p>Connect with us</p>
        </div>

        {/* Stay conneted */}
        <div>
          <h2 className="font-bold text-2xl mb-3 ">Admission </h2>
          <p>Enrollment</p>
          <p>Learning at Graceland</p>
          <p>GeneralProgramQuestions</p>
          <p>Your carrier</p>
          <p>Graduation</p>
          <p>Connect with us</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
