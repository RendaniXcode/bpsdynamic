import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const ImageScroller = () => {
  return (
    <div className="border h-[80vh] flex items-center">
      <Marquee direction="up" className="h-full border w-full">
        <Image src="/images/img1.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
        <Image src="/images/img2.png" width={265} height={500} alt="hero" className="rounded-2xl h-[45vh]" />
        <Image src="/images/img3.png" width={265} height={500} alt="hero" className="rounded-2xl h-[45vh]" />
        {/* <Image src="/images/img4.png" width={265} height={500} alt="hero" className="rounded-2xl h-[45vh]" />
        <Image src="/images/img5.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" /> */}
      </Marquee>
    </div>
  );
};

export default ImageScroller;




 // <div className="border h-[80vh] flex">
    //   <Marquee direction="up" className="flex flex-col gap-5 h-full w-full">
    //     <Image src="/images/img1.png" width={250} height={500} alt="hero" className="rounded-2xl" />
    //     {/* <Image src="/images/img2.png" width={250} height={500} alt="hero" className="" />
    //     <Image src="/images/img3.png" width={250} height={500} alt="hero" className="" />
    //     <Image src="/images/img4.png" width={250} height={500} alt="hero" className="" />
    //     <Image src="/images/img5.png" width={250} height={200} alt="hero" className="" /> */}
    //   </Marquee>
    //   <Marquee direction="down">
    //     I can be a React component
    //   </Marquee>
    // </div>