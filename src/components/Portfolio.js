import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import port from "../images/185.jpg";
// import { useRef } from "react";
// import pimage from "../images/wp.png";

const containerVarients = {
  hidden: {
    opacity: 0,
    y: "-6vh",
  },
  visible: {
    opacity: 1,
    y: "0vh",
    transition: {
      delay: 0.7,
      duration: 0.3,
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Portfolio = () => {
  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen"
    >
      <div className="p-0 md:flex w-full md:h-screen text-center md:flex-row bottom-0">
        <div className="side md:h-screen bg-gray-200 p-4 top-0 w-full md:w-1/4">
          <Link to={"/"}>
            <div className="backBtn box w-14 h-14 ">
              <BsArrowLeft
                size="2em"
                className="hover:scale-50 text-gray-800"
              />
            </div>
          </Link>

          <div className="info md:-mx-4">
            <span className="text-2xl md:text-3xl font-bold"> Owner </span>
            <span className="font-light"> Living Stone</span>
            <span className="text-2xl md:text-3xl font-bold"> Type </span>
            <span className="font-light"> Web Application</span>
            <span className="text-2xl md:text-3xl font-bold"> Stack </span>
            <span className="font-light"> Mongodb, Express Js, ReactJs</span>
            <span className="text-2xl md:text-3xl font-bold"> Location </span>
            <span className="font-light">stori.rw</span>
          </div>
        </div>

        <div className=" md:h-screen bg-white w-full md:w-3/4 cont">
          <div className="screen h-full md:border-gray-500 border-solid border-l-2  shadow-4md">
            <div className="project-title-container p-5 text-left">
              <h3 className="text-2sm md:text-4xl text-white align-left">
                STORI STORE
              </h3>
              <div className="text-white px-6 divide-white border-l-2 border-solid hover:text-red-400">
                <Link to="/">
                  <span className="animate-pulse">Next Project</span>
                </Link>
              </div>
            </div>

            <div className="project-content overflow-scroll">
              <div className="image flex content-center align-center p-1">
                <img
                  src={port}
                  alt="project"
                  className="md:w-full rounded shadow-2md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
