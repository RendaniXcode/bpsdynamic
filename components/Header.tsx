"use client";
import { NavLinks, NavLinksSide } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { IoMenu } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Button } from "./ui/button";
const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: { title: string; path: string; link: string; } | { title: string; path: string; link?: undefined; }) => {
    e.preventDefault();
    setIsSheetOpen(false);

    if (pathname === link.path) {
      document
        .getElementById(link.link)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(link.path).then(() => {
        document
          .getElementById(link.link)
          ?.scrollIntoView({ behavior: "smooth" });
      });
    }
  };

  return (
    <nav>
      <div className="hidden md:block">
        <nav className="w-full px-20 py-5 flex items-center justify-between bg-secondary">
          <Link href="/" className="text-primary font-bold text-2xl">
            <Image
              src="/images/bpslogo.png"
              width={80}
              height={80}
              alt="logo"
            />
          </Link>

          <div className="flex gap-8 bg-white py-2 px-8 rounded-full">
            {NavLinks.map((link) => (
              <a
                key={link.title}
                href={link.path === "/contact" ? link.path : `#${link.link}`}
                className="px-5 py-1 rounded-xl font-semibold hover:text-primary"
                onClick={(e) => handleNavLinkClick(e, link)}
              >
                {link.title}
              </a>
            ))}
          </div>

          <Link
            href="/contact"
            className="bg-primary text-white px-5 py-2 rounded-[2rem] font-bold"
          >
            Consult Now!
          </Link>
        </nav>
      </div>
      {/* Mobile View */}
      <div className="md:hidden p-4 w-full flex items-center justify-between bg-secondary">
        <Link href="/">
          {" "}
          <Image src="/images/bpslogo.png" width={70} height={70} alt="logo" />
        </Link>
        <Sheet>
          <SheetTrigger className="">
            <IoMenu size={30} className="" />
          </SheetTrigger>
          <SheetContent className="pt-14 bg-secondary">
            <SheetHeader>
              <SheetTitle className="flex">
                <Link href="/">
                  <Image
                    src="/images/bpslogo.png"
                    width={80}
                    height={80}
                    alt="logo"
                  />
                </Link>
              </SheetTitle>
              <SheetDescription className="flex justify-start">
                <div className="mt-10">
                  <ul className="flex flex-col text-left gap-10 items-center justify-center">
                    {NavLinksSide.map((link) => (
                      <SheetClose asChild>
                        <Link
                          key={link.title}
                          href={pathname === "/" ? `#${link.link}` : "/"}
                          className=" py-1 rounded-xl font-semibold hover:text-primary flex justify-center  items-center"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    ))}
                    <a
                      className="font-semibold hover:text-primary"
                      onClick={() => {
                        router.push("/contact"), window.location.reload();
                      }}
                    >
                      Conatct
                    </a>
                  </ul>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
