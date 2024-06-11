import { ProcessData } from "@/constants";
import React from "react";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";

const Process = () => {
  return (
    <section className="mt-20 flex flex-col items-center  justify-center" id="process">
      <div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-[2rem] font-bold  text-primary">
              Process that works
            </h1>
          </div>
        </div>
        <p className="text-center mt-10 text-xl text-text_color">
          With our proven system, we quickly provide the ideal cloud experts for
          your project.{" "}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row flex-wrap gap-x-10 items-center justify-center">
          {ProcessData.map((process, index) => (
            <div
              key={index}
              className="flex gap-5 mt-10 w-full md:w-[40%] flex-col border px-4 py-10 rounded-xl bg-secondary"
            >
              <div>
                <div className="flex gap-2">
                  <process.icon size={70} className="text-primary -mt-4 cursor-pointer w-[100px] h-[100px] md:w-[80px] md:h-[80px]" />
                  <div className="">
                    <h3 className="text-[1.2rem] font-semibold text-text_color">
                      {process.title}
                    </h3>
                    <p className="text-gray-500 text-[1rem]">{process.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
