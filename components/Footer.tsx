import { FooterDetails1, FooterIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-text_color px-5 md:px-20 py-20 flex flex-col md:flex-row justify-between gap-1 mt-20">
      <div className="flex flex-col gap-10">
        <Image src="/images/bpslogo.png" width={80} height={80} alt="logo" />
        <p className="text-xl text-white font-semibold">BPS DYNAMIC</p>
        <div className="flex gap-4">
          {FooterIcons.map((icon) => (
            <Link href={icon.path}>
              <icon.icon
                key={icon.path}
                size={20}
                className="text-white hover:text-primary"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 md:gap-20 mt-10 md:mt-0">
        <div className="-mt-3">
          {FooterDetails1.map((detail) => (
            <div key={detail.title} className="flex flex-col gap-4">
              <h3 className="text-white font-semibold">{detail.title}</h3>
              <Link href="/" className="text-gray-500 flex flex-col  gap-3">
                {detail.items.map((item) => (
                  <span className="hover:text-primary transition-all text-sm duration-500">
                    {item}
                  </span>
                ))}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <p className="text-gray-500 hover:text-primary transition-all duration-500 cursor-pointer text-sm">
              BPS Dynamic
            </p>
            <p className="text-gray-500  hover:text-primary transition-all duration-500 cursor-pointer text-sm">
            128 Ricard Drive, Midrand South Africa.
            </p>
            <a
              href="tel:+27 83 200 2196"
              className="text-gray-500 hover:text-primary transition-all duration-500 cursor-pointer text-sm"
            >
              +27 83 200 2196
            </a>
            <p className="text-gray-500">
              <a
                href="mailto:info@bpsdynamic.com"
                className="hover:text-primary transition-all duration-500 text-sm"
              >
               info@bpsdynamic.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
