/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import banner from "/src/assets/img/homepage/banner-main.svg";
import separator from "/src/assets/img/misc/separator.svg";
import illustration1 from "/src/assets/img/homepage/illustration-1.svg";
import illustration2 from "/src/assets/img/homepage/illustration-2.svg";
import peterpark from "/src/assets/img/homepage/peter-park.svg";
import caseFinish from "/src/assets/img/homepage/case-finish.svg";
import experienceX35 from "/src/assets/img/homepage/35yexperience.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Image src={banner} width={"100vw"} height={"auto"} alt="logo" className="z-0" />
      <section className="z-10 absolute top-[300px] left-[210px] flex flex-col max-w-[560px]">
        <Image src={separator} width={"50px"} height={"auto"} alt="separator" />
        <h1 className="text-6xl leading-[114%] my-3 capitalize">
          Deeper Understanding Better Solutions
        </h1>
        <p className="text-camel text-xl leading-normal">
          It is a long established fact that a reader will be distracted by the readable content of
          a looking at its layout.
        </p>
        <Link href={"/"} className="camel-button hover:scale-95">
          Get in touch
        </Link>
      </section>
      <section className="relative bg-darkBlue w-full">
        <div className="flex max-w-[80vw] my-[120px] mx-auto gap-12">
          <div className="flex flex-col justify-between gap-12">
            <Image
              src={illustration1}
              width={"400px"}
              height={"auto"}
              alt="illustration1"
              className="mr-[50px] "
            />
            <Image
              src={illustration2}
              width={"50px"}
              height={"auto"}
              alt="illustration2"
              className="mr-[50px] "
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-[40px]">
              The Simple Choice <br /> for Complex Litigation
            </h1>
            <Image
              src={separator}
              width={"50px"}
              height={"auto"}
              alt="separator"
              className="mr-[50px] "
            />
            <p className="max-w-[40vw]">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              su alteration in some form, by injected humour, oir randomised words which don't look
              even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
              to be sure there isn't anything.
            </p>
            <div className="flex mt-6 items-center">
              <Image
                src={peterpark}
                width={"50px"}
                height={"auto"}
                alt="peterpark"
                className="mr-[20px]"
              />
              <h3 className="text-2xl italic">Peeter Park</h3>
            </div>
            <div className="flex justify-between gap-8">
              <div className="my-8 fill ">
                <Image src={caseFinish} width={"50px"} height={"auto"} alt="caseFinish" />
              </div>
              <div className="my-8 fill ">
                <Image src={experienceX35} width={"50px"} height={"auto"} alt="experienceX35" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
