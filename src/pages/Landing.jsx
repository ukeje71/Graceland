import bg1 from "../assets/Mobilebg-01.jpg";
import Cards from "../components/Cards";
import img1 from "../assets/micro-course.jpg";
import img2 from "../assets/expert-course.jpg";
import img3 from "../assets/community-building-mastery.jpg";
import img4 from "../assets/global-groove.jpg";
import { TimerIcon, ArrowRight, DollarSign } from "lucide-react";
const Landing = () => {
  return (
    <>
      {/* Hero */}
      <section className=" bg-gray-600 flex items-center">
        <span className="absolute text-white w-[40rem] font-bold p-20 ">
          <h2 className="text-5xl mb-10 ">
            Commitment to your Carrier Development
          </h2>
          <p className="text-2xl font-light mb-5">
            Do you need some counsel about your carrier growth or transition ?
            Book a session with our Dedicatedcarrier coaches to support your
            journey
          </p>
          <button className="bg-white px-8 py-2 text-[#008f96] rounded-xl">
            Get started
          </button>
        </span>

        <img
          src={bg1}
          alt="bg1"
          className="mix-blend-overlay flex items-end justify-end b"
        />
      </section>
      {/* Courses */}
      <section className="w-6xl auto  pt-30">
        <h2 className="font-bold text-[#4c6288] text-4xl pb-5 uppercase ">
          Our Offerings
        </h2>
        <div className="flex  justify-between gap-4 flex-row">
          <Cards
            image={img1}
            name={"Micro Courses"}
            type={"Top Proficiency Courses"}
            icon1={
              <ArrowRight
                size={30}
                className="mb-10 flex justify-self-end border-2 rounded-full p-1"
              />
            }
          />
          <Cards
            image={img2}
            name={"Expert Courses"}
            type={"Unlock your Creative potentials"}
            icon1={
              <ArrowRight
                size={30}
                className="mb-10 flex justify-self-end border-2 rounded-full p-1 "
              />
            }
          />
        </div>
      </section>
      {/* Top courses */}
      <section className="bg-[#2A264E] flex p-30 mt-10  ">
        <span>
          <h2 className="text-3xl font-bold w-2xs text-white">
            Top Experts-Led Courses
          </h2>
          <a href="#">View All</a>
        </span>
        <div className="flex gap-5 ">
          <Cards
            image={img3}
            name={"Global Groove"}
            type={"Strategies for success with Johnny Drille"}
            content={
              "Join Johnny Drille ,the Nigerian singer-songwriter ,as he reveals the secrets to building an unforgetttable global music brand .Master the art of music branding and gain the tools to captivate fans worldwide."
            }
            txt1={"4weeks"}
            icon2={<TimerIcon />}
            txt2={"N50,000"}
            icon3={<DollarSign />}
          />
          <Cards
            image={img4}
            name={"Global Groove"}
            type={"Strategies for success with Johnny Drille"}
            content={
              "Join Johnny Drille ,the Nigerian singer-songwriter ,as he reveals the secrets to building an unforgetttable global music brand .Master the art of music branding and gain the tools to captivate fans worldwide."
            }
            txt1={"4weeks"}
            icon2={<TimerIcon />}
            txt2={"N50,000"}
            icon3={<DollarSign />}
          />
        </div>
      </section>
    </>
  );
};

export default Landing;
//#2A264E
