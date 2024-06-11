import Slider from "@/components/Slider";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Process from "@/sections/Process";
import Services from "@/sections/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full px-5 md:px-10 py-5">
      <Hero />
      <About />
      <Process />
    </main>
  );
}
