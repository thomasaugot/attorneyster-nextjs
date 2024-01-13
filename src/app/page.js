import Image from "next/image";
import banner from "/src/assets/img/homepage/banner-main.svg";
import separator from "/src/assets/img/misc/separator.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Image src={banner} width={"100vw"} height={"auto"} alt="logo" className="z-0" />
      <div className="z-10 absolute top-[300px] left-[210px] flex flex-col max-w-[560px]">
        <Image src={separator} width={"50px"} height={"auto"} alt="separator" />
        <h1 className="text-6xl leading-[114%] my-3 capitalize">
          Deeper Understanding Better Solutions
        </h1>
        <p className="text-camel text-xl leading-normal">
          It is a long established fact that a reader will be distracted by the readable content of
          a looking at its layout.
        </p>
        <Link
          href={"/"}
          className="font-medium my-[23px] bg-camel w-[255px] h-[55px] flex items-center justify-center capitalize"
        >
          Get in touch
        </Link>
      </div>
    </main>
  );
}
