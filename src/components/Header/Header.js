"use client";

import Image from "next/image";
import logo from "/src/assets/img/misc/logo-full.svg";
import callus from "/src/assets/img/misc/callus.svg";
import emailus from "/src/assets/img/misc/emailus.svg";
import Link from "next/link";
import Cart from "./Cart";
import { IoChevronDown } from "react-icons/io5";

export const Header = () => {
  const toggleSubMenu = () => {};

  return (
    <div className="absolute w-[100vw] px-24 py-8 z-10">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} width={250} height={79} alt="logo" />
        </Link>
        <div className="flex items-center">
          <Cart />
          <Link href={"/"} className="font-outfit p-4 text-white blurred-button hover:scale-90">
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
  );
};
