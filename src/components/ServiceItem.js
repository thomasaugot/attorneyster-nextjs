import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ServiceItem({ item }) {
  const { title, text, icon, index } = item;

  const images = {
    hidden: {
      opacity: 0,
      // y: 5,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      variants={images}
      key={index}
      className="w-[30%] bg-cyan/50 flex flex-col justify-center p-8 items-stretch"
    >
      <h1 className="text-white text-3xl pb-2">{title}</h1>
      <p className="text-white">{text}</p>
      <div className="w-[100%] h-[1px] bg-white/50 my-5"></div>
      <div className="flex justify-between h-[auto] items-center">
        <Image src={icon} width={45} height={"auto"} alt="icon" />
        <Link href={"/"} className="small-blue-button hover:scale-95">
          Learn more
        </Link>
      </div>
    </motion.div>
  );
}
