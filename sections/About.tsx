import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const About = () => {
  const words = "Staggered Letter Pull Up";
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };
  return (
    <section
      className="mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-10"
      id="about"
    >
      <div className="w-full md:w-[50%] flex justify-center">
        <img
          src="/images/change2.jpg"
          alt="hero"
          className="rounded-xl w-[280px]  md:w-[500px] h-[308px] md:h-[630px]"
        />
      </div>
      <div className="about bg-secondary w-full md:w-[55%] border py-14 px-5 rounded-xl flex flex-col  gap-8">
        <div>
          <h1 className="text-[2rem] font-bold text-primary">About US</h1>
        </div>
        <div className="flex gap-7  flex-col">
          <p className=" text-gray-500 text-[0.99rem]">
            At BPS Dynamic, we specialize in Information Technology, Digital
            Transformation, and Cloud Services. Our mission is to empower
            businesses with the knowledge and tools they need to thrive in the
            digital age.
          </p>
          <div>
            <h1 className="text-[1.3rem] font-bold text-primary">Our Story</h1>
            <p className="text-gray-500 text-[0.99rem] mt-5">
              Founded with a passion for technology and innovation, BPS Dynamic
              is committed to providing top-notch IT consulting and cloud
              services. Our team of experienced professionals brings a wealth of
              knowledge and practical expertise to help businesses succeed.
            </p>
          </div>
          <div className="flex  items-center gap-10 mt-5">
            <div>
              <h1 className="text-[1.3rem] font-bold text-primary">
                Our Mission
              </h1>
              <p className="text-gray-500 text-[0.99rem] mt-4">
                To empower organisations with innovative IT solutions and
                comprehensive consulting services, enabling them to achieve
                their full potential in the digital landscape
              </p>
            </div>
            <div>
              <h1 className="text-[1.3rem] font-bold text-primary">
                Our Vision
              </h1>
              <p className="text-gray-500 text-[0.99rem] mt-4">
                To be a leading provider of IT consulting and cloud services,
                recognised for our excellence, innovation, and commitment to
                client success.
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/services"
          className="flex items-center gap-2 bg-primary text-white rounded-[2rem] py-2 px-4 w-fit hover:bg-white hover:text-primary hover:border border-primary transition-all duration-200 ease-in-out"
        >
          <span>About Us</span>
          <div className="bg-primary text-white p-1 rounded-full">
            <RiArrowRightSLine size={23} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default About;
