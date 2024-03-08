"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const HomepageForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const fullname = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      !fullname.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      setStateMessage("Some fields are empty");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000); // hide message after 5 seconds
      return;
    }

    const templateParams = {
      to_name: "Attorneyster",
      from_name: fullname.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
      email: emailRef.current.value,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        "tJE4pvbpWA5LNecY3"
      )
      .then(
        function (response) {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        function (error) {
          setStateMessage("An error occured, please try again later.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    // Clear form fields after submission
    fullname.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <motion.form
      initial={{ rotateY: -180, rotateX: 30 }}
      animate={{ rotateY: 0, rotateX: 0 }}
      transition={{ duration: 1 }}
      className="bg-darkBlue w-full mx-[15vw] py-[5vh] px-[7vw]"
      onSubmit={sendMessage}
      action=""
    >
      <div className="flex w-full justify-between gap-6">
        <div className="m-4 w-1/2">
          <input
            type="text"
            id="fullname"
            name="fullname"
            ref={fullname}
            placeholder="Full Name*"
            className="w-full placeholder-white focus:placeholder-white/50 font-outfit text-white bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-b-[1px] focus:caret-white	"
          />
        </div>
        <div className="m-4 w-1/2">
          <input
            type="text"
            id="email"
            name="email"
            ref={emailRef}
            placeholder="Email Address*"
            className="w-full placeholder-white focus:placeholder-white/50 font-outfit text-white bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-b-[1px] focus:caret-white	"
          />
        </div>
      </div>
      <div className="flex w-full justify-between gap-6">
        <div className="m-4 w-1/2">
          <input
            type="text"
            id="name"
            name="name"
            ref={phoneRef}
            placeholder="Phone Number*"
            className="w-full placeholder-white focus:placeholder-white/50 font-outfit text-white bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-b-[1px] focus:caret-white	"
          />
        </div>
        <div className="m-4 w-1/2">
          <input
            type="text"
            id="name"
            name="name"
            ref={emailRef}
            placeholder="Subject*"
            className="w-full placeholder-white focus:placeholder-white/50 font-outfit text-white bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-b-[1px] focus:caret-white	"
          />
        </div>
      </div>

      <div className="m-4">
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          placeholder="Your Message*"
          className="placeholder-white focus:placeholder-white/50 font-outfit text-white bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-b-[1px] focus:caret-white	w-full"
          rows="6"
        ></textarea>
      </div>
      <button
        type="submit"
        value="Send"
        disabled={isSubmitting}
        className="white-button mx-auto mt-10"
      >
        Get an Appointment
      </button>
      <div className="h-4 mt-3">
        {stateMessage && (
          <p className={`text-white text-center`}>{stateMessage}</p>
        )}
      </div>
    </motion.form>
  );
};

export default HomepageForm;
