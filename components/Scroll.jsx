import Image from "next/image";
import React from "react";

const Scroll = () => {
  return (
   <div  className="flex items-center">
     <div className="scroll" style={{ '--t': '8s' }}>
        <div>
           <img src="/images/img1.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
           <img src="/images/img2.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
           <img src="/images/img3.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
           <img src="/images/img4.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
           <img src="/images/img5.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
        </div>
    </div>
   <div className="scroll2" style={{ '--t': '8s' }}>
     <div>
        <img src="/images/image1.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
        <img src="/images/image2.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
        <img src="/images/image3.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
        <img src="/images/image4.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
        <img src="/images/image5.png" width={265} height={200} alt="hero" className="rounded-2xl h-[45vh]" />
     </div>
   </div>
   </div>
  );
};

export default Scroll;
