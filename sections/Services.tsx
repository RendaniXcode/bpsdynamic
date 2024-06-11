import { ServicesData } from "@/constants";
import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";


const Services = () => {
  return (
    <section className="boxWidthdiv  mt-20 flex flex-col md:flex-row justify-between items-center" id="services">
      <div className="bg-secondary w-full md:w-[50%] py-28 px-5 rounded-xl flex flex-col  gap-8 boxWidth1">
        <div>
          <h1 className="text-[2rem] font-bold text-primary">
            Our Services
          </h1>
        </div>
        <div className="flex gap-10  flex-col">
          <p className=" text-gray-500 text-[0.99rem]">
            
            Welcome to BPS Dynamic, where your business success in the cloud is
            our top priority. We provide expert cloud consulting and training
            services tailored to your unique needs. From comprehensive framework
            reviews to strategic cloud adoption and seamless migration, we
            handle every aspect of your cloud journey. Benefit from our scalable
            solutions and leverage the power of the cloud with dedicated support
            from your personal consultant.
          </p>
        </div>
        <Link
          href="/services"
          className="flex items-center gap-2 bg-primary text-white rounded-[2rem] py-2 px-4 w-fit hover:bg-white hover:text-primary hover:border border-primary"
        >
          <span>Explore More</span>
          <div className="bg-primary text-white p-1 rounded-full">
            <RiArrowRightSLine size={23} />
          </div>
        </Link>
      </div>

      <div className="boxWidth2 w-full md:w-[40%]">
        <div className="flex flex-col md:flex-row flex-wrap gap-x-8 space-x-2 boxWidth2">
          {ServicesData.map((service, index) => (
            <div key={index} className="flex gap-5 mt-10 w-full md:w-[40%] flex-col border p-4 rounded-xl bg-secondary boxserve">
              <service.icon size={50} className="text-primary" />
              <div>
                <h3 className="text-lg md:text-sm font-semibold text-text_color">{service.title}</h3>
                <p className="text-gray-500 mt-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
