import ImageScroller from "@/components/ImageScroller";
import Scroll from "@/components/Scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { ServicesData } from "@/constants";

const Hero = () => {
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
      className="flex flex-col gap-20 md:flex-row md:gap-20 items-center justify-between bg-secondary px-5 py-28 rounded-xl"
      id="hero"
    >
      <div className="w-full  md:w-[40%] flex flex-col gap-16 mt-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl leading-10 md:text-[2.5rem] font-semibold w-[100%] text-text_color md:leading-[3.3rem]">
            <span className="text-text_color">
              Digital Transformation and <span className=" text-primary">Cloud Services</span>
            </span>
          </h1>
          <p className="text-gray-500">
            Discover unparalleled cloud consulting and training services that
            drive innovation and efficiency. Partner with{" "}
            <span className="text-primary font-semibold">BPS Dynamic</span> to
            streamline your operations and accelerate your digital
            transformation journey.
          </p>
          <p className="text-gray-500 mt-3">Ready to take your business to the next level? <Link href="/contact" className="text-primary font-semibold cursor-pointer">Book your free consultation Now!!</Link></p>
        </div>
        <div className="flex gap-10 items-center">
          <Link
            href="/contact"
            className="flex items-center gap-1 md:gap-2 bg-primary text-white rounded-[2rem] px-1 py-1 md:py-2 pl-3 md:px-5 text-sm lg:text-base hover:bg-white hover:border border-primary hover:text-primary"
          >
            <span>Get Started</span>
            <div className="bg-primary text-white p-1 rounded-full">
              <RiArrowRightSLine size={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-10  justify-center w-full md:w-[60%]">
        {ServicesData.map((service) => (
            <div key={service.title} className="w-full md:w-[40%]  flex flex-col gap-4 border p-4 rounded-xl bg-white">
              <service.icon size={50} className="text-primary" />
              <div>
                <h3 className="text-lg md:text-sm font-semibold text-text_color">{service.title}</h3>
                <p className="text-gray-500 mt-4">{service.description}</p>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
