"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const HomeMain = () => {
  const headLine =
    "Elevate Your Online Experience: Explore, Learn, and Connect";
  const headLineSplite = headLine.split("");
  return (
    <div className="w-full flex gap-5 relative min-h-screen h-auto main_page ">
      {/* LEFT */}
      <div className="flex flex-[2] flex-col h-[70vh]  items-center justify-center relative">
        <div className="h-[80%]flex flex-col items-center justify-center main_left">
          <motion.h1
            className="font-bold  relative text-black mix-blend-multiple flex main_title"
            // initial={{ opacity: 0, y: 20, skewX: -30 }}
            // animate={{ opacity: 1, y: 1, skewX: 0 }}
          >
            {headLineSplite.map((item, i) => (
              <motion.p
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.01 * i }}
              >
                {item}
              </motion.p>
            ))}
          </motion.h1>
          <motion.h1
            className="font-bold main_title_phone hidden"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {headLine}
          </motion.h1>
          <motion.p
            className="f font-light main_des"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {" "}
            Welcome to our blog site, your virtual hub for a world of engaging
            content and meaningful connections. Embark on a digital journey
            where curiosity leads the way, and exploration knows no bounds. Our
            blog is a treasure trove of knowledge, insights, and inspiration,
            spanning diverse topics that cater to your interests and passions.
            Whether youre seeking to learn something new, gain expert advice, or
            simply connect with a like-minded community, our blog has it all.
            Join us as we explore the digital landscape together, learn from
            each other, and foster connections that transcend boundaries. Its
            time to elevate your online experience, and it all starts here. Dive
            in, discover, and let the adventure unfold
          </motion.p>
        </div>
        <div className="mt-8 flex gap-4">
          <motion.input
            type="text"
            placeholder="Enter your email"
            className="rounded-full px-4 py-2 duration-200 outline-none focus:outline"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          />
          <motion.button
            className=" px-4 py-2 rounded-full bg-black text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Subscribe
          </motion.button>
        </div>

        <motion.div
          className="absolute h-[700px] w-[700px] rounded-full bg-[#7e1bff] -z-[1] -left-[50%] -top-[20%]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        ></motion.div>
      </div>
      {/* RIGHT */}
      <div className="flex flex-[3] items-center justify-center main_right">
        <div className="relative -mt-24">
          <motion.div
            className="w-[400px] absolute left-24 z-[4] img_two"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <img
              src="https://www.siliconrepublic.com/wp-content/uploads/2022/09/AdobeStock_524543517-718x523.jpeg"
              alt="ai-art"
            />
          </motion.div>
          <motion.div
            className="w-[400px] absolute -top-72 z-[3] img_one"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src="https://uploads-ssl.webflow.com/6323f8949ce860a80116db9b/63ef246dabe869583c7387fc_pixelandcode.jpg"
              alt="ai-art"
            />
          </motion.div>
          <motion.div
            className="w-[400px] absolute -right-20 img_three"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <img
              src="https://i.dailymail.co.uk/1s/2023/05/14/18/70822311-12068585-Washington_The_cities_of_the_future_will_be_greener_and_ruled_by-a-33_1684083859268.jpg"
              alt="ai-art"
            />
          </motion.div>
        </div>
      </div>
      {/* svg wave */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-[140%] absolute bottom-0 -left-[20%] -z-[1]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <path
          fill="#7e1bff"
          fill-opacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,224C840,224,960,192,1080,160C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </motion.svg>
    </div>
  );
};

export default HomeMain;
