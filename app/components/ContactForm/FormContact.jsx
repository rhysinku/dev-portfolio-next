"use client";
import React from "react";
import { motion } from "framer-motion";
const FormContact = () => {
  return (
    <>
      <form action="#" className="contact-form flex flex-col gap-y-7 w-full">
        <div class="input relative h-11 w-full mt-4">
          <input
            type="text"
            name="name"
            className="peer focus:outline-none"
            placeholder=""
          />
          <label
            for="name"
            className="transition-all absolute top-[-16px] left-0  text-priColor-700 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-priColor-900 text-xs"
          >
            Name
          </label>
        </div>
        <div class="input relative h-11 w-full mt-4">
          <input
            type="email"
            name="email"
            className="peer focus:outline-none"
            placeholder=""
          />
          <label
            for="email"
            className="transition-all absolute top-[-16px] left-0  text-priColor-700 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-priColor-900 text-xs"
          >
            Email
          </label>
        </div>
        <div class="input relative h-24 w-full mt-4">
          <textarea
            type="text"
            name="message"
            className="peer focus:outline-none"
            placeholder=""
          />
          <label
            for="message"
            className="transition-all absolute top-[-16px] left-0  text-priColor-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-priColor-900 text-xs"
          >
            Leave a message...
          </label>
        </div>

        <motion.div
          whileHover={{
            boxShadow: " 0px 0px 53px 5px rgba(197,29,29,0.51)",
            scale: 1.1,
            transition: { duration: 0.5, type: "spring" },
          }}
          className="btn"
          whileTap={{ scale: 0.9 }}
        >
          <button>Submit</button>
        </motion.div>
      </form>
    </>
  );
};

export default FormContact;
