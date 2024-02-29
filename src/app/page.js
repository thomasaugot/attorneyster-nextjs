"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import ServiceItem from "@/components/ServiceItem";

import banner from "/src/assets/img/homepage/banner-main.webp";
import separator from "/src/assets/img/misc/separator.svg";
import separatorCentered from "/src/assets/img/misc/separator-2.svg";
import illustration1 from "/src/assets/img/homepage/illustration-1.svg";
import illustration2 from "/src/assets/img/homepage/illustration-2.svg";
import peterpark from "/src/assets/img/homepage/peter-park.svg";
import caseFinish from "/src/assets/img/homepage/case-finish.svg";
import experienceX35 from "/src/assets/img/homepage/35yexperience.svg";
import iconBuilding from "/src/assets/img/homepage/icon-buildings.svg";
import iconSuitcase from "/src/assets/img/homepage/icon-suitcase.svg";
import iconTruck from "/src/assets/img/homepage/icon-truck.svg";
import iconGrave from "/src/assets/img/homepage/icon-grave.svg";
import iconHandCuffs from "/src/assets/img/homepage/icon-handcuffs.svg";
import iconFamily from "/src/assets/img/homepage/icon-family.svg";
import criminalDefenseCasesServed from "/src/assets/img/homepage/criminal-defense-cases-served.png";
import trustedClients from "/src/assets/img/homepage/trusted-clients.png";
import successfulCases from "/src/assets/img/homepage/successful-cases.png";
import modernHome from "/src/assets/img/homepage/modern-home-logo.svg";
import vintageInterior from "/src/assets/img/homepage/vintageinterior-logo.svg";
import brand from "/src/assets/img/homepage/brand-logo.svg";
import natureHome from "/src/assets/img/homepage/naturehome-logo.svg";
import classicDesign from "/src/assets/img/homepage/classic-design-logo.svg";
import bgIllustration1 from "/src/assets/img/homepage/bg-illu-1.svg";
import balanceStatue from "/src/assets/img/homepage/balance-statue.svg";
import diagram75 from "/src/assets/img/homepage/diagram75.png";
import diagram80 from "/src/assets/img/homepage/diagram80.png";
import diagram90 from "/src/assets/img/homepage/diagram90.png";
import quotes from "/src/assets/img/homepage/quotes.svg";
import nattascha from "/src/assets/img/homepage/nattasha.svg";
import minciPall from "/src/assets/img/homepage/minci.svg";
import juliaRose from "/src/assets/img/homepage/julia.svg";
import johnDavid from "/src/assets/img/homepage/john.svg";

