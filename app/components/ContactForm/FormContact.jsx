"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const FormContact = () => {
  const [Submitting, setSubmitting] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);
  const contactFormRef = useRef();

  const onHover = {
    boxShadow: " 0px 0px 53px 5px rgba(197,29,29,0.51)",
    scale: 1.1,
    transition: { duration: 0.5, type: "spring" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    setSuccess(false);

    try {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVER_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        contactFormRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      );

      contactFormRef.current.reset();
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        ref={contactFormRef}
        className="contact-form flex flex-col gap-y-7 w-full"
      >
        <div className="input relative h-11 w-full mt-4">
          <input
            type="text"
            name="user_name"
            className="peer focus:outline-none"
            placeholder=""
            required
          />
          <label
            htmlFor="name"
            className="transition-all absolute top-[-16px] left-0  text-priColor-700 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-priColor-900 text-xs"
          >
            Name
          </label>
        </div>
        <div className="input relative h-11 w-full mt-4">
          <input
            type="email"
            name="user_email"
            className="peer focus:outline-none"
            placeholder=""
            required
          />
          <label
            htmlFor="email"
            className="transition-all absolute top-[-16px] left-0  text-priColor-700 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-priColor-900 text-xs"
          >
            Email
          </label>
        </div>
        <div className="input relative h-24 w-full mt-4">
          <textarea
            type="text"
            name="user_message"
            className="peer focus:outline-none"
            placeholder=""
            required
          />
          <label
            htmlFor="message"
            className="transition-all absolute top-[-16px] left-0  text-priColor-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-priColor-900 text-xs"
          >
            Leave a message...
          </label>
        </div>

        {Success && (
          <p className="grad-con mx-auto">
            Your message has send successfully!
          </p>
        )}
        {Error && (
          <p className="grad-con mx-auto">
            Oops!!.. Something went wrong try again.
          </p>
        )}

        <motion.button
          whileHover={Submitting ? undefined : onHover}
          className="btn disabled:opacity-5 disabled:pointer-events-none"
          disabled={Submitting}
          whileTap={{ scale: 0.9 }}
        >
          {Submitting ? "Sending..." : "Send"}
        </motion.button>
      </form>
    </>
  );
};

export default FormContact;
