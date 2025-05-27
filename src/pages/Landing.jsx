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

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gray-600 flex items-center min-h-[80vh]">
        <span className="absolute text-white max-w-xl font-bold px-6 md:px-20 py-10">
          <h2 className="text-4xl md:text-5xl mb-8">
            Commitment to your Career Development
          </h2>
          <p className="text-xl md:text-2xl font-light mb-5">
            Do you need some counsel about your career growth or transition?
            Book a session with our dedicated career coaches to support your
            journey.
          </p>
          <button className="bg-white px-8 py-2 text-[#008f96] rounded-xl">
            Get started
          </button>
        </span>
        <img
          src={bg1}
          alt="bg1"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto pt-16 px-4">
        <h2 className="font-bold text-[#4c6288] text-4xl pb-5 uppercase">
          Our Offerings
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
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

      {/* Top courses */}
      <section className="bg-[#2A264E] mt-16 py-16 px-4 lg:px-20 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          <h2 className="text-3xl font-bold text-white mb-4 lg:mb-0">
            Top Experts-Led Courses
          </h2>
          <a href="#" className="text-white underline underline-offset-4">
            View All
          </a>
        </div>

        {/* 🚫 Do NOT wrap Swiper in grid */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl h-130">
              <Cards
                image={img3}
                name={"Global Groove"}
                type={"Strategies for success with Johnny Drille"}
                content={
                  "Join Johnny Drille, the Nigerian singer-songwriter, as he reveals the secrets to building an unforgettable global music brand. Master the art of music branding and gain the tools to captivate fans worldwide."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl  h-130">
              <Cards
                image={img4}
                name={"Global Groove"}
                type={"Strategies for success with Johnny Drille"}
                content={
                  "Join Johnny Drille, the Nigerian singer-songwriter, as he reveals the secrets to building an unforgettable global music brand. Master the art of music branding and gain the tools to captivate fans worldwide."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl  h-130">
              <Cards
                image={img5}
                name={"Community Mastery"}
                type={"Grow your career via local influence"}
                content={
                  "Learn the art of community building and create lasting impact in your space. Empower yourself with influence strategies that work."
                }
                txt1={"6 weeks"}
                icon2={<TimerIcon />}
                txt2={"N65,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl  h-130">
              <Cards
                image={img3}
                name={"Global Groove"}
                type={"Strategies for success with Johnny Drille"}
                content={
                  "Join Johnny Drille, the Nigerian singer-songwriter, as he reveals the secrets to building an unforgettable global music brand. Master the art of music branding and gain the tools to captivate fans worldwide."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl  h-130">
              <Cards
                image={img4}
                name={"Global Groove"}
                type={"Strategies for success with Johnny Drille"}
                content={
                  "Join Johnny Drille, the Nigerian singer-songwriter, as he reveals the secrets to building an unforgettable global music brand. Master the art of music branding and gain the tools to captivate fans worldwide."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl  h-130">
              <Cards
                image={img5}
                name={"Community Mastery"}
                type={"Grow your career via local influence"}
                content={
                  "Learn the art of community building and create lasting impact in your space. Empower yourself with influence strategies that work."
                }
                txt1={"6 weeks"}
                icon2={<TimerIcon />}
                txt2={"N65,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto pt-16 px-4">
        <h2 className="text-5xl font-bold text-[#4c6288] mb-8 p-7">
          Why Graceland?
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 p-7 h-110">
          <div className="w-350 bg-[#18B172] rounded-2xl">
            <Cards
              name={
                <h3 className="text-3xl md:text-4xl text-white p-6">
                  Climb Your Career Ladder Like A Pro
                </h3>
              }
              content={
                <p className="p-6 text-xl text-white">
                  Increase your employability by 70% with Graceland Proficiency
                  Courses. Optimize your career with Graceland Proficiency
                  Courses.
                </p>
              }
              link={<p className="p-6">Explore Courses</p>}
            />
          </div>

          <div className="w-250 bg-[#FF5C5C] rounded-2xl">
            <Cards
              name={
                <h3 className="text-3xl md:text-4xl text-white p-6">
                  Schedule A Free Career Session
                </h3>
              }
              content={
                <p className="p-6 text-xl text-white">
                  At Graceland, we guide you through the critical journey that
                  connects you from where you are to where you need to be. Speak
                  with one of our seasoned Career Coaches today
                </p>
              }
              link={<p className="p-6">Explore Courses</p>}
            />
          </div>
        </div>
      </section>
      {/* Top Micro Courses */}
      <section className="bg-[#2A264E] mt-16 py-16 px-4 lg:px-20 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          <h2 className="text-3xl font-bold text-white mb-4 lg:mb-0">
            Top Micro Courses
          </h2>
          <a href="#" className="text-white underline underline-offset-4">
            View All
          </a>
        </div>

        {/* Top Micro Courses*/}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl h-130">
              <Cards
                image={img3}
                name={"Critical Thinking and Problem Solving"}
                type={"Making a Habit of Superior Thinking"}
                content={
                  "Effective problem-solving relies on the ability to analyse topics and situations based on available facts and information."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl h-130">
              <Cards
                image={img4}
                name={"Design Thinking"}
                type={"Creating Innovative Solutions to Problems"}
                content={
                  "The design thinking approach is a sure-proof approach to creatively solving complex problems."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl h-130">
              <Cards
                image={img6}
                name={"Funding Your Startup"}
                type={
                  "The Startup Founder's Blueprint - Turning Dreams to Dollars"
                }
                content={
                  "Startup Funding might be just the opportunity your idea needs to go from good to great."
                }
                txt1={"6 weeks"}
                icon2={<TimerIcon />}
                txt2={"N65,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl h-130">
              <Cards
                image={img3}
                name={"Critical Thinking and Problem Solving"}
                type={"Making a Habit of Superior Thinking"}
                content={
                  "Effective problem-solving relies on the ability to analyse topics and situations based on available facts and information."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl h-130">
              <Cards
                image={img4}
                name={"Design Thinking"}
                type={"Creating Innovative Solutions to Problems"}
                content={
                  "The design thinking approach is a sure-proof approach to creatively solving complex problems."
                }
                txt1={"4 weeks"}
                icon2={<TimerIcon />}
                txt2={"N50,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 rounded-2xl h-130">
              <Cards
                image={img6}
                name={"Funding Your Startup"}
                type={
                  "The Startup Founder's Blueprint - Turning Dreams to Dollars"
                }
                content={
                  "Startup Funding might be just the opportunity your idea needs to go from good to great."
                }
                txt1={"6 weeks"}
                icon2={<TimerIcon />}
                txt2={"N65,000"}
                icon3={<DollarSign />}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Testimonies */}
      <section className="pt-20 bg-[#0E0E2C]  py-16 px-4 lg:px-20 overflow-x-hidden">
        <h2 className="text-5xl font-bold text-white mb-15">
          What Learners say
        </h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <div className="bg-white rounded-2xl h-95 ">
              <Cards
                name={<p className="text-black"> "</p>}
                content={
                  <p className=" text-black">
                    My experience has been nothing short of transformative. The
                    Product Management course challenged me in the best way
                    possible, pushing me to think strategically and apply
                    practical skills that are immediately relevant in the
                    industry.
                  </p>
                }
                pic1={"DI"}
                user={"Divine Isreal"}
                pic2={
                  <p className="flex flex-row justify-between">
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                  </p>
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl h-95 ">
              <Cards
                name={<p className="text-black"> "</p>}
                content={
                  <p className=" text-black">
                    My experience has been nothing short of transformative. The
                    Product Management course challenged me in the best way
                    possible, pushing me to think strategically and apply
                    practical skills that are immediately relevant in the
                    industry.
                  </p>
                }
                pic1={"DI"}
                user={"Divine Isreal"}
                pic2={
                  <p className="flex flex-row justify-between">
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                  </p>
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl h-95 ">
              <Cards
                name={<p className="text-black"> "</p>}
                content={
                  <p className=" text-black">
                    My experience has been nothing short of transformative. The
                    Product Management course challenged me in the best way
                    possible, pushing me to think strategically and apply
                    practical skills that are immediately relevant in the
                    industry.
                  </p>
                }
                pic1={"DI"}
                user={"Divine Isreal"}
                pic2={
                  <p className="flex flex-row justify-between">
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                  </p>
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl h-95 ">
              <Cards
                name={<p className="text-black"> "</p>}
                content={
                  <p className=" text-black">
                    My experience has been nothing short of transformative. The
                    Product Management course challenged me in the best way
                    possible, pushing me to think strategically and apply
                    practical skills that are immediately relevant in the
                    industry.
                  </p>
                }
                pic1={"DI"}
                user={"Divine Isreal"}
                pic2={
                  <p className="flex flex-row justify-between">
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                  </p>
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl h-95 ">
              <Cards
                name={<p className="text-black"> "</p>}
                content={
                  <p className=" text-black">
                    My experience has been nothing short of transformative. The
                    Product Management course challenged me in the best way
                    possible, pushing me to think strategically and apply
                    practical skills that are immediately relevant in the
                    industry.
                  </p>
                }
                pic1={"DI"}
                user={"Divine Isreal"}
                pic2={
                  <p className="flex flex-row justify-between">
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                  </p>
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl h-95 ">
              <Cards
                name={<p className="text-black"> "</p>}
                content={
                  <p className=" text-black">
                    My experience has been nothing short of transformative. The
                    Product Management course challenged me in the best way
                    possible, pushing me to think strategically and apply
                    practical skills that are immediately relevant in the
                    industry.
                  </p>
                }
                pic1={"DI"}
                user={"Divine Isreal"}
                pic2={
                  <p className="flex flex-row justify-between">
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                    <Star
                      size={15}
                      color="#008F96"
                      fill="#008F96"
                      className="border-[#008F96]"
                    />
                  </p>
                }
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Sponsors */}
      <section className="mt-20 bg-[#008F96]  py-16 px-4 lg:px-20 overflow-x-hidden m-16 rounded-2xl text-white flex flex-row items-center gap-10">
        <div>
          <h2 className="text-2xl mb-4 font-bold">Accredicted By</h2>
          <p className="w-90 ">
            Graceland Business School is accredited by QAHE. QAHE is a
            non-governmental, independent quality assurance agency in education
            and training, which is recognised by National Agency for Quality
            Assurance in Education & Research (Moldova), Agency for
            Accreditation of Educational Programs & Organizations (Kyrgyzstan),
            Council on International Higher Education Supervision (Austria), The
            Accreditation Council for Education, Indonesia (ACE), Higher
            Education Council (HEC), Syria, The Directorate for Research,
            Planning, and Funding, Republic of Macedonia.
          </p>
        </div>
        <div className="p-10 bg-white w-300 flex flex-col justify-center items-center rounded-3xl ">
          <img src={img7} alt="Brand-logo" width={200} />
        </div>
      </section>
    </div>
  );
};

export default Landing;
