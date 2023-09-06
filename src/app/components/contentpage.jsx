/* eslint-disable @next/next/no-img-element */
"use client";
import { PiPinterestLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";
import {
  BiLogoAdobe,
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoKickstarter,
  BiLogoGoogleCloud,
  BiLogoMongodb,
} from "react-icons/bi";

import { useEffect, useState } from "react";
import Link from "next/link";

const ContentPage = () => {
  const [loading, setLoading] = useState(true);
  const [contents, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/postcontent");
      const result = await response.json();
      setContent(result);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="w-fll">
      <div className="flex items-center justify-around text-[4rem] text-white bg-[#090b25] py-4 overflow-hidden">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <PiPinterestLogoFill />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <BiLogoAdobe />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <BiLogoFigma />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <BiLogoFirebase />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <BiLogoKickstarter />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <BiLogoGoogleCloud />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <BiLogoMongodb />
        </motion.div>
      </div>
      {/* content */}

      <div className="grid grid-cols-3 items-center relative">
        {loading ? (
          <div className="w-full bg mx-auto absolute top-0 left-0 flex justify-center">
            <img
              src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"
              alt="loading"
            />
          </div>
        ) : (
          contents?.map((item, i) => (
            <Link
              href={`${process.env.PAGE_URL}/${item._id}`}
              key={i}
              className="w-[400px] h-[350px] bg-slate-200 px-4 py-4 mx-auto my-4 rounded shadow-lg relative box"
            >
              <h1 className="font-bold">{item.title}</h1>
              <h4>Author: {item.author}</h4>
              <h5>{item.content.substring(0, 200)}...</h5>
              <button className="px-4 py-2 rounded bg-[#7e4af8] text-white">
                Read More
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ContentPage;
