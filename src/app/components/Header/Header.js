import Image from "next/image";
import logo from "/public/assets/img/misc/logo-full.svg";
import Link from "next/link";
import Cart from "./Cart";

export const Header = () => {
  return (
    <div className="absolute w-[100vw] px-24 py-8 ">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} width={250} height={79} alt="logo" />
        </Link>
        <div className="flex items-center">
          <Cart />
          <Link href={"/"} className="p-4 text-cream bg-cyan font-outfit">
            Book a Consultation
          </Link>
        </div>
      </div>

      <div className="w-[100%] h-[1px] bg-cyan my-6"></div>
    </div>
  );
};
