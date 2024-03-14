"use client";

import Image from "next/image";
import Link from "next/link";

import instagram from "@/assets/img/homepage/instagram.svg";
import facebook from "@/assets/img/homepage/facebook.svg";
import twitter from "@/assets/img/homepage/twitter.svg";
import pinterest from "@/assets/img/homepage/pinterest.svg";
import logo from "@/assets/img/misc/logo-full.svg";
import separatorLeft from "@/assets/img/homepage/separatorLeft.png";
import separatorRight from "@/assets/img/homepage/separatorRight.png";

export const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+011987654321";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:thomas.augot@hotmail.fr";
  };

  return (
    <footer className="bg-darkBlue px-[5vw] lg:px-[10vw] py-[5vh] lg:py-[15vh] flex flex-col">
      <div className="flex gap-6 justify-center">
        <Image
          src={separatorLeft}
          width={"auto"}
          height={"auto"}
          alt="separator"
        />
        <Image src={logo} width={250} height={79} alt="logo" />
        <Image
          src={separatorRight}
          width={"auto"}
          height={"auto"}
          alt="separator"
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-between my-12 md:my-24">
        <div className="w-full md:w-[47%] lg:w-auto flex flex-col items-center md:items-start md:w-auto mx-auto md:mx-[unset]">
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <h1 className="text-2xl">Quick Links</h1>
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <div className="flex gap-8">
            <ul>
              <li>
                <Link href={"/"} className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Lawyers
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"/"} className="hover:underline">
                  Lawyer Single
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Case Results
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Packages
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline">
                  Package Single
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[47%] lg:w-auto mx-auto md:mx-[unset] flex flex-col items-center md:items-start">
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <h1 className="text-2xl">Utility Page</h1>
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <ul>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Start Here
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Style Guide
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                404 Not Found
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Password Protected
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Licenses
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Changelog
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[47%] lg:w-auto mx-auto md:mx-[unset] flex flex-col items-center md:items-start">
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <h1 className="text-2xl">Practice Areas</h1>
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <ul>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Family Law
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Criminal Law
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Personal Injury
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Real Estate Law
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href={"/"} className="hover:underline">
                Business Law
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[47%] lg:w-auto mx-auto md:mx-[unset] flex flex-col items-center md:items-start">
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <h1 className="text-2xl">Contact Us</h1>
          <div className="w-full h-[1px] bg-white/25 my-4"></div>
          <ul>
            <li className="text-center md:text-left">
              Head Office Address 121 King Street,
            </li>
            <li className="text-center md:text-left">
              Melbourne West,Australia
            </li>
            <br />
            <li
              className="cursor-pointer text-center md:text-left"
              onClick={handlePhoneClick}
            >
              Phone: (011) 9876 54321
            </li>
            <li
              className="cursor-pointer text-center md:text-left"
              onClick={handleEmailClick}
            >
              Email: info@example.com
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/25 mb-6"></div>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="w-[80%] mx-auto md:mx-[unset] text-center md:text-left md:w-[60%] lg:w-auto">
          Copyright © <span className="text-camel">Attorney Law</span> |
          Designed by <span className="text-camel">VictorFlow</span> Templates -
          Coded by{" "}
          <Link href={"https://thomasaugot.com/"} target="blank">
            <span className="text-camel cursor-pointer hover:underline">
              Thomas Augot
            </span>
          </Link>
        </p>
        <div className="flex flex justify-center gap-6 px-4 mt-8 md:mt-[unset] ">
          <p className="text-camel">Follow : </p>
          <Link href={"/"}>
            <Image
              src={instagram}
              width={"auto"}
              height={"auto"}
              alt="portait"
              className="fill-white	"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={facebook}
              width={"auto"}
              height={"auto"}
              alt="portait"
              className="fill-white	"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={twitter}
              width={"auto"}
              height={"auto"}
              alt="portait"
              className="fill-white	"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={pinterest}
              width={"auto"}
              height={"auto"}
              alt="portait"
              className="fill-white	"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/25 mt-6"></div>
    </footer>
  );
};
