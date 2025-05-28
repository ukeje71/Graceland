import bg1 from "../assets/Mobilebg-01.jpg";
import Cards from "../components/Cards";
import img1 from "../assets/micro-course.jpg";
import img2 from "../assets/expert-course.jpg";
import img3 from "../assets/community-building-mastery.jpg";
import img4 from "../assets/global-groove.jpg";
import img5 from "../assets/DesigningUI_UXmain.jpg";
import img6 from "../assets/funding-your-startup.jpg";
import img7 from "../assets/qahe.jpg";
import { TimerIcon, ArrowRight, DollarSign, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-600 flex items-center min-h-[80vh] relative overflow-hidden">
        {/* Text Content */}
        <span className="absolute inset-0 flex flex-col justify-center px-4 md:px-20 text-white max-w-xl mx-auto z-10 text-center">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-8 font-bold">
            Commitment to your Career Development
          </h2>
          <p className="text-lg md:text-2xl mb-6 font-light">
            Do you need some counsel about your career growth or transition?
            Book a session with our dedicated career coaches to support your
            journey.
          </p>
          <button
            onClick={() => navigate("/Login")}
            className="bg-white px-6 md:px-8 py-2 md:py-3 text-[#008f96] rounded-xl mx-auto block"
          >
            Get started
          </button>
        </span>
        {/* Background Image */}
        <img
          src={bg1}
          alt="Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </section>

      {/* Offerings Section */}
      <section className="max-w-7xl mx-auto pt-16 px-4">
        <h2 className="font-bold text-[#4c6288] text-3xl md:text-4xl pb-5 uppercase text-center md:text-left">
          Our Offerings
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8">
          <Cards
            image={img1}
            name={"Micro Courses"}
            type={"Top Proficiency Courses"}
            icon1={
              <ArrowRight
                size={30}
                className="mb-6 ml-auto border-2 rounded-full p-1"
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
                className="mb-6 ml-auto border-2 rounded-full p-1"
              />
            }
          />
        </div>
      </section>

      {/* Top Experts-Led Courses */}
      <section className="bg-[#2A264E] mt-16 py-16 px-4 md:px-20 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">
            Top Experts-Led Courses
          </h2>
          <a href="#" className="text-white underline underline-offset-4">
            View All
          </a>
        </div>
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {/* Slides */}
          {[img3, img4, img5, img3, img4, img5].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-200 rounded-2xl p-4 min-h-[20rem] flex flex-col justify-start">
                <Cards
                  image={img}
                  name={index % 2 === 0 ? "Global Groove" : "Community Mastery"}
                  type={
                    index % 2 === 0
                      ? "Strategies for success with Johnny Drille"
                      : "Grow your career via local influence"
                  }
                  content={
                    index % 2 === 0
                      ? "Join Johnny Drille, the Nigerian singer-songwriter..."
                      : "Learn the art of community building..."
                  }
                  txt1="4 weeks"
                  icon2={<TimerIcon />}
                  txt2="N50,000"
                  icon3={<DollarSign />}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Us Section */}
      <section className="max-w-7xl mx-auto pt-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4c6288] mb-8 p-4 text-center md:text-left">
          Why Graceland?
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-7 items-center md:items-stretch">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 bg-[#18B172] rounded-2xl p-4 md:p-6 flex flex-col justify-center">
            <Cards
              name={
                <h3 className="text-2xl md:text-3xl text-white mb-4">
                  Climb Your Career Ladder Like A Pro
                </h3>
              }
              content={
                <p className="text-white text-lg md:text-xl">
                  Increase your employability by 70% with Graceland Proficiency
                  Courses. Optimize your career with Graceland Proficiency
                  Courses.
                </p>
              }
              link={
                <p className="mt-4 text-white underline">Explore Courses</p>
              }
            />
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-1/2 bg-[#FF5C5C] rounded-2xl p-4 md:p-6 flex flex-col justify-center">
            <Cards
              name={
                <h3 className="text-2xl md:text-3xl text-white mb-4">
                  Schedule A Free Career Session
                </h3>
              }
              content={
                <p className="text-white text-lg md:text-xl">
                  At Graceland, we guide you through the critical journey that
                  connects you from where you are to where you need to be. Speak
                  with one of our seasoned Career Coaches today.
                </p>
              }
              link={
                <p className="mt-4 text-white underline">Explore Courses</p>
              }
            />
          </div>
        </div>
      </section>

      {/* Top Micro Courses */}
      <section className="bg-[#2A264E] mt-16 py-16 px-4 md:px-20 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">
            Top Micro Courses
          </h2>
          <a href="#" className="text-white underline underline-offset-4">
            View All
          </a>
        </div>
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {[
            {
              img: img3,
              name: "Critical Thinking and Problem Solving",
              type: "Making a Habit of Superior Thinking",
              content:
                "Effective problem-solving relies on the ability to analyse topics and situations based on available facts and information.",
            },
            {
              img: img4,
              name: "Design Thinking",
              type: "Creating Innovative Solutions to Problems",
              content:
                "The design thinking approach is a sure-proof approach to creatively solving complex problems.",
            },
            {
              img: img6,
              name: "Funding Your Startup",
              type: "The Startup Founder's Blueprint - Turning Dreams to Dollars",
              content:
                "Startup Funding might be just the opportunity your idea needs to go from good to great.",
            },
            // Add more cards as needed
          ].map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-200 rounded-2xl p-4 min-h-[20rem] flex flex-col justify-start">
                <Cards
                  image={course.img}
                  name={course.name}
                  type={course.type}
                  content={course.content}
                  txt1="4 weeks"
                  icon2={<TimerIcon />}
                  txt2="N50,000"
                  icon3={<DollarSign />}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonies */}
      <section className="pt-16 bg-[#0E0E2C] py-16 px-4 md:px-20 overflow-x-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          What Learners say
        </h2>
        {/* Swiper for Testimonials */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {[1, 2, 3, 4].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-4 min-h-[15rem] flex flex-col justify-center">
                <Cards
                  name={<p className="text-black">"</p>}
                  content={
                    <p className="text-black">
                      My experience has been nothing short of transformative...
                    </p>
                  }
                  pic1="DI"
                  user="Divine Isreal"
                  pic2={
                    <div className="flex justify-start space-x-1">
                      <Star size={15} color="#008F96" fill="#008F96" />
                      <Star size={15} color="#008F96" fill="#008F96" />
                      <Star size={15} color="#008F96" fill="#008F96" />
                      <Star size={15} color="#008F96" fill="#008F96" />
                    </div>
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Sponsors Section */}
      <section className="mt-20 bg-[#008F96] py-8 md:py-16 px-4 md:px-20 rounded-2xl text-white flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-10">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl mb-4 font-bold">Accredited By</h2>
          <p className="w-full md:w-11/12">
            Graceland Business School is accredited by QAHE. QAHE is a
            non-governmental, independent quality assurance agency in education
            and training, recognized by various international bodies...
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 bg-white rounded-3xl flex justify-center items-center">
          <img src={img7} alt="Brand-logo" className="w-full max-w-[200px]" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
