"use client";
import { ContactPageData } from "@/constants";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mdoqqebj"); // Replace with your Formspree form ID

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="bg-secondary flex flex-col md:flex-row p-5 md:p-20 gap-20" id="contact">
      <div className="w-full md:w-[50%]">
        <div>
          <h1 className="text-[2rem] text-primary font-semibold">Contact Us</h1>
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-gray-500 w-full md:w-[55%]">
              Email, call, or complete the form to learn how BPS Dynamic can solve your cloud problem.
            </p>
            <p className="text-gray-500">
              <a
                href="mailto:info@bpsdynamic.com"
                className="hover:text-primary transition-all duration-500"
              >
                info@bpsdynamic.com
              </a>
            </p>
            <p className="text-gray-500 hover:text-primary transition-all duration-500 cursor-pointer">
              128 Richard Drive, South Africa.
            </p>
            <a
              href="tel:+12345678901"
              className="text-gray-500 hover:text-primary transition-all duration-500 cursor-pointer"
            >
              +27 082 454 4223
            </a>
          </div>
        </div>
        <div className="flex gap-8 mt-20">
          {ContactPageData.map((data) => (
            <div key={data.title} className="flex flex-col gap-3 mt-5 w-full md:w-[40%]">
              <h1 className="text-[1.5rem] text-text_color font-semibold">{data.title}</h1>
              <p className="text-gray-500">{data.description}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white px-5 py-10 w-full md:w-[38%] rounded-[1rem] shadow-md">
        <h1 className="text-[2rem] font-semibold">Get in Touch</h1>
        <p className="text-gray-500 text-[15px]">We'd love to hear from you. Whether you have a question about our services or need support, our team is here to help</p>

        <div className="flex flex-col gap-7 mt-10">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="rounded-[2rem] text-gray-500 px-3 py-2 border border-gray-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-[2rem] text-gray-500 px-3 py-2 border border-gray-500 focus:outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="rounded-[2rem] text-gray-500 px-3 py-2 border border-gray-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            className="rounded-lg text-gray-500 px-3 py-2 border border-gray-500 focus:outline-none h-[20vh]"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button type="submit" disabled={state.submitting} className="bg-primary rounded-[2rem] p-2 text-white mt-5 w-full font-semibold">
          Submit
        </button>
        {submitted && (
          <p className="text-center font-semibold text-[1.6rem] text-primary mt-5">Thanks for contacting us!</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