export default function Home() {
  const expertiseAreas = [
    {
      id: 1,
      title: "Business Law",
      text: "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
      icon: iconSuitcase,
    },
    {
      id: 2,
      title: "Construction Law",
      text: "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
      icon: iconBuilding,
    },
    {
      id: 3,
      title: "Car Accident",
      text: "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
      icon: iconTruck,
    },
    {
      id: 4,
      title: "Wrongful Death",
      text: "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
      icon: iconGrave,
    },
    {
      id: 5,
      title: "Criminal Law",
      text: "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
      icon: iconHandCuffs,
    },
    {
      id: 6,
      title: "Family Law",
      text: "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
      icon: iconFamily,
    },
  ];

  const partners = [
    { id: 1, source: modernHome },
    { id: 2, source: vintageInterior },
    { id: 3, source: brand },
    { id: 4, source: natureHome },
    { id: 5, source: classicDesign },
  ];

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      delay: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const partnerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const [isExpertiseVisible, setIsExpertiseVisible] = useState(false);
  const [isPartnersVisible, setIsPartnersVisible] = useState(false);

  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    threshold: 0.2,
  });

  const { ref: partnersRef, inView: partnersInView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (expertiseInView) {
      setIsExpertiseVisible(true);
    }
  }, [expertiseInView]);

  useEffect(() => {
    if (partnersInView) {
      setIsPartnersVisible(true);
    }
  }, [partnersInView]);

  return (
    <main className="relative">
      <Image
        src={banner}
        width={"100vw"}
        height={"auto"}
        alt="logo"
        className="z-0"
        priority={true}
      />
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
      <section className="h-full bg-nightBlue py-[15vh] px-[15vh]" ref={expertiseRef}>
        <div className="max-w-[80vw] mx-auto flex justify-between items-center">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-[40px]">
              Explore <br /> Our Practice Areas
            </h1>
            <Image
              src={separator}
              width={"50px"}
              height={"auto"}
              alt="separator"
              className="mr-[50px]"
            />
          </div>
          <div className="w-[0.5px] h-[105px] bg-white opacity-40"></div>
          <p className="w-[50%]">
            There are <span className="text-camel">many variations of passages</span> of Lorem Ipsum
            available, but the majority have su alteration in some form, by injected humour, oir
            <span className="text-camel"> randomised workds</span> which don't look even slightly
            believable.
          </p>
        </div>
        {isExpertiseVisible && (
          <motion.div
            variants={variants}
            initial="hidden"
            viewport={{ once: true }}
            animate="show"
            className="flex flex-wrap w-full h-full gap-6 justify-center my-12"
          >
            {expertiseAreas.map((item, index) => (
              <ServiceItem key={index} item={item} />
            ))}
          </motion.div>
        )}
      </section>
      <section className="h-full bg-cream py-[15vh] px-[15vh]">
        <div>
          <h1 className="text-black text-4xl flex mx-auto w-[20vw] text-center">
            If you're in trouble we can help.
          </h1>
          <Image
            src={separatorCentered}
            width={"50px"}
            height={"auto"}
            alt="separator"
            className="mx-auto mt-4"
          />
          <p className="flex mx-auto w-[45vw] text-center my-[47px] font-outfit text-darkGrey dropshadow">
            There are of Lorem Ipsum available, but the majority have su alteration in some form, by
            injected humour, oir which don't look even slightly believable.
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex bg-darkWhite p-[30px] gap-4 w-1/3">
            <Image src={trustedClients} width={"auto"} height={"auto"} alt="chart illustration" />
            <div className="flex flex-col justify-center">
              <h2 className="text-black text-2xl text-nowrap">Trusted Clients</h2>
              <p className="text-black">There are of Lorem Ipsum</p>
            </div>
          </div>
          <div className="flex bg-darkWhite p-[30px] gap-4 w-1/3">
            <Image src={successfulCases} width={"auto"} height={"auto"} alt="chart illustration" />
            <div className="flex flex-col justify-center">
              <h2 className="text-black text-2xl text-nowrap">Successful Cases</h2>
              <p className="text-black">There are of Lorem Ipsum</p>
            </div>
          </div>
          <div className="w-1/3">
            <Image
              src={criminalDefenseCasesServed}
              width={"33%"}
              height={"auto"}
              alt="chart illustration"
              className="flex bg-grey p-[32x]"
            />
          </div>
        </div>
        <div className="bg-black/25 m-12 w-full h-[0.5px] mx-auto"></div>
        <div>
          <div className="flex justify-center gap-5" ref={partnersRef}>
            <Image src={separatorCentered} width={"50px"} height={"auto"} alt="separator" />
            <h1 className="text-black text-4xl flex w-[20vw] text-center">Meet The Partners</h1>
            <Image src={separatorCentered} width={"50px"} height={"auto"} alt="separator" />
          </div>
          <div className="flex w-full justify-around mt-8">
            {isPartnersVisible && (
              <motion.div
                variants={partnerVariants}
                initial="hidden"
                animate="show"
                className="flex w-full justify-around my-8 items-center"
              >
                {partners.map((item, id) => (
                  <motion.div
                    key={id}
                    variants={partnerVariants}
                    initial="hidden"
                    animate="show"
                    className="mr-[50px]"
                  >
                    <Image src={item.source} width={"50px"} height={"auto"} alt="partner" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <section className="h-[180vh] py-[15vh] px-[15vh] relative flex justify-center items-center">
        <div
          className="absolute inset-0 flex justify-center items-center bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgIllustration1.src})` }}
        >
          <div className="flex justify-between gap-10 absolute mx-auto my-auto z-10 bg-darkBlue/85 px-12 py-24 ">
            <div className="w-[370px] h-[758px]">
              <h1 className="text-4xl mb-4">We Are Top Lawyers And History</h1>
              <Image
                src={separator}
                width={"auto"}
                height={"auto"}
                alt="separator"
                className="mb-12"
              />
              <div className="flex flex-col gap-12">
                <div className="flex flex-col justify-between">
                  <p className="text-camel mb-3 font-semibold">1995 – Opening</p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but majority
                    going to use a passage.
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-camel mb-3 font-semibold">2011 – Open Branch Office</p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but majority
                    going to use a passage.
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-camel mb-3 font-semibold">2015 – 18000K Client’s</p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but majority
                    going to use a passage.
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-camel mb-3 font-semibold">2020– Best Law & Firm Awwards</p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but majority
                    going to use a passage.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={balanceStatue}
              width={"auto"}
              height={758}
              alt="separator"
              className="my-2"
            />
            <div className="w-[430px] h-[758px]">
              <h1 className="text-4xl mb-4 w-[300px] ">We Are Specialised And Experienced</h1>
              <Image
                src={separator}
                width={"50px"}
                height={"auto"}
                alt="separator"
                className="mb-12"
              />
              <p className="mb-16">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium deleniti atque corrupti quos molestias excepturi odio dignissimos
                ducimus qui blanditiis sint occaecati .
              </p>
              <div className="flex flex-col relative">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p>Divorce And Family Cases</p>
                    <p>75%</p>
                  </div>
                  <Image
                    src={diagram75}
                    width={"auto"}
                    height={"auto"}
                    alt="diagram"
                    className="mb-8"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p>Property And Construction</p>
                    <p>80%</p>
                  </div>
                  <Image
                    src={diagram80}
                    width={"auto"}
                    height={"auto"}
                    alt="diagram"
                    className="mb-8"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p>Banking And Finance</p>
                    <p>75%</p>
                  </div>
                  <Image
                    src={diagram75}
                    width={"auto"}
                    height={"auto"}
                    alt="diagram"
                    className="mb-8"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p>Banking And Finance</p>
                    <p>90%</p>
                  </div>
                  <Image
                    src={diagram90}
                    width={"auto"}
                    height={"auto"}
                    alt="diagram"
                    className="mb-16"
                  />
                </div>
                <div className="camel-button">Free Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-darkBlue px-[10vw] py-[15vh] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl mb-4">Client Opinions & Reviews</h1>
          <Image
            src={separatorCentered}
            width={"50px"}
            height={"auto"}
            alt="separator"
            className="mb-12"
          />
        </div>
        <div className="flex justify-between gap-4 w-full">
          <div className="flex flex-col gap-4 w-1/4">
            <div className="bg-cyan py-10 px-8 rounded-bl-[40px]">
              <Image src={quotes} width={"auto"} height={"auto"} alt="quotes" className="mb-6" />
              <p>
                There are of Lorem Ipsum available, but the majority have su alteration in some
                form, by injected oir which don't look even slightly believable.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={nattascha} width={"auto"} height={"auto"} alt="portait" />
              <div className="flex flex-col">
                <h1 className="text-[30px]">Nattasha</h1>
                <p className="text-lg">Junior Lawyer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <div className="flex gap-4 items-center">
              <Image src={minciPall} width={"auto"} height={"auto"} alt="portait" />
              <div className="flex flex-col">
                <h1 className="text-[30px]">Minci pall</h1>
                <p className="text-lg">Consultant</p>
              </div>
            </div>
            <div className="bg-cyan py-10 px-8 rounded-tl-[40px]">
              <Image src={quotes} width={"auto"} height={"auto"} alt="quotes" className="mb-6" />
              <p>
                There are of Lorem Ipsum available, but the majority have su alteration in some
                form, by injected oir which don't look even slightly believable.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <div className="bg-cyan py-10 px-8 rounded-bl-[40px]">
              <Image src={quotes} width={"auto"} height={"auto"} alt="quotes" className="mb-6" />
              <p>
                There are of Lorem Ipsum available, but the majority have su alteration in some
                form, by injected oir which don't look even slightly believable.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={juliaRose} width={"auto"} height={"auto"} alt="portait" />
              <div className="flex flex-col">
                <h1 className=" text-[30px]">Julia Rose</h1>
                <p className="text-lg">Consultant</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <div className="flex gap-4 items-center">
              <Image src={johnDavid} width={"auto"} height={"auto"} alt="portait" />
              <div className="flex flex-col">
                <h1 className=" text-[30px]">John David</h1>
                <p className="text-lg">Designer</p>
              </div>
            </div>
            <div className="bg-cyan py-10 px-8 rounded-tl-[40px]">
              <Image src={quotes} width={"auto"} height={"auto"} alt="quotes" className="mb-6" />
              <p>
                There are of Lorem Ipsum available, but the majority have su alteration in some
                form, by injected oir which don't look even slightly believable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
