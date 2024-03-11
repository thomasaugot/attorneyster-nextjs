"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/misc/logo-full.svg";
import callus from "@/assets/img/misc/callus.svg";
import emailus from "@/assets/img/misc/emailus.svg";
import Link from "next/link";
import Cart from "./Cart";
import { IoChevronDown } from "react-icons/io5";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSubMenu = () => {};

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile Navigation
        <div className="">
          <Link href={"/"}>
            <Image
              src={logo}
              width={200}
              height={79}
              alt="logo"
              className="absolute ml-2 top-6 left-4 lg:hidden"
            />
          </Link>
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleClick}
            className="fixed flex flex-col justify-center items-center z-50 mr-2 top-10 right-4 lg:hidden"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm ${
                isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm my-1 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
              }`}
            ></span>
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={
              isOpen
                ? "fixed z-40 lg:hidden left-0 top-0 w-[100%] h-full ease-in-out duration-500 bg-cyan/95 flex flex-col justify-center items-center"
                : "mt-24 z-40 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {/* Mobile Navigation Items */}
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="flex flex-col justify-left gap-10">
                <Link
                  href={"/"}
                  className="text-xl font-outfit text-white hover:underline underline-offset-4"
                >
                  Home
                </Link>
                <Link
                  href={"/"}
                  className="text-xl font-outfit text-white  hover:underline underline-offset-4"
                >
                  About Us
                </Link>
                <button
                  className="text-xl font-outfit text-white  hover:underline flex items-end	underline-offset-4"
                  onClick={toggleSubMenu}
                >
                  Pages&nbsp; <IoChevronDown size={20} />
                </button>
                <Link
                  href={"/"}
                  className="text-xl font-outfit text-white hover:underline underline-offset-4"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col xl:flex-row gap-8">
                <Link href={"https://wa.me/your-whatsapp-number"}>
                  <Image src={callus} width={190} alt="logo" />
                </Link>
                <Link href={"mailto:your-email@example.com"}>
                  <Image src={emailus} width={220} alt="logo" />
                </Link>
              </div>
              <Link
                href={"/"}
                className="text-xl font-outfit p-4 text-white blurred-button hover:scale-90"
              >
                Book a Consultation
              </Link>
            </div>
          </ul>
        </div>
      ) : (
        <div className="absolute w-[100vw] px-24 py-8 z-10">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image src={logo} width={250} height={79} alt="logo" />
            </Link>
            <div className="flex items-center">
              <Cart />
              <Link
                href={"/"}
                className="font-outfit p-4 text-white blurred-button hover:scale-90"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="w-[100%] h-[1px] bg-cyan my-6"></div>

          <div className="flex items-center justify-between">
            <nav className="flex items-center">
              <Link
                href={"/"}
                className="font-outfit text-white mr-6 hover:underline underline-offset-4"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="font-outfit text-white mx-6 hover:underline underline-offset-4"
              >
                About Us
              </Link>
              <button
                className="font-outfit text-white mx-6 hover:underline flex items-end	underline-offset-4"
                onClick={toggleSubMenu}
              >
                Pages&nbsp; <IoChevronDown size={20} />
              </button>
              <Link
                href={"/"}
                className="font-outfit text-white mx-5 hover:underline underline-offset-4"
              >
                Contact Us
              </Link>
            </nav>
            <div className="flex gap-8">
              <Link href={"https://wa.me/your-whatsapp-number"}>
                <Image src={callus} width={190} alt="logo" />
              </Link>
              <Link href={"mailto:your-email@example.com"}>
                <Image src={emailus} width={220} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="w-[100%] h-[1px] bg-cyan my-6"></div>
        </div>
      )}
    </>
  );
};
