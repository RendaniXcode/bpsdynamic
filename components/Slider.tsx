import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const Slider = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[60%] h-[10vh] -mt-10 flex items-center">
        <Marquee className="flex">
            <Image src="/images/aws.webp" width={100} height={100} alt="logo" />
            <Image src="/images/Googlecloud.svg.png" width={100} height={100} alt="logo" />
            <Image src="/images/azureimg.png" width={100} height={100} alt="logo" />
            <Image src="/images/IBM Cloud.png" width={100} height={100} alt="logo" />
            <Image src="/images/DigitalOcean.svg.png" width={100} height={100} alt="logo" />
            <Image src="/images/Linode.png" width={100} height={100} alt="logo" />
            <Image src="/images/pracle.png" width={100} height={100} alt="logo" />
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
